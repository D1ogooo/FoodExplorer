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


import { CSpinner } from "@coreui/react";
import { Audio } from "react-loader-spinner";

export default function Prato() {
	const { id } = useParams();
	const [data, setData] = useState("");

	useEffect(() => {
		api
			.get(`/produtos/find/${id}`)
			.then((res) => {
				setData(res.data.findProduct);
			})
			.catch((e) => {
				console.log("Falha", e);
				setData([]);
			});
	}, []);

	function AdicionarAoCarrinho() {
		api.post("/");
	}

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
	                {data.ingredientes.map((i) => (
	                <div key={i.id}>
	                  <p>{i}</p>
	                </div>
	                ))}
	              </Ingredientes>
	            ): ""}
	              <IncluirInspecionar valor={data.valor}/>
	            </Right>
	          </Principal>
              ) : (
	          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CSpinner color="info" />
            </div>
	        )}
	      </Container>
	    </PaiContainer>
	  </>
	);
}
