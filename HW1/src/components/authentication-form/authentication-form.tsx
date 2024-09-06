import './authentication-form.scss'
import { observer } from 'mobx-react-lite';
import FieldStore from '../../stores/field-store';
import {FieldTypes} from "../../types"
import { FieldInput } from '../field-input/feld-input';
import { Button } from '../button/button';
import LoginStore from '../../stores/login-store'

const validationEmailStore = new FieldStore(FieldTypes.EMAIL);
const validationPasswordStore = new FieldStore(FieldTypes.PASSWORD);
const formStore = new LoginStore();

export const AuthenticationForm = observer(() => {
	return (
		<section className='authentication-form'> 
			<h1>Форма аутентификации</h1>
			{formStore.error ? 
				<span className='authentication-form__message authentication-form__message--bc-red'>{formStore.error}</span>
				:
				<>
					{formStore.result.status === 1 ?
						<span className='authentication-form__message'>{formStore.result.statusText}</span>
						:
						(
							formStore.result.status === 0 ? 
							<> 
								<span className='authentication-form__message authentication-form__message--bc-red'>{formStore.result.statusText}</span>
								<form className='form' onSubmit={(evt) => {formStore.handleFormSubmit(evt, 
									{email: validationEmailStore.inputField.value, password: validationPasswordStore.inputField.value})}}>
									<FieldInput {...validationEmailStore} placeholder = {'email'} type = {'text'}>Введите email</FieldInput>
									<FieldInput {...validationPasswordStore} placeholder = {'пароль'} type = {'password'}>Введите пароль</FieldInput>
									{formStore.isLoading ?
										<Button className={'btn btn--loading'} disabled={true}></Button>
										:
										<Button className={'btn'} disabled={(!validationEmailStore.inputField.isValid || !validationPasswordStore.inputField.isValid)? true : false}>Войти</Button>
									}
								</form> 
							</>
						:
						
							<form className='form' onSubmit={(evt) => {formStore.handleFormSubmit(evt, 
								{email: validationEmailStore.inputField.value, password: validationPasswordStore.inputField.value})}}>
								<FieldInput {...validationEmailStore} placeholder = {'email'} type = {'text'}>Введите email</FieldInput>
								<FieldInput {...validationPasswordStore} placeholder = {'пароль'} type = {'password'}>Введите пароль</FieldInput>
								{formStore.isLoading ?
									<Button className={'btn btn--loading'} disabled={true}></Button>
									:
									<Button className={'btn'} disabled={(!validationEmailStore.inputField.isValid || !validationPasswordStore.inputField.isValid)? true : false}>Войти</Button>
									}
							</form> 
						)
					}	
				</>	
			}	
		</section>
	);
});