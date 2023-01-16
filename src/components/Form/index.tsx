import {useContext} from "react";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../validators/schemas";
import {DefaultRequest} from "../../interfaces/requests";
import {MainContext} from "../../contexts/MainContext";
import { Container } from "./style";


export const Form = () => {
  const {onSubmitRequest} = useContext(MainContext);
  const {register, handleSubmit, formState: {errors}} = useForm<DefaultRequest>({
    resolver: yupResolver(schema)
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitRequest)}>
        <p>Informe o valor da venda *</p>
        <input className="input" placeholder="Valor da venda" type="text" {...register("amount")} />
        <p>{errors.amount?.message}</p>
        <p>Em quantas parcelas *</p>
        <input className="input" placeholder="Quantidade de parcelas"  type="text" {...register("installments")} />
        <p className="installments-number-advise">Máximo de 12 parcelas</p>
        <p>{errors.installments?.message}</p>
        <p>Informe o percentual de MDR *</p>
        <input className="input" placeholder="Percentual de MDR" type="text" {...register("mdr")} />
        <p>{errors.mdr?.message}</p>
        <button className="form-button">Submit</button>
      </form>
    </Container>
  );
};