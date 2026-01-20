import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      y: "-100%",
      duration: 1.4,
      delay: 1.2,
      ease: "power4.inOut",
      onComplete: onFinish,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >
      <h1 className="text-5xl tracking-widest">YASH VIRANI</h1>
    </div>
  );
}
