import Select, { ActionMeta, PropsValue, SingleValue } from 'react-select'; 

const styles = {

    control: (base: {}, state: { isFocused: boolean }) => ({
        ...base,
        borderColor: state.isFocused ? "#72517f" : "lightgray",
        cursor: 'pointer',
        "&:hover": {
            borderColor: state.isFocused ? "#72517f" : "#72517f"
        },
        boxShadow: state.isFocused ? 'null' : 'null',
        borderRadius: '25px'
    }),

    option: (base: {}, state: { isFocused: boolean, isSelected: boolean }) => ({
        ...base,
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: state.isSelected ? "#72517f" : "#f8f4fa"
        },
        backgroundColor: state.isSelected ? "#72517f" : "null",
    }),

    container: (base: {}) => ({
        ...base,
        width: '100%',
        fontSize: '13px'
    }),
}

export interface ISelectOption {
    value: string;
    label: string; 
}

interface ISelectProps {
    defaultValue?: any | PropsValue<{ value: string; label: string; }> | undefined;
    onChange?: ((newValue: SingleValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>) => void) | undefined;
    options: {
        value: string;
        label: string;
    } []
}

const DefaultSelect: React.FC<ISelectProps> = ({ onChange, defaultValue, options }) => { 
    return (
        <Select
            options={options}
            onChange={onChange}
            defaultValue={options.find((option) => option.value === defaultValue)} 
            styles={styles}
            placeholder='' />
    )
}

export default DefaultSelect;

