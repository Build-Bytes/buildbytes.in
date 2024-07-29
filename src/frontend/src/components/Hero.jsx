import React from 'react'
import Cursor from './Cursor';

export default function Hero() {

    return (
        <section className="w-full h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between" >
            <div className="text-[15vw] font-bold leading-[16vw] lg:text-[8vw] lg:leading-[8vw]">
                <h1>Welcome to</h1>
                <h1>BuildBytes.</h1>
                <div className="max-md:hidden text-myOrange">
                    <h1>We build,</h1>
                    <h1>your future.</h1>
                </div>
            </div>
            <div className="text-[15vw] font-bold leading-[16vw] max-lg:text-[rgb(236,78,57)] lg:hidden lg:leading-[8vw]" >
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
            <Cursor size={50} isTransperent={true} />
        </section>
    )
}
