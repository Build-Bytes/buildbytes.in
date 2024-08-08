import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Cursor from './Cursor'

export default function Hero() {

    const charRefs = useRef([]);
    const [size, setSize] = useState(30);


    const addToRefs = (el) => {
        if (el && !charRefs.current.includes(el)) {
            charRefs.current.push(el);
        }
    };


    return (
        <section className="w-full h-screen flex justify-center items-center flex-col overflow-hidden">
            <div className='relative font-extrabold text-center' >
                {/* Overlay for Cursor animation */}
                <div className='max-lg:hidden absolute w-full h-full z-20' onMouseEnter={() => setSize(200)} onMouseLeave={() => setSize(30)}></div>

                {/* Slogans */}
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>
                    {
                        "Welcome to".split('').map((char, i) => (
                            <span ref={addToRefs} key={i}>{char}</span>
                        ))
                    }
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>
                    {
                        "BuildBytes.".split('').map((char, i) => (
                            <span ref={addToRefs} key={i}>{char}</span>
                        ))
                    }
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl text-amber-500'>
                    {
                        "We Build,".split('').map((char, i) => (
                            <span key={i}>{char}</span>
                        ))
                    }
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl text-amber-500'>
                    {
                        "Your Future.".split('').map((char, i) => (
                            <span key={i}>{char}</span>
                        ))
                    }
                </h1>
            </div>
            <Cursor className='z-10' size={size} color='white' blendMode='exclusion' />

        </section>
    )
}
