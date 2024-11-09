import React from 'react'
import RegisterPage from './RegisterPage'
import ModelTux from './ModelTux'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Page2() {
  return (
    <div className="page h-full md:h-[120vh] bg-[#000628] z-50  flex items-center md:justify-center flex-col gap-[9vh]"> 
        <div className="text flex items-center justify-center flex-col md:gap-4">
            <div className="heading text-white font-bold text-2xl md:text-[8vh]">Walchand Linux Users' Group</div>
            <div className="heading text-white font-bold text-xl md:text-[4vh]">Member Board Drive 1</div>
            <div className="heading text-white text-[1.9vh] text-xl md:text-[2.5vh] text-center">
              <p>Prepare to join a vibrant community of</p>
              <p>Linux enthusiasts and immerse yourself in the</p>
              <p>dynamic world of Open Source.</p>
              {/* <p>Prepare to join a vibrant community of  Linux enthusiasts and emerse yourself in the dynamic world of Open Source.</p>   */}
               
            </div>
        </div>
       <div className="box h-[130vh] md:h-[70vh] w-[80vw] flex flex-col md:flex-row gap-10">
            <div className="tux h-[30vh] md:h-full w-full md:w-1/2 rounded-xl bg-opacity-[20%]  bg-zinc-400 relative">
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={1.4} />
                <ModelTux/>
                <OrbitControls 
                  enableZoom={false}
                  enablePan={true}
                  minPolarAngle={Math.PI / 2}  
                  maxPolarAngle={Math.PI / 2}          
                  enableDamping={true}                
                  dampingFactor={0.05}
                />
                {/* <TrackballControls /> */}
            </Canvas>
            </div>
            <div className="tux  w-full md:w-1/2 rounded-xl bg-opacity-[20%] bg-zinc-400 relative">
                <RegisterPage/>
            </div>
       </div>
    </div>
  )
}

export default Page2