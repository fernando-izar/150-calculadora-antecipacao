import { ReactNode, useState, createContext } from "react";
import { DefaultRequest } from "../interfaces/requests";
import { DefaultResponse } from "../interfaces/responses";
import { api } from "../services/api";

interface IMainProviderProps {
    children: ReactNode;
}

interface IMainProviderData {
    defaultResponse: DefaultResponse;
    setDefaultResponse: React.Dispatch<React.SetStateAction<DefaultResponse>>
    onSubmitRequest: (data: DefaultRequest) => Promise<void>;
}

export const MainContext = createContext<IMainProviderData>({} as IMainProviderData);

export const MainProvider = ({ children }: IMainProviderProps) => { 
    const [defaultResponse, setDefaultResponse] = useState<DefaultResponse>({
        "1": 0,
        "15": 0,
        "30": 0,
        "90": 0,
    });

    const onSubmitRequest = async (data: DefaultRequest) => {
        try {
            const { data: responseData } = await api.post("", data);
            setDefaultResponse(responseData);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <MainContext.Provider value={{ defaultResponse, setDefaultResponse, onSubmitRequest }}>
            {children}
        </MainContext.Provider>
    );
    };
