import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

function Stairs(props) {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.to(stairParentRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.2,
        },
        duration: 0.5,
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.2,
        },
        duration: 0.5,
      });

      tl.to(stairParentRef.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        duration: 1.2,
        opacity: -100,
      })
    },
    [currentPath],
  );

  return (
    <>
      <div>
        <div ref={stairParentRef} className="w-full h-screen fixed z-20 top-0">
          <div className={"w-full h-full flex"}>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
            <div className="stair h-full w-1/5 bg-black"></div>
          </div>
        </div>
        <div ref={pageRef}>
            {props.children}
        </div>
      </div>
    </>
  );
}

export default Stairs;
