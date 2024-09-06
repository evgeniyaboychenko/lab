export enum EmailValidationErrors {
	EMPTY='Поле не может быть пустым',
	PATTERN='Неверный формат email',
}

export enum PasswordValidationErrors {
	EMPTY='Поле не может быть пустым',
	MIN='Пароль не может быть меньше 5 сиволов'
}

export enum FieldTypes {
	PASSWORD='PASSWORD',
	EMAIL='EMAIL',
}

export interface InputField {
	type: string,
	isValid: boolean,
	error: EmailValidationErrors | PasswordValidationErrors | '',
	value: string,
}

export interface LoginData {
	email: string,
	password: string,
}

export interface MockData {
	id: string,
	email: string,
	password: string,
}

export interface Result {
    status: 0 | 1| null ;
    statusText: string;
}