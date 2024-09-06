import { makeAutoObservable } from "mobx";
import {InputField, FieldTypes, EmailValidationErrors, PasswordValidationErrors} from "../types"

class FieldStore {
	inputField: InputField;

	constructor(type: string) {
		this.inputField = {
			type: type,
			isValid: false,
			error: '',
			value: '',
		}
		makeAutoObservable(this);
	}

	reset = () => {
		this.inputField.isValid = false;
		this.inputField.value = '';
		this.inputField.error = '';
	}

	validate = (value: string, type: string ) => {
		switch (type) {
			case FieldTypes.EMAIL: {
				const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
				if(value === '') {
					this.inputField.error = EmailValidationErrors.EMPTY;
					this.inputField.isValid = false;
				} else if(!pattern.test(value)) {
					this.inputField.error = EmailValidationErrors.PATTERN;
					this.inputField.isValid = false;
				} else {
					this.inputField.isValid = true;
				}
				break;
			}
			case FieldTypes.PASSWORD:
			{	
				if(value === '') {
					this.inputField.error = EmailValidationErrors.EMPTY;
					this.inputField.isValid = false;
				} else if((value.length < 5)) {
					this.inputField.error = PasswordValidationErrors.MIN;
					this.inputField.isValid = false;
				} else {
					this.inputField.isValid = true;
				}
				break;
			}
			default: break; 
		}
	}

	handleInputChange = (value: string, type: string) => {
		this.validate(value, type);
		this.inputField.value = value;
	}
}

export default FieldStore;