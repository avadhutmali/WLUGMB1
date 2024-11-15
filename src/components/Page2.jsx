// import React from "react";
import RegisterPage from "./RegisterPage";
import ModelTux from "./ModelTux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import "./Page2.css";s

function Page2() {
  return (
    <div className="page h-full md:h-[160vh] bg-[#000628] z-50 flex items-center md:justify-center flex-col gap-[9vh]">
      <div className="text flex items-center justify-center flex-col md:gap-6">
        <div className="heading  text-white font-bold text-2xl md:text-[6vh] ">
          Member Board Drive 1
        </div>
        {/* <div className="heading text-white font-bold text-xl md:text-[4vh]"></div> */}
        <div className="heading text-white text-[1.2vh] text-xl md:text-[2.5vh] text-center">
          <p>
            Prepare to join a vibrant community of Linux enthusiasts and immerse
            yourself in the dynamic world of Open Source.
          </p>
        </div>
      </div>

      <div className="box flex flex-col md:flex-row gap-4 w-full md:w-[80vw] h-[120vh] rounded-xl ">
        {/* Left Box with Canvas and Model */}
        <div id="tux" className="tux flex-1 flex justify-center items-center w-full md:w-[50%] bg-opacity-[20%] bg-zinc-400 rounded-xl ">
          <Canvas className="w-[70vw] h-[250vh] md:w-full md:h-full">
            <ambientLight intensity={1.5} />
            <ModelTux />
            <OrbitControls enableZoom={false} enablePan={true} />
          </Canvas>
        </div>

        {/* Right Box with Register Page */}
        <div id="register" className="register flex-1 flex justify-center items-center w-full md:w-[50%] bg-opacity-[20%] bg-zinc-400 rounded-xl mb-5 sm:mb-0">
          {/* <RegisterPage /> */}
          <div className="w-full p-4 sm:p-8 rounded-xl sm:mb-0">
            <div className="space-y-6 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-center text-white text-3xl">
              Registration Closed
            </div>
            {/* <div className="space-y-6 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-center text-white text-3xl">
              All the best
              <br></br>
              See you Soon
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
