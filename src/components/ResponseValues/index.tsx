import { async } from "q";
import { useEffect, useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { CustomRequest } from "../../interfaces/requests";
import { api } from "../../services/api";
import { Container } from "./style";

export const ResponseValues = () => {
  const [customRequest, setCustomRequest] = useState(0);
  const [customResponse, setCustomResponse] = useState(0);
  const { defaultRequest, defaultResponse } = useContext(MainContext);

  const onChangeCustomRequest = (e: any) => {
    setCustomRequest(e.target.value);
  };

  useEffect(() => {

    const calculateCustomResponse = async () => {
      try {
        const { data } = await api.post("", {
          amount: defaultRequest.amount, 
          installments: defaultRequest.installments, 
          mdr: defaultRequest.mdr, 
          days: [customRequest]
        });
        setCustomResponse(data[customRequest]);
      } catch (error) {
        console.log(error);
      }
    }

    if(defaultRequest.amount>=1000 && defaultRequest.installments>0 && defaultRequest.installments<=12 && defaultRequest.mdr>0 && defaultRequest.mdr<=100) {
      calculateCustomResponse();
    }
    }, [customRequest, defaultRequest]);
  

  return (
    <Container>
      <p className="title"><b>VOCÊ RECEBERÁ:</b></p>
      <p className="values">Amanhã: <b>R${defaultResponse["1"].toFixed(2)}</b></p>
      <p className="values">Em 15 dias: <b>R${defaultResponse["15"].toFixed(2)}</b></p>
      <p className="values">Em 30 dias: <b>R${defaultResponse["30"].toFixed(2)}</b></p>
      <p className="values">Em 90 dias: <b>R${defaultResponse["90"].toFixed(2)}</b></p>

      <p className="values">
        Em
        <input className="customInput" onChange={onChangeCustomRequest} type="number" />
        dias: <b>R${customRequest > 0 ? customResponse.toFixed(2) : 0}</b>
      </p>


    </Container>
  );
}