import React, { useState, useEffect } from "react";
import { Container, Pai, PratosContent } from "./style";
import { Content, Left, Right } from "./style";
import { api } from "../../../services/api";
import RadishImage from "../../../assets/pratos/ravanello.svg";
import { Toast } from "../../../components/toast";
import { useNavigate } from "react-router-dom";

function Favoritos() {
	const [data, setData] = useState([]);
  const [stateToast, setStateToast] = useState(false)
  const navigate = useNavigate()

  function handleToast() {
    setStateToast(true)
    setTimeout(() => {
      setStateToast(false)
      navigate("/")
    }, 2500)
  }

	useEffect(() => {
		api
			.get("/favorito/list")
			.then((data) => {
				setData(data.data.favorites);
				console.log(data.data.favorites);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function handleDelete(id) {
    api
    .delete(`/favorito/delete/${id}`)
    .then(() => {
      handleToast()
    })
    .catch((error) => {
      console.log(error);
    });
  }

	return (
		<>
		 {stateToast && <Toast />}
			<Container>
				<Pai>
					<h1>Meus favoritos</h1>
					<PratosContent>
						{data.map((prato) => (
							<Content key={prato.produtos.id}>
								<Left>
									<img src={prato.produtos.image} alt="" />
								</Left>
								<Right>
									<h2>{prato.produtos.name}</h2>
									<button type="button" onClick={() => handleDelete(prato.produtos.id)}>
										Remover dos Favoritos
									</button>
								</Right>
							</Content>
						))}
					</PratosContent>
				</Pai>
			</Container>
		</>
	);
}

export default Favoritos;
