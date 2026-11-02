interface CardType {
    children: React.ReactNode,
    className?: string,
    disableProp?: boolean
}

export default function Card({ children, className, disableProp }: CardType) {
    return(
        <div className={`bg-(--card-background) flex flex-col gap-5 rounded-lg shadow-lg p-5 translate-y-0 transition-all duration-300 ${disableProp ? 'hover:-translate-y-2 hover:transition-all hover:duration-300' : ''} ${className}`}>
            {children}
        </div>
    );
};