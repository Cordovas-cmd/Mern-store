// takes two props
export const Column = ({children, style}) => {
return (
    <div
    // apply regular react styling
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifyContent:"flex-start",
            // spread any extra styling
            ...style,
        }}
        >
            {children}
    </div>
)
}