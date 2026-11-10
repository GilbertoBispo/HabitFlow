import Card from "./ui/Card";
import Title from "./ui/Title";
import Section from "./ui/Section";
import { Flame, Zap, ChartColumn } from "lucide-react";

export default function Features() {

    const features = [
        {
            id: 0,
            icon: Flame,
            title: "Streaks that motivate without pressure",
            text: "Forget the guilt of missing a day. HabitFlow tracks your long-term consistency, celebrating real progress instead of punishing slip-ups."
        },
        {
            id: 1,
            icon: Zap,
            title: "Instant check-in in seconds",
            text: "Check off your daily habits with just one click. No loading screens, no long forms, and zero friction in your daily routine."
        },
        {
            id: 2,
            icon: ChartColumn,
            title: "Clean metrics that reveal your growth",
            text: "Visualize your monthly completion rate and spot behavioral patterns through minimalist, straight-to-the-point charts."
        },
    ];

    return(
        <Section>
            <Title>Features</Title>

            <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-center">
                {features.map((feature, index) => {
                    const title = feature.title;
                    const Icon = feature.icon;
                    const text = feature.text;
                    
                    return(
                        <Card disableProp={true} key={index} className="md:w-[70dvw] lg:w-90">
                            <div className="flex gap-5 items-center">
                                <Icon size={40}></Icon>
                                <h2 className="text-lg w-[80%] text-(--titles)"><strong>{title}</strong></h2>
                            </div>

                            <p>{text}</p>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
};