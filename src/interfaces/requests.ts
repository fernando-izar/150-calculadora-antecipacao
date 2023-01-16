export interface DefaultRequest {
    amount: number;
    installments: number;
    mdr: number;
}

export interface CustomRequest {
    amount: number;
    installments: number;
    mdr: number;
    days: number[];
}


