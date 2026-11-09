import Section from "./ui/Section";

export default function Footer() {
    return(
        <footer>
            <Section>
                <div className="flex flex-col gap-5 items-center">
                    <img className="w-60" src="/logo.png" alt="" />
                    <p className="text-center"><em>Build better routines, track your progress, and master your daily flow.</em></p>
                </div>
                
            </Section>
        </footer>
    );
};