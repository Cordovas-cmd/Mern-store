import { Row } from "./Row"

// if we don't specify type it will default to text
export const InputField=({label, value, setValue, type="text"}) => {
    return (
        <Row>
            {/* specify what the label is for */}
            <label htmlFor="input" style={{flex: 1}}>
                {label}
            </label>
            <input 
            name="input"
            style={{flex:3}}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </Row>
    );
};