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
        <div>
          <p className="input-label">Informe o valor da venda *</p>
          <input className="input" type="number" {...register("amount")} />
          <p className="errors"> {errors.amount?.message ? "deve ser um número maior ou igual a 1000" : false}</p>
        </div>
        <div>
          <p className="input-label">Em quantas parcelas *</p>
          <input className="input" type="number" {...register("installments")} />
          <p className="max-installments">Máximo de 12 parcelas</p>
          <p className="errors"> {errors.installments?.message ? "deve ser um número entre 1 e 12" : false}</p>
        </div>
        <div>
          <p className="input-label">Informe o percentual de MDR *</p>
          <input className="input" type="number" {...register("mdr")} />
          <p className="errors"> {errors.mdr?.message ? "deve ser um número entre 1 e 100" : false}</p>
        </div>
        <button className="form-button">Submit</button>
      </form>
    </Container>
  );
};