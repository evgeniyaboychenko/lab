import mockData from './mock-data.json';
import { LoginData, MockData, Result} from "../types";

const checkingMockData = (loginData: LoginData) => {
	return mockData.some((elem:MockData ) => {
		return (elem.email === loginData.email) && (elem.password === loginData.password)
	});
};

const generationResponse = (loginData: LoginData): Result => {
	if (checkingMockData(loginData)) {
		return {
			status: 1,
			statusText: 'Вы успешно прошли аутентификацию'
		}
	};
	return {
		status: 0,
		statusText: 'Такого пользователя не существует. Повторите попытку'
	}
}

export const getResponse = async (loginData: LoginData): Promise<Result> =>  {

	const result: Result = await new Promise((resolve) => {
		setTimeout(() => resolve(generationResponse(loginData)), 500);
	});
	return result;
}
