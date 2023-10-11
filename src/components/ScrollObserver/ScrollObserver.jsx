import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollObserver.scss";

const ScrollObserver = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasEnteredView, setHasEnteredView] = useState(false);
  useEffect(() => {
    if (inView && !hasEnteredView) {
      setHasEnteredView(true);
    }
  }, [inView, hasEnteredView]);

  return (
    <div
      ref={ref}
      className={
        hasEnteredView
          ? "scrollObserverWrapper"
          : "scrollObserverWrapperNotVisible"
      }
    >
      {children}
    </div>
  );
};

export default ScrollObserver;
