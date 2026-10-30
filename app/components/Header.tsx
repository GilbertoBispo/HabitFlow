'use client';

// importing useState and useRef
import { useState, useRef } from "react";

export default function Header() {
    // definition of the state
    const [isActive, setActive] = useState<boolean>(false);

    // grabbing the button
    const menuButton = useRef<HTMLButtonElement>(null);

    // function to handle the click event and convert the value of isActive
    const handleClick = () => {
        if (menuButton.current) {
            // converting the value of isActive and assigning the value to "state" constant
            const state = !isActive;
            // using the converted value as an argument for setActive
            setActive(state);
        }
    }

    // defining the links
    const links = [
        {
            id: 0,
            text: "Dashboard"
        },
        {
            id: 1,
            text: "Features"
        },
        {
            id: 2,
            text: "Analytics"
        },
        {
            id: 3,
            text: "Pricing"
        }
    ];

    return (
        <header className="h-16 flex items-center justify-between">
            <div className="">
                <a href="">
                    <img className="h-16" src="/logo.png" alt="HabitFlow logo" />
                </a>
            </div>

            {/* links */}
            <div className={`z-1 absolute -translate-y-full transition-all duration-500 w-full h-full bg-white/50 backdrop-blur-lg ${isActive ? 'inline-block  translate-y-50 m-auto' : ' transition-all duration-500'}`}>
                <nav className="h-full flex flex-col justify-center">
                    <ul className="flex gap-5 flex-col items-center">
                        {
                            links.map((link, index) => {
                                // taking the text attribute from the objects
                                const linkText = link.text;
                                return (
                                    <li className="text-xl p-5" key={index}>
                                        <a className="text-(--menu) p-5 hover:text-(--text) font-bold" href="">
                                            {linkText}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>

            {/* menu button for mobile devices */}
            <div className="w-16 h-full z-2">
                <button ref={menuButton} onClick={handleClick} className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'w-9 rotate-45 transition-all duration-200 translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'opacity-0' : 'rotate-0 transition-all duration-200'}`}></span>
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'w-9 -rotate-45 transition-all duration-200 -translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                </button>
            </div>
        </header>
    )
}