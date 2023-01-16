import * as yup from 'yup';

export const schema = yup.object().shape({
    amount: yup.number().required("Valor de venda inválido").min(1000, "Valor mínimo de R$ 1.000,00"),
    installments: yup.number().required("Installments is required").max(12, "Máximo de 12 parcelas"),
    mdr: yup.number().required("MDR is required").max(100, "MDR deve ser menor que 100"),
});