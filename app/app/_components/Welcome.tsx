import Section from "@/app/components/ui/Section";

export default function Welcome() {
    
    const user = "Vira ❤️";

    return(
        <Section>
            <h2 className="text-2xl"><strong>Welcome, {user}!</strong></h2>
        </Section>
    );
};