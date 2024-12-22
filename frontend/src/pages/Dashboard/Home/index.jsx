import React, { useState, useEffect, useRef, } from 'react'
import { useAuth } from "../../../hooks/useAuth";
import { dbSobremesas, dbRefeicoes, dbBebidas } from "../../../DB/data";
import { InspectValue } from "../../../components/User/Incluir";
import LapisIcon from "../../../assets/icons/lapisIcon.svg";
import {
	Container,
	FirstMainComponent,
	SecondMainContainer,
	ThirdMainContainer,
	FordMainContainer,
} from "./style";
import { CardPai, Card, FirstContentCard } from "./style";
import { Left, Right, Pai } from "./style";
import firstimageIcon from "../../../assets/images/pngegg 1.svg";
import Heart from "../../../assets/icons/Heart vazio.svg";
import HeartCheio from "../../../assets/icons/Heart cheio.svg";
import CaretLeft from "../../../assets/icons/CaretLeft.svg";
import CaretRight from "../../../assets/icons/CaretRight.svg";
import { api } from '../../../services/api';

function Dashboard() {
	const [love, setLove] = useState(false);
	const [data, setData] = useState([]);
	const cardPai = useRef(null);
	const secondCardPai = useRef(null);
	const thirdCardPai = useRef(null);
	const { role } = useAuth();

   useEffect(() => {
    api.get("/produtos/show")
		.then((res) => {
			setData(res.data.products)
		})
		.catch((e) => {
			console.log("Falha",e)
			setData([])
		})
	 }, [])

	 const filterRefeicoes = data.filter((aliment) => aliment.categoria === "refeicao")
	 const filterSobremesas = data.filter((aliment) => aliment.categoria === "sobremesas")
	 const filterBebidas = data.filter((aliment) => aliment.categoria === "bebidas")

  console.log(filterRefeicoes)

	function handleLeftClick(e) {
		if (cardPai.current) {
			e.preventDefault();
			cardPai.current.scrollLeft -= cardPai.current.offsetWidth;
		}
	}

	function handleRightClick(e) {
		if (cardPai.current) {
			e.preventDefault();
			cardPai.current.scrollLeft += cardPai.current.offsetWidth;
		}
	}

	function handleLeftClickSecond(e) {
		if (secondCardPai.current) {
			e.preventDefault();
			secondCardPai.current.scrollLeft -= secondCardPai.current.offsetWidth;
		}
	}

	function handleRightClickSecond(e) {
		if (secondCardPai.current) {
			e.preventDefault();
			secondCardPai.current.scrollLeft += secondCardPai.current.offsetWidth;
		}
	}

	function handleLeftClickThird(e) {
		if (thirdCardPai.current) {
			e.preventDefault();
			thirdCardPai.current.scrollLeft -= thirdCardPai.current.offsetWidth;
		}
	}

	function handleRightClickThird(e) {
		if (thirdCardPai.current) {
			e.preventDefault();
			thirdCardPai.current.scrollLeft += thirdCardPai.current.offsetWidth;
		}
	}

	return (
		<>
			<Container style={{ width: "90%" }}>
				<FirstMainComponent>
					<Left>
						<img src={firstimageIcon} alt="" />
					</Left>
					<Right>
						<h1>Sabores inigualáveis</h1>
						<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
					</Right>
				</FirstMainComponent>

				<SecondMainContainer>
					<h1>Refeições</h1>
					<Pai>
						<button className="button_left" type="button" onClick={handleLeftClick}>
							<img src={CaretLeft}  alt="" />
						</button>
						<CardPai ref={cardPai}>
							{filterRefeicoes.map((refeicoes) => (
								<Card
									key={refeicoes.id}
									to={
										role === "admin" ? "/editarPrato" : `/prato/${refeicoes.id}`
									}
								>
									<FirstContentCard>
										<img alt="" src={refeicoes.image} id="prato" />
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button type='button' onClick={(e) => {
												setLove(!love);
												e.preventDefault();
												// e.stopPropagation();
											}}>
												<img
												alt=""
												src={love ? HeartCheio : Heart}
											/>
											</button>
										)}
									</FirstContentCard>
									<h1>{refeicoes.name}</h1>
									<p>{refeicoes.sobre}</p>
									<h2>R$ {refeicoes.valor}</h2>
									{role === "usuario" && <InspectValue />}
									<div style={{ width: "100%" }} />
								</Card>
							))}
						</CardPai>
						<button type="button" className="button_right" onClick={handleRightClick}>
							<img src={CaretRight}  alt="" />
						</button>
					</Pai>
				</SecondMainContainer>

				<ThirdMainContainer>
					<h1>Sobremesas</h1>
					<Pai>
						<button className="button_left" type="button" onClick={handleLeftClickSecond}>
							<img src={CaretLeft} alt="" />
						</button>
						<CardPai ref={secondCardPai}>
							{filterSobremesas.map((sobremesas) => (
								<Card key={sobremesas.id} to={`/prato/${sobremesas.id}`}>
									<FirstContentCard>
										<img src={sobremesas.image} id="prato" alt=""/>
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button type='button' onClick={(e) => {
												setLove(!love);
												e.preventDefault();
												// e.stopPropagation();
											}}>
												<img
												alt=""
												src={love ? HeartCheio : Heart}
											/>
											</button>
										)}
									</FirstContentCard>
									<h1>{sobremesas.name}</h1>
									<p>{sobremesas.sobre}</p>
									<h2>R$ {sobremesas.valor}</h2>
									{role === "usuario" && <InspectValue />}
								</Card>
							))}
						</CardPai>
						<button className="button_right" type="button" onClick={handleRightClickSecond}>
							<img src={CaretRight} alt="" />
						</button>
					</Pai>
				</ThirdMainContainer>

				<FordMainContainer>
					<h1>Bebidas</h1>
					<Pai>
						<button className="button_left" type="button" onClick={handleLeftClickThird}>
							<img src={CaretLeft} alt="" />
						</button>
						<CardPai ref={thirdCardPai}>
							{filterBebidas.map((bebidas) => (
								<Card key={bebidas.id} to={`/prato/${bebidas.id}`}>
									<FirstContentCard>
										<img src={bebidas.image} id="prato" alt="" />
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button type='button' onClick={(e) => {
												setLove(!love);
												e.preventDefault();
												// e.stopPropagation();
											}}>
												<img
												alt=""
												src={love ? HeartCheio : Heart}
											/>
											</button>
										)}
									</FirstContentCard>
									<h1>{bebidas.name}</h1>
									<p>{bebidas.sobre}</p>
									<h2>R$ {bebidas.valor}</h2>
									{role === "usuario" && <InspectValue />}
								</Card>
							))}
						</CardPai>
						<button className="button_right" type="button" onClick={handleRightClickThird}>
							<img src={CaretRight} alt="" />
						</button>
					</Pai>
				</FordMainContainer>
			</Container>
		</>
	);
}

export default Dashboard;
