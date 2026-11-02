interface ButtonChildren {
    children: React.ReactNode,
    className?: string
}

export default function Button({children, className, ...props}: ButtonChildren) {
    return (
        <button className={`bg-(--primary) p-5 rounded-xl text-white hover:bg-(--hover) active:bg-(--active) translate-y-0 transition-all duration-300 hover:-translate-y-1 hover:transition-all hover:duration-300 ${className}`} {...props}>
            <span className="">{children}</span>
        </button>
    )
}