'use client';

import Section from "@/app/components/ui/Section";
import Button from "@/app/components/ui/Button";
import { useRef, useState } from "react";

export default function HabitList() {

    const habitDiv = useRef<HTMLDivElement>(null);
    const closeButton = useRef<HTMLButtonElement>(null);
    const [ click, setClick ] = useState<boolean>(false);
    
    const habits = [
        {
            title: "Gym",
            id: 0
        },
        {
            title: "Study web development",
            id: 1
        },
        {
            title: "Reading",
            id: 2
        },
        {
            title: "Belajar Bahasa Indonesia",
            id: 3
        },
        {
            title: "Learn English",
            id: 4
        },
        {
            title: "Practice cooking",
            id: 5
        },
        {
            title: "Gardening",
            id: 6
        },
        {
            title: "Muay Thai",
            id: 7
        }
    ];

    const clickTrue = () => {
        const isClicked = !click;
        setClick(isClicked);

        console.log(isClicked);
    };
    
    return(
        <Section>
            <div>
                <div className="flex justify-center bg-(--primary) rounded-t-lg p-2 w-full">
                    <h2 className="text-xl text-white font-bold">Your habits</h2>
                </div>
                <div className="w-[70dvw] h-60 bg-(--card-background) rounded-b-lg shadow-lg overflow-scroll">
                    <div className="flex flex-col items-center gap-5 py-5">
                        {habits.map((habit, index) => {
                            return(
                                <div ref={habitDiv} onClick={clickTrue} key={index} className="bg-background shadow-lg w-[95%] h-15 flex items-center px-2 rounded-lg justify-between">
                                    <h2 className="font-bold">{habit.title}</h2>
                                    <input className="w-5 h-5" type="checkbox" name="daily check" id="" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className={`bg-black/50 absolute inset-0 w-screen h-screen hidden ${click ? ' inline-block' : ''}`}>
                <div className={`hidden w-80 h-80 absolute z-1 bg-background inset-0 rounded-lg shadow-lg ${click ? 'inline-block m-auto' : ''}`}>
                    <div className="h-full w-full flex flex-col">
                        <button ref={closeButton} onClick={clickTrue} className="w-15 h-15 flex flex-col items-center justify-center gap-2 p-2 self-end rounded-[0px_8px_0px_0px]">
                            <span className={`inline-block bg-(--menu) w-7 h-0.5 ${click ? 'w-9 rotate-45 transition-all duration-200 translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                            <span className={`inline-block bg-(--menu) w-7 h-0.5 ${click ? 'opacity-0' : 'rotate-0 transition-all duration-200'}`}></span>
                            <span className={`inline-block bg-(--menu) w-7 h-0.5 ${click ? 'w-9 -rotate-45 transition-all duration-200 -translate-y-2.5' : 'rotate-0 transition-all duration-200'}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            <Button>
                Add New Habit
            </Button>
        </Section>
    );
};