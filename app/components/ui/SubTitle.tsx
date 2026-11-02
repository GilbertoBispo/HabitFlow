interface SubTitle {
    children: React.ReactNode,
    className?: string
};

export default function SubTitle({ children, className }: SubTitle) {
    return(
        <h3 className={`text-lg ${className}`}>
            <em>
                {children}
            </em>
        </h3>
    )
}