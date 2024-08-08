import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

// images 
import blackCircle from '../assets/black-circle.svg'

export default function Hero() {

    const charRefs = useRef([]);
    const cursorRef = useRef(null);

    const addToRefs = (el) => {
        if (el && !charRefs.current.includes(el)) {
            charRefs.current.push(el);
        }
    };


    return (
        <section className="w-full h-screen flex justify-center flex-col overflow-hidden">
            <div className='font-extrabold text-center'>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>
                    {
                        "Welcome to".split("").map((char, i) => (
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
            </div>
            <div className='text-myOrange font-extrabold text-center'>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>
                    {
                        "We Build,".split('').map((char, i) => (
                            <span key={i}>{char}</span>
                        ))
                    }
                </h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>
                    {
                        "Your Future.".split('').map((char, i) => (
                            <span key={i}>{char}</span>
                        ))
                    }
                </h1>
            </div>

            {/* <div
                ref={cursorRef}
                className='max-lg:hidden text-black absolute w-full h-screen flex justify-center flex-col font-extrabold text-center text-8xl'
                style={{
                    position: 'absolute',
                    maskImage: `url(${blackCircle})`,
                    background: 'rgb(236,78,57)',
                    maskRepeat: 'no-repeat',
                    maskSize: size
                }}
            >
                <h1 className='tracking-tight'>Weeeeeeeee</h1>
                <h1>Buildddddd</h1>
                <h1>Yoooou're</h1>
                <h1>Fuuuuuture.</h1>
            </div> */}

        </section>
    )
}
