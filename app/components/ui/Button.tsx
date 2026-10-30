interface ButtonChildren {
    children: React.ReactNode,
    className?: string
}

export default function Button({children, className, ...props}: ButtonChildren) {
    return (
        <button className={`bg-(--primary) p-5 rounded-xl text-white hover:bg-(--hover) active:bg-(--active) ${className}`} {...props}>
            <span className="">{children}</span>
        </button>
    )
}