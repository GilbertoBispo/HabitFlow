import Button from "./ui/Button";
import Section from "./ui/Section";

export default function Header() {
    return (
        <Section>
            <h1 className="text-3xl text-(--titles) text-center"><strong>Simple. Powerful. Effective.</strong></h1>

            <h2 className="text-lg"><em>The smartest way to build the life you want.</em></h2>

            <p className="text-center text-lg">Track your daily progress, stay accountable, and build unstoppable momentum with HabitFlow’s intuitive and distraction-free interface.</p>
            
            <Button className="">Start Tracking Now!</Button>

            <a href="" className="underline">Learn more...</a>
        </Section>
    );
}