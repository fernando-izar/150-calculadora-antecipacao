import * as yup from 'yup';

export const schema = yup.object().shape({
    amount: yup.number().required("Amount is required"),
    installments: yup.number().required("Installments is required").max(12, "Installments must be less than 12"),
    mdr: yup.number().required("MDR is required").max(100, "MDR must be less than 100")
});