import {useCallback, useEffect, useRef, useState} from "react";

export const useAnimationPlayState = () => {
  const textWrapper = useRef(null);
  const [animationPlayState, setAnimationPlayState] = useState(undefined)
  useEffect(() => {
    const mouseOutHandler = function () {
      setAnimationPlayState('running');
    };
    const mouseInHandler = function () {
      setAnimationPlayState('paused');
    };
    textWrapper.current.addEventListener(
      "mouseenter",
      mouseInHandler
    );
    textWrapper.current.addEventListener(
      "mouseleave",
      mouseOutHandler
    );
    return () => {
      textWrapper.current.removeEventListener(
        "mouseenter",
        mouseInHandler
      );
      textWrapper.current.removeEventListener(
        "mouseleave",
        mouseOutHandler
      );
    }
  }, []);
  return {textWrapper, animationPlayState}
}

const dynamicStyle = document.createElement("style");
dynamicStyle.type = "text/css";
let keyFrames = `
  @-webkit-keyframes dynamicMarqueeAnimation {
    100% {
      -webkit-transform: translateX(DYNAMIC_VALUE);
      transform: translateX(DYNAMIC_VALUE);
    }
  }
  @-moz-keyframes dynamicMarqueeAnimation {
    100% {
      -webkit-transform: translateX(DYNAMIC_VALUE);
      transform: translateX(DYNAMIC_VALUE);
    }
  }
  @keyframes dynamicMarqueeAnimation {
    100% {
      -webkit-transform: translateX(DYNAMIC_VALUE);
      transform: translateX(DYNAMIC_VALUE);
    }
  }
`;

export const useAnimationState = (speed) => {
  const textElem = useRef(null);
  const [animation, setAnimation] = useState(undefined);
  useEffect(() => {
    const marqueeRun = useCallback(() => {
      const marqueeSpeed = speed || 1;
      const textElemWidth = textElem.current.clientWidth;
      const width = textElemWidth + 40;
      dynamicStyle.innerHTML = keyFrames.replace(/DYNAMIC_VALUE/g, `-${width}px`);
      setAnimation(`dynamicMarqueeAnimation ${(width *
        20) /
      marqueeSpeed}ms linear infinite`);
    }, [speed]);
    document.querySelector("head").append(dynamicStyle);
    marqueeRun();
    window.addEventListener("resize", marqueeRun);
    return () => {
      window.removeEventListener("resize", marqueeRun);
      dynamicStyle.remove();
    }
  })

  return {textElem, animation}
}
