import React, { useState, useEffect } from "react";
import { IncluirInspecionar } from "../../../components/User/incluir_inspecionar";
import { InspectValue } from "../../../components/User/Incluir";
import {
	Container,
	Return,
	Principal,
	PaiContainer,
	Ingredientes,
} from "./style";
import { Left, Right } from "./style";
import returnIcon from "../../../assets/icons/CaretLeft.svg";
import { api } from "../../../services/api";
import { useParams } from "react-router-dom";

export default function Prato() {
  const { id } = useParams()
  const [data, setData] = useState("");

	useEffect(() => {
		api
			.get(`/produtos/find/${id}`)
			.then((res) => {
				console.log(res.data.findProduct);
				setData(res.data.findProduct);
			})
			.catch((e) => {
				console.log("Falha", e);
				setData([]);
			});
	}, []);

  
  return (
    <>
      <PaiContainer>
        <Return to="/">
          <img src={returnIcon} alt="" />
          <p>voltar</p>
        </Return>
        <Container>
          {data ? (
            <Principal key={data.id}>
              <Left>
                <img src={data.image} alt="Produto" />
              </Left>
              <Right>
                <h1>{data.name}</h1> 
                <p>{data.description}</p>
                {data ? (
                <Ingredientes>
                  {data.ingredientes.map((ingrediente) => (
                  <div key={ingrediente.id}>
                    <p>{ingrediente}</p>
                  </div>
                  ))}
                </Ingredientes>
              ): ""}
                <IncluirInspecionar />
              </Right>
            </Principal>
          ) : (
            <p>Carregando...</p>
          )}
        </Container>
      </PaiContainer>
    </>
  );
}

