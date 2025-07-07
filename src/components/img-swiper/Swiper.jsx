// SwiperParticles.js
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Autoplay } from "swiper/modules";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function SwiperParticles() {
  // tsParticles init
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // tsParticles options
  const particlesOptions = {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 5, random: { enable: true, minimumValue: 4 } },
          rate: { value: 10, random: { enable: true, minimumValue: 5 } },
          particles: {
            collisions: { enable: false },
            destroy: { mode: "none" },
            life: { count: 1, duration: { value: 1 } },
          },
        },
      },
      shape: { type: "circle", polygon: { sides: 5 } },
      opacity: { value: 1 },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 4 },
      },
      collisions: {
        enable: true,
        mode: "destroy",
      },
      move: {
        enable: true,
        speed: 7,
        direction: "none",
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", right: "-210px" }}>
      {/* tsParticles */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

      {/* Swiper */}
      <Swiper
        modules={[EffectCube, Autoplay]}
        effect="cube"
        grabCursor={true}
        loop={true}
        speed={1000}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        style={{
          width: "350px",
          height: "450px",
          position: "relative",
          borderRadius: "20px",
          zIndex: 10, borderRadius: "20px"

        }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "#5565ff",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              borderRadius: "20px"

            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiUeZnQUxBT5mZHEHpIMHcc2ImoH0S0B6yiSFUnuTxfDNCRhKY8PlbnWpt-l6r1czDe0&usqp=CAU" alt=""
              style={
                {
                  width: "350px",
                  height: "450px",
                  marginLeft: "0px",
                  borderRadius: "20px"
                }
              }
            />          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div
            style={{
              backgroundColor: "#f55",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              borderRadius: "20px"
            }}
          >
            <img src="https://png.pngtree.com/png-clipart/20240112/original/pngtree-3d-programmer-computer-character-cartoon-three-dimensional-cute-profession-png-image_14088797.png" alt=""
              style={
                {
                  width: "350px",
                  height: "450px",
                  marginLeft: "0px",
                  borderRadius: "20px"
                }
              } />          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "#f55",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              borderRadius: "20px"
            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9SxloNIppmI6GX1vGMmJo8MKYzGy9QaD0lA5uOY0GwFZoE_WNk-gb-S_1xwnH-4U-ATQ&usqp=CAU" alt=""
              style={
                {
                  width: "350px",
                  height: "450px",
                  marginLeft: "0px",
                  borderRadius: "20px"
                }
              } />          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "yellow",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              borderRadius: "20px"

            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDoV0_peuHaWaW8rDch0WycAoPCoVWY029eKCfOHviUBWFq3FdbJEoeXR8poRbZ1DvQY&usqp=CAU" alt="" style={
              {
                width: "350px",
                height: "450px",
                marginLeft: "0px",
                borderRadius: "20px"
              }
            } />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
