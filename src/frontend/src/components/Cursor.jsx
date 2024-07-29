import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

'use client';
import useMousePosition from '../hooks/useMousePosition';

export default function Cursor({size=25, color='rgb(236,78,57)', blendMode='normal'}) {

    let {x, y} = useMousePosition();
    const cursorRef = useRef(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(cursorRef.current, {
                x: x ,
                y: y ,
                duration: 0.5,
                ease: 'back.out(2)'
            })
        })

        return () => context.kill();
    })

    return (
        <div
            ref={cursorRef}
            className="max-md:hidden absolute rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                mixBlendMode: blendMode
            }}
        >
        </div>
    )
}
