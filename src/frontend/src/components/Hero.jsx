import React, { useRef, useState } from 'react'
// import Cursor from './Cursor';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

// image 
import blackCircle from '../assets/black-circle.svg'

export default function Hero() {
    // const [cursorSize, setCursorSize] = useState(25);
    const {x, y} = useMousePosition();

    const varients = {
        initial1: {
            opacity: 0,
            x: -500,
        },
        initial2: {
            opacity: 0,
            x: 500,
        },
        final: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <section className="w-full h-screen flex justify-center flex-col overflow-hidden">
            <motion.div className='font-extrabold text-center' variants={varients} initial='initial1' animate='final' transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>Welcome to</h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>BuildBytes.</h1>
            </motion.div>
            <motion.div className='text-myOrange font-extrabold text-center' variants={varients} initial='initial2' animate='final' transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>We Build,</h1>
                <h1 className='text-6xl md:text-8xl lg:text-10xl'>Your Future.</h1>
            </motion.div>
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
