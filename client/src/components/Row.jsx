// takes two props
export const Row = ({children, style}) => {
    return (
        <div
        // apply regular react styling
            style={{
                display: "flex",
                flexDirection: "crow",
                gap: "8px",
                justifyContent:"space-between",
                alignItems: "center",
                // spread any extra styling
                ...style,
            }}
            >
                {children}
        </div>
    )
    }