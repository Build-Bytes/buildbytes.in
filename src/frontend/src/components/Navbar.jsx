import React from "react";

export default function Navbar() {

    const navItems = ['home', 'about', 'services', 'contact', 'my account'];
    
	return (
		<div className="fixed z-[999] w-full h-14 flex justify-between items-center bg-center bg-black/30 backdrop-blur-sm font-semibold text-xl">
			<div id="logo" className="ml-10">
                <a href="#home">BuildBytes</a>
            </div>
            <div className="flex justify-center items-center capitalize font-normal">
                {
                    // Nav items
                    navItems.map((item, index) => (
                        <a 
                            key={index} 
                            href={`#${item}`} 
                            className={`
                                py-2 px-5 rounded-2xl
                                ${index === 4 && 'ml-32'}
                                duration-900 ease-in-out
                                hover:text-amber-500 hover:duration-700 hover:ease-in-out
                            `}
                        > {item} </a>
                    ))
                }
            </div>
		</div>
	);
}
