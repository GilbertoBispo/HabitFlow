import Card from "./Card";
import Button from "./Button";

interface TypePricingCard {
    tag: React.ReactNode,
    title: React.ReactNode,
    subtitle: React.ReactNode,
    price: React.ReactNode,
    features: Array<string>,
    button: React.ReactNode,

    className?: string
}

export default function PricingCard({ tag, title, subtitle, price, features, button, className }: TypePricingCard) {
    return(
        <Card className={`w-[80dvw] bg-(--card-background) p-5 rounded-lg border-(--border) border md:w-[60dvw] ${className}`}>
            <div className="flex items-center gap-3">
                <h2 className="text-2xl"><strong>{title}</strong></h2>
                <span className="text-xs bg-gray-100 p-1 rounded-lg text-center border-(--border) border">{tag}</span>
            </div>

            <h3>{subtitle}</h3>
            <p className="text-xl"><em>{price}</em></p>

            <p>Features List:</p>
            <div className="flex justify-center">
                <ul className="list-disc flex flex-col gap-2 w-[80%]">
                    {features.map((feature, index) => {
                        return(
                            <li key={index}>{feature}</li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex justify-center">
                <Button className="w-[70%]">{button}</Button>
            </div>
        </Card> 
    );
};