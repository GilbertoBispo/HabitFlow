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

    return (
        <header className="h-16 flex items-center px-5 justify-between">
            <div className="">
                <img className="h-16" src="/logo.png" alt="HabitFlow logo" />
            </div>

            {/* links */}
            <div className="bg-amber-200 hidden">
                <ul className="flex gap-5">
                    <li>Dashboard</li>
                    <li>Features</li>
                    <li>Analytics</li>
                    <li>Pricing</li>
                </ul>
            </div>

            {/* menu button for mobile devices */}
            <div className="w-16 h-full">
                <button ref={menuButton} onClick={handleClick} className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'w-9 rotate-45 transition-all duration-200 translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'opacity-0' : 'rotate-0 transition-all duration-200'}`}></span>
                    <span className={`inline-block bg-(--menu) w-7 h-0.5 ${isActive ? 'w-9 -rotate-45 transition-all duration-200 -translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                </button>
            </div>
        </header>
    )
}