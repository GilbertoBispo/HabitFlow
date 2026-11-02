import SubTitle from "./ui/SubTitle";
import Section from "./ui/Section";
import Title from "./ui/Title";

export default function About() {
    return(
        <Section>
            <Title>About HabitFlow</Title>

            <SubTitle>Built for progress, not perfection.</SubTitle>

            <p>Most habit trackers are cluttered with unnecessary features, complex setups, and guilt-inducing notifications. We built HabitFlow to be different: clean, fast, and focused entirely on helping you build sustainable routines without the noise.</p>
            <p>Our mission is simple: strip away the friction from habit tracking so you can focus your energy where it matters—actually doing the work, one day at a time.</p>
        </Section>
    );
};