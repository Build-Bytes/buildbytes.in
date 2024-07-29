import React from 'react'

import blackCircle from '../assets/black-circle.svg';

export default function Hero() {



    return (
        <section className="w-full h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between" >
            <div className="bg-amber-300/40 text-[15vw] font-bold leading-[16vw] lg:text-[10vw] lg:leading-[8vw]">
                <h1>Welcome to</h1>
                <h1>BuildBytes.</h1>
            </div>
            <div 
                className="bg-amber-300/40 text-[15vw] font-bold leading-[16vw] max-lg:text-[rgb(236,78,57)] lg:text-[10vw] lg:leading-[8vw] lg:absolute"
                style={{
                    maskImage: `url(${blackCircle})`,
                    background: 'rgb(236,78,57)',
                    maskRepeat: 'no-repeat',
                    maskSize: '170px',
                    maskPosition: `50%`,
                    color: 'black'
                }}
            >
                <h1>We build,</h1>
                <h1>your future.</h1>
            </div>
            <div className="border-2 border-red-600 grid grid-cols-2 justify-items-center items-center lg:h-[80%] lg:w-[35%]">
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>1</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>2</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>3</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>4</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>5</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>6</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>7</h1>
                <h1 className='w-40 h-10 rounded-full bg-[rgb(236,78,57)] inline-flex justify-center items-center'>8</h1>
            </div>
        </section>
    )
}
