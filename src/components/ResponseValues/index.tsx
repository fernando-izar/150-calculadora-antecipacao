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
      <h1>VOCÊ RECEBERÁ:</h1>
      <p>Amanhã: R${defaultResponse["1"]}</p>
      <p>Em 15 dias: R${defaultResponse["15"]}</p>
      <p>Em 30 dias: R${defaultResponse["30"]}</p>
      <p>Em 90 dias: R${defaultResponse["90"]}</p>

      <p>
        Em
        <input onChange={onChangeCustomRequest} type="number" />
        dias: R${customResponse}
      </p>


    </Container>
  );
}