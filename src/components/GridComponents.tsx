export const GridItem = ({
    children,
    hideOnSmallScreen = false,
}: {
    children: React.ReactNode
    hideOnSmallScreen?: boolean
}) => {
    return (
        <div
            className={`w-1/2 md:w-1/4 items-center justify-center ${hideOnSmallScreen ? 'hidden md:flex ' : 'flex'}`}
        >
            {children}
        </div>
    )
}

export const GridRow = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center py-3 gap-[.5rem]">{children}</div>
}

export const GridHeader = ({
    children,
    hideOnSmallScreen = false,
}: {
    children: React.ReactNode
    hideOnSmallScreen?: boolean
}) => {
    return (
        <div
            className={`w-1/2 md:w-1/4 font-semibold items-center justify-center ${hideOnSmallScreen ? 'hidden md:flex ' : 'flex'}`}
        >
            {children}
        </div>
    )
}
