import constants from "@app/constants/constants";
import { CreateUser } from "@app/types/apiResponseTypes";
import axios from "axios";

type LoginUser = {
    email: string,
    username: string,
    password: string,
}

export const createUser = async (user: CreateUser) => {
    try {
        const response = await axios.post(`${constants.API_URL}/auth/registration`, user);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export const logInUserCall = async (user: LoginUser) => {
    try {
        const response = await axios.post(`${constants.API_URL}/auth/login`, {
            email: user.email,
            username: user.username,
            password: user.password,
        });
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}