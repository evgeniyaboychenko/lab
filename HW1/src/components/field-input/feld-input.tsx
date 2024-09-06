import './field-input.scss'
import { observer } from 'mobx-react-lite';
import {InputField} from '../../types';
import { ReactNode } from "react";

interface Props {
	children?: ReactNode,
	type: string,
	placeholder: string,
	inputField: InputField,
	handleInputChange: (value: string, type: string) => void;
}

export const FieldInput = observer(({ children, ...props }: Props ) => {
	const { inputField, handleInputChange, placeholder, type } = props;
	return (
		<div className='field'>
			<label htmlFor={inputField.type} className='field__label' > { children } </label>
			<input id={inputField.type} required type={type}  placeholder={placeholder} onInput={(evt)=>{
				handleInputChange((evt.target as HTMLInputElement).value, inputField.type);
			}} value ={inputField.value}/>
			{inputField.isValid? '': <span className='field__error'>{inputField.error}</span>}
		</div>
	);
});