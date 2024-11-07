import React from 'react'
import RegisterPage from './RegisterPage'
import ModelTux from './ModelTux'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Page2() {
  return (
    <div className="page h-[120vh] bg-[#000628] z-50  flex items-center justify-center flex-col gap-[9vh]"> 
        <div className="text flex items-center justify-center flex-col">
            <div className="heading text-white font-bold text-[5vh]">Walchand Linux Users' Group</div>
            <div className="heading text-white font-bold text-[3vh]">Member Board Drive 1</div>
            <div className="heading text-white font-bold text-[2vh]">Prepare to join a vibrant community of  Linux enthusiasts and emerse yourself in the dynamic world of Open Source.   </div>
        </div>
       <div className="box h-full md:h-[70vh] w-[80vw] flex flex-col md:flex-row gap-10">
            <div className="tux h-1/2 md:h-full w-full md:w-1/2 rounded-xl bg-opacity-[20%]  bg-zinc-400 relative">
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <ModelTux/>
                <OrbitControls enableZoom={false} enablePan={true} />
                {/* <TrackballControls /> */}
            </Canvas>
            </div>
            <div className="tux h-1/2 md:h-full w-full md:w-1/2 rounded-xl bg-opacity-[20%] bg-zinc-400 relative">
                <RegisterPage/>
            </div>
       </div>
    </div>
  )
}

export default Page2