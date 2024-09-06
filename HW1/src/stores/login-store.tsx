import { makeAutoObservable , runInAction} from "mobx";
import { LoginData, Result } from "../types";
import {getResponse} from "../server-emulator/authentication"

class LoginStore {
	isLoading = false;
	error = "";
	result = {
		status: null,
		statusText: '',
	} as Result;

	constructor(){
		makeAutoObservable(this);
	}

	onFormSubmit = async (loginData: LoginData) => {
			try {
				this.isLoading = true;
				const response = await getResponse(loginData);
				runInAction(() => {
					this.isLoading = false;
					this.result = response;
				});
			} catch (err) {
			  this.isLoading = false;
			  this.error = "Ошибка загрузки";
			  console.error(err);
			}
		  
	};

	handleFormSubmit = (evt:React.FormEvent<HTMLFormElement> ,loginData: LoginData) => {
		evt.preventDefault();
		this.onFormSubmit(loginData);
	}
}

export default LoginStore;