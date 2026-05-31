"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function HeroSVG() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use springs for smooth interpolation
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map mouse position to movement range (e.g., -30px to 30px)
  const x = useTransform(springX, [-1, 1], [-30, 30]);
  const y = useTransform(springY, [-1, 1], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none flex items-center justify-center overflow-hidden">
      <svg 
        preserveAspectRatio="xMidYMid slice" 
        data-bbox="0.13 0.54 1775.41 661.92" 
        viewBox="0 0 1776 663" 
        className="w-[110%] h-[110%] object-cover min-w-[1776px] opacity-80" 
        xmlns="http://www.w3.org/2000/svg" 
        role="presentation" 
        aria-hidden="true" 
        aria-label=""
      >
        <g>
          <defs>
            <clipPath id="d0105765-02fd-40dd-a4d2-c15fce2286b3_comp-lwriwop8">
              <path strokeWidth="0" d="M1776 0v663H0V0h1776z"></path>
            </clipPath>
          </defs>
          
          {/* Animated Red Shapes */}
          <motion.g style={{ x, y }}>
            {/* Original 6 shapes */}
            <path className="fill-red-500" d="m1250.8 146.9-36.3 15.9 76 .8v54.7l42.3-9.5v-61.4l-82-.5z"></path>
            <path className="fill-red-500" d="m1419.9 539.7-43.3-16.5-90.3.5 34.3 16h99.3z"></path>
            <path className="fill-red-500" d="m468 505.7-87.9-.5-41.9 16h96.6l33.2-15.5z"></path>
            <path className="fill-red-500" d="M614.7 472.7h-73.9l-33.5 15.5h81.3l26.1-15.5z"></path>
            <path className="fill-red-500" d="M832.4 505.7h-89.7l-11 15.5h97.1l3.6-15.5z"></path>
            <path className="fill-red-500" d="m1463.2 219.5-86.1 14.1v33l86.6-6.8-.5-40.3z"></path>

            {/* Added 7 new shapes scattered around */}
            <path className="fill-red-500 opacity-80" transform="translate(-600, -50) scale(0.8)" d="m1250.8 146.9-36.3 15.9 76 .8v54.7l42.3-9.5v-61.4l-82-.5z"></path>
            <path className="fill-red-500 opacity-90" transform="translate(-800, 100)" d="m1419.9 539.7-43.3-16.5-90.3.5 34.3 16h99.3z"></path>
            <path className="fill-red-500 opacity-70" transform="translate(600, -200) scale(1.1)" d="m468 505.7-87.9-.5-41.9 16h96.6l33.2-15.5z"></path>
            <path className="fill-red-500 opacity-85" transform="translate(100, -300)" d="M614.7 472.7h-73.9l-33.5 15.5h81.3l26.1-15.5z"></path>
            <path className="fill-red-500 opacity-95" transform="translate(-300, 150) scale(0.9)" d="M832.4 505.7h-89.7l-11 15.5h97.1l3.6-15.5z"></path>
            <path className="fill-red-500 opacity-80" transform="translate(-1000, -50)" d="m1463.2 219.5-86.1 14.1v33l86.6-6.8-.5-40.3z"></path>
            <path className="fill-red-500 opacity-75" transform="translate(-200, -150) scale(1.2)" d="m1250.8 146.9-36.3 15.9 76 .8v54.7l42.3-9.5v-61.4l-82-.5z"></path>
          </motion.g>

          {/* Static Grid Lines */}
          <g clipPath="url(#d0105765-02fd-40dd-a4d2-c15fce2286b3_comp-lwriwop8)">
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M.65.54 475.37 170.9"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 60.72 474.72 138.39"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 120.88 474.72 106.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 181.06 474.72 74.48"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 241.24 474.72 42.51"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 301.42 474.72 10.55"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 361.58 474.72-21.4"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 421.76 474.72-53.37"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 481.94 474.72-85.33"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 542.12 474.72-117.3"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 602.28 474.72-149.25"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m.65 662.46 474.72-181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1298.96 170.9 1775.54.54"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 199.12 476.58-138.39"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 227.33 476.58-106.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 255.54 476.58-74.48"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 283.76 476.58-42.51"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 311.97 476.58-10.55"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 340.18 476.58 21.4"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 368.39 476.58 53.37"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 396.61 476.58 85.33"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 424.82 476.58 117.3"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 453.03 476.58 149.25"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 481.24 476.58 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 170.9h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 199.12h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 227.33h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 255.54h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 283.75h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 311.97h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 340.18h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 368.4h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 396.61h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 424.82h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 453.03h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 481.24h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 170.9v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M432.21 155.41v342.31"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M389.05 139.94v374.25"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M345.89 124.44v406.22"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M302.73 108.94v438.19"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M259.59 93.47V563.6"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M216.43 77.98V580.1"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M173.27 62.5v534.07"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M130.11 47.01v566.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M86.95 31.51v598"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M43.79 16.04v629.95"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M.65.54v661.92"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1298.96 170.9v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1342.29 155.41v342.31"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1385.6 139.94v374.25"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1428.93 124.44v406.22"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1472.25 108.94v438.19"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1515.58 93.47V563.6"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1558.91 77.98V580.1"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1602.23 62.5v534.07"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1645.56 47.01v566.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1688.89 31.51v598"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1732.21 16.04v629.95"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.54.54v661.92"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 170.9v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M550.23 171.01v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M625.12 171.1v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M699.98 171.21v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M774.84 171.3v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M849.73 171.41v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M924.59 171.49v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M999.47 171.6v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1074.34 171.69v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1149.22 171.79v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1224.08 171.88v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1298.96 171.99v310.34"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M.65 662.46h1774.89"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M.65.54h1774.89"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M43.79 16.04h1688.42"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M86.95 31.51h1601.93"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M130.11 47.01h1515.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M173.27 62.5h1428.96"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M216.43 77.98h1342.48"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M259.59 93.47h1255.99"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M302.73 108.94h1169.52"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M345.89 124.44h1083.03"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M389.05 139.94h996.55"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M432.21 155.41h910.08"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 170.9h823.59"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1775.54 662.46H.65"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1732.45 645.98H44.05"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1689.39 629.51H87.47"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1646.32 613.04H130.87"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1603.25 596.57H174.27"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1560.16 580.1H217.69"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1517.1 563.6H261.09"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1474.03 547.13H304.51"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1430.94 530.66H347.91"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1387.88 514.19H391.33"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1344.81 497.72H434.73"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1301.74 481.24H478.15"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1298.96 481.24 476.58 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1224.08 481.24 390.09 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1149.22 481.24 303.6 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m1074.34 481.24 217.13 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m999.47 481.24 130.65 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m924.59 481.24 44.18 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="m849.73 481.24-42.31 181.21"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M774.85 481.24 646.06 662.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M699.98 481.24 484.7 662.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M625.12 481.24 323.35 662.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M550.24 481.24 162 662.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 481.24.65 662.45"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1298.45 171.4 1775.02 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1223.62 171.36 1613.67 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1148.79 171.32 1452.32 1.05"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M1073.96 171.27 1290.97 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M999.14 171.23 1129.62 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M924.31 171.19 968.25 1.05"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M849.5 171.14 806.9 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M774.67 171.08 645.54 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M699.85 171.03 484.2 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M625.02 170.99 322.84 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M550.2 170.95 161.48 1.04"></path>
            <path strokeMiterlimit="10" stroke="#4d4d4d" fill="none" d="M475.37 170.9.13 1.04"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}
