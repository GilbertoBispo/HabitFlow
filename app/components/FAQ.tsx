import Section from "./ui/Section";
import Title from "./ui/Title";

export default function FAQ() {

    const faqs = [
        {
            id: 1,
            question: "Is HabitFlow free to use?",
            answer: "Yes! HabitFlow offers a generous free tier that includes tracking up to 5 daily habits, basic progress analytics, and streak tracking. You can upgrade to Pro anytime for unlimited habits and advanced insights."
        },
        {
            id: 2,
            question: "Is my habit data private and secure?",
            answer: "Absolutely. Your data is protected with enterprise-grade encryption. We never sell your personal information or habit logs to third parties."
        },
        {
            id: 3,
            question: "Can I access HabitFlow offline?",
            answer: "Yes. HabitFlow is built with modern web technologies that allow you to log your daily routines even when you don't have an active internet connection. Data syncs automatically once you're back online."
        },
        {
            id: 4,
            question: "How does HabitFlow help me build long-term consistency?",
            answer: "We use proven behavioral psychology concepts like streak rewards, visual momentum charts, and smart reminder triggers to keep you engaged without feeling overwhelmed."
        },
        {
            id: 5,
            question: "Can I export my data?",
            answer: "Yes, Pro users can export their complete habit history and completion metrics into CSV or JSON formats at any time."
        }
    ];

    return(
        <Section>
            <Title>Frequently Asked Questions</Title>

            <ul className="flex flex-col items-center">
                <div className="w-[80dvw] flex flex-col gap-5">
                    {faqs.map((faq) => {
                        const question = faq.question;
                        const answer = faq.answer;

                        return(
                            <li key={faq.id}>
                                <details className="">
                                    <summary className="text-2xl"><strong>{question}</strong></summary>
                                    <p className="p-5">{answer}</p>
                                </details>
                            </li>
                        );
                    })}
                </div>
            </ul>
        </Section>
    );
};