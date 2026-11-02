import PricingCard from "./ui/PricingCard";
import SubTitle from "./ui/SubTitle";
import Section from "./ui/Section";
import Title from "./ui/Title";

export default function Pricing() {
    return(
        <Section>
            <Title>Simple pricing for lasting habits</Title>
            <SubTitle>Start for free, upgrade when you need unlimited power.</SubTitle>

            {/* Calling PricingCard component and passing its data */}
            <PricingCard 
                tag="Free Forever"
                title="Starter"
                subtitle="Perfect for building your first core routines."
                price="$0/month"
                features={[
                    "Up to 3 active habits",
                    "Basic streak tracking",
                    "1-click daily check-ins",
                    "Essential progress overview"
                ]}
                button="Get Started Free"
            />

            <PricingCard 
                tag="Popular"
                title="Pro"
                subtitle="For those serious about transforming their daily lives."
                price="$10/month"
                features={[
                    "Unlimited active habits",
                    "Advanced analytics & monthly trends",
                    "Habit categories & custom tags",
                    "Data export & priority support"
                ]}
                button="Start 7-Day Free Trial"
            />

        </Section>
    );
};