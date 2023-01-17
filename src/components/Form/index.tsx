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
          <label htmlFor="input-amount" className="input-label">Informe o valor da venda *</label>
          <input className="input" type="number" id="input-amount" {...register("amount")} />
          <p className="errors">{errors.amount?.message}</p>
        </div>
        <div>
          <label htmlFor="input-installments" className="input-label">Em quantas parcelas *</label>
          <input className="input" type="number" id="input-installments" {...register("installments")} />
          <p className="max-installments">Máximo de 12 parcelas</p>
          <p className="errors">{errors.installments?.message}</p>

        </div>
        <div>
          <label htmlFor="input-mdr" className="input-label">Informe o percentual de MDR *</label>
          <input className="input" type="number" id="input-mdr" {...register("mdr")} />
          <p className="errors">{errors.mdr?.message}</p>
        </div>
        <button className="form-button">Submit</button>
      </form>
    </Container>
  );
};