interface TypeTitle {
    children: React.ReactNode,
    className?: string
}

export default function Title({ children, className }: TypeTitle) {
    return (
        <h2 className={`text-2xl text-(--titles) text-center ${className}`}>
            <strong>
                {children}
            </strong>
        </h2>
    );
};