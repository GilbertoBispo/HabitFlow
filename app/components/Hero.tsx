import Button from "./ui/Button";
import Section from "./ui/Section";
import SubTitle from "./ui/SubTitle";

export default function Header() {
    return (
        <Section>
            <h1 className="text-3xl text-(--titles) text-center"><strong>Simple. Powerful. Effective.</strong></h1>

            <SubTitle>
                The smartest way to build the life you want.
            </SubTitle>

            <p className="text-center text-lg md:w-[80dvw]">Track your daily progress, stay accountable, and build unstoppable momentum with HabitFlow’s intuitive and distraction-free interface.</p>
            
            <Button className="">Start Tracking Now!</Button>

            <a href="" className="underline">Learn more...</a>
        </Section>
    );
}