import './button.scss'
import { ReactNode } from "react";


interface Props {
	children?: ReactNode,
	className: string,
	disabled: boolean,
}

export const Button =({children, ...props }: Props ) => {
	const { className, disabled } = props;
	return (
		<button className={className} type="submit" disabled={disabled}> { children }</button> 
	);
};