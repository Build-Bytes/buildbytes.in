import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

'use client';
import useMousePosition from '../hooks/useMousePosition';

export default function Cursor() {
    let {x, y} = useMousePosition();
    const cursorRef = useRef(null);

    useEffect(() => {
        console.log(x, y)

        const context = gsap.context(() => {
            gsap.to(cursorRef.current, {
                x: x,
                y: y,
                duration: 0.5,
                ease: 'back.out(2)'
            })
        })

        return () => context.kill();
    })

    return (
        <div
            ref={cursorRef}
            className='max-md:hidden absolute w-7 h-7 bg-myOrange rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'
        >
        </div>
    )
}
