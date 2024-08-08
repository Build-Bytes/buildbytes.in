import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';

// hooks
import useMousePosition from '../hooks/useMousePosition';

// image 
import blackCircle from '../assets/black-circle.svg'

export default function Hero() {

    const charRefs = useRef([]);
    const cursorRef = useRef(null);
    const {x, y} = useMousePosition();
    let [size, setSize] = useState(30);


    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(cursorRef.current, {
                webkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
                duration: 0.5,
                ease: 'back.out(2)',
            })
        })

        return () => context.kill();
    }, [x, y]);

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
            <div
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
            </div>
        </section>
    )
}
