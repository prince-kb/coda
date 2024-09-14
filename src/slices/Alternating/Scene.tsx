"use client";

import FloatingCan from "@/components/FloatingCan";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {};

export default function Scene({}: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)",true);
  const canRef = useRef<Group>(null);

  const bgColors = ["#FFA685", "#E9CFF6", "#CBEF9A"];

  useGSAP(() => {
    if (!canRef.current) return;
    const sections= gsap.utils.toArray(".alternating-section");
    const scrollTl = gsap.timeline({
        scrollTrigger : {
            trigger : ".alternating-text-view",
            endTrigger : ".alternating-text-container",
            pin : true,
            start : "top top",
            end : "bottom bottom",
            scrub : true
        }
    })

    sections.forEach((_,index) => {
        if (!canRef.current || index===0) return;
        
        const isOdd = index%2!==0;

        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yPosition = isDesktop ? (isOdd ? ".4" : "-.4") : 0;
        scrollTl
        .to(canRef.current.position,{
            x: xPosition,
            ease:"circ.inOut",
            delay:0.5
        })
        .to(canRef.current.position,{
            y: yPosition,
            ease:"back.inOut",
        },"<")
        .to(".alternating-text-container",{
            backgroundColor: gsap.utils.wrap(bgColors,index),
        },"<")
    })

  },{dependencies : [isDesktop]});

  return (
    <group ref={canRef} position-x={isDesktop ? 1 : 0} rotation-y={isDesktop ? -.3 : 0}>
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files="./hdr/lobby.hdr" environmentIntensity={1.5} preset="sunset"/>
      <ambientLight intensity={2}/>
    </group>
  );
}
