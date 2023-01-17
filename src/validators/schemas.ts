import * as yup from 'yup';

export const schema = yup.object().shape({
    amount: yup.number().typeError("O valor deve ser um número").required("Valor de venda inválido").min(1000, "Valor mínimo de R$ 1.000,00"),
    installments: yup.number().typeError("O valor deve ser um número").required("Installments is required").max(12, "Máximo de 12 parcelas").min(1, "Mínimo de 1 parcela"),
    mdr: yup.number().typeError("O valor deve ser um número").required("MDR is required").max(100, "MDR deve ser menor que 100").min(1, "MDR deve ser maior que 0"),
});