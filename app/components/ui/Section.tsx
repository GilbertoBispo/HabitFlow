interface TypeSection {
    children: React.ReactNode,
    className?: string
}

export default function Section({ children, className }: TypeSection) {
    return(
        <section className={`flex flex-col gap-5 p-5 items-center border-(--border) border-y-2 ${className}`}>
            {children}
        </section>
    );
};