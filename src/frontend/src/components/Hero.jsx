import React, { useRef, useState } from 'react'

// hooks
import useMousePosition from '../hooks/useMousePosition';

// image 
import blackCircle from '../assets/black-circle.svg'

export default function Hero() {

    const {x, y} = useMousePosition();

    return (
        <section className="w-full h-screen flex justify-center flex-col overflow-hidden">
            <div className='font-extrabold text-center'>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>Welcome to</h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>BuildBytes.</h1>
            </div>
            <div className='text-myOrange font-extrabold text-center'>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>We Build,</h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>Your Future.</h1>
            </div>
            <div 
                className='max-lg:hidden text-black absolute w-full h-screen flex justify-center flex-col font-extrabold text-center text-8xl'
                style={{
                    position: 'absolute',
                    maskImage: `url(${blackCircle})`,
                    background: 'rgb(236,78,57)',
                    maskRepeat: 'no-repeat',
                    maskSize: 50
                }}
            >
                <h1 className='tracking-tight'>Weeeeeeeee</h1>
                <h1>Buildddddd</h1>
                <h1>Yoooou're</h1>
                <h1>Fuuuuuture.</h1>
            </div>
        </section>
    )
}
