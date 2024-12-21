import React from 'react'
import { useState, useRef } from "react";
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

function Dashboard() {
	const [love, setLove] = useState(false);
	const cardPai = useRef(null);
	const secondCardPai = useRef(null);
	const thirdCardPai = useRef(null);
	const { role } = useAuth();
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
						<button className="button_left" type="button">
							<img src={CaretLeft} onClick={handleLeftClick} alt="" />
						</button>
						<CardPai ref={cardPai}>
							{dbRefeicoes.map((refeicoes) => (
								<Card
									key={refeicoes.id}
									to={
										role === "admin" ? "/editarPrato" : `/prato/${refeicoes.id}`
									}
								>
									<FirstContentCard>
										<img alt="" src={refeicoes.prato} id="prato" />
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (

											<img
												alt=""
												src={love ? HeartCheio : Heart}
												onClick={(e) => {
													setLove(!love);
													e.preventDefault();
													// e.stopPropagation();
												}}
											/>
										)}
									</FirstContentCard>
									<h1>{refeicoes.title}</h1>
									<p>{refeicoes.explicacao}</p>
									<h2>{refeicoes.valor}</h2>
									{role === "usuario" && <InspectValue />}
									<div style={{ width: "100%" }} />
								</Card>
							))}
						</CardPai>
						<button type="button" className="button_right">
							<img src={CaretRight} onClick={handleRightClick} alt="" />
						</button>
					</Pai>
				</SecondMainContainer>

				<ThirdMainContainer>
					<h1>Sobremesas</h1>
					<Pai>
						<button className="button_left" type="button">
							<img src={CaretLeft} onClick={handleLeftClickSecond} alt="" />
						</button>
						<CardPai ref={secondCardPai}>
							{dbSobremesas.map((sobremesas) => (
								<Card key={sobremesas.id} to={`/prato/${sobremesas.id}`}>
									<FirstContentCard>
										<img src={sobremesas.prato} id="prato" />
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<img
												alt=""
												src={love ? HeartCheio : Heart}
												onClick={(e) => {
													setLove(!love);
													e.preventDefault();
													e.stopPropagation();
												}}
											/>
										)}
									</FirstContentCard>
									<h1>{sobremesas.title}</h1>
									<p>{sobremesas.explicacao}</p>
									<h2>{sobremesas.valor}</h2>
									{role === "usuario" && <InspectValue />}
								</Card>
							))}
						</CardPai>
						<button className="button_right" type="button">
							<img src={CaretRight} onClick={handleRightClickSecond} alt="" />
						</button>
					</Pai>
				</ThirdMainContainer>

				<FordMainContainer>
					<h1>Bebidas</h1>
					<Pai>
						<button className="button_left" type="button">
							<img src={CaretLeft} onClick={handleLeftClickThird} alt="" />
						</button>
						<CardPai ref={thirdCardPai}>
							{dbBebidas.map((bebidas) => (
								<Card key={bebidas.id} to={`/prato/${bebidas.id}`}>
									<FirstContentCard>
										<img src={bebidas.prato} id="prato" alt="" />
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<img
												alt=""
												src={love ? HeartCheio : Heart}
												onClick={(e) => {
													setLove(!love);
													e.preventDefault();
													e.stopPropagation();
												}}
											/>
										)}
									</FirstContentCard>
									<h1>{bebidas.title}</h1>
									<p>{bebidas.explicacao}</p>
									<h2>{bebidas.valor}</h2>
									{role === "usuario" && <InspectValue />}
								</Card>
							))}
						</CardPai>
						<button className="button_right" type="button">
							<img src={CaretRight} onClick={handleRightClickThird} alt="" />
						</button>
					</Pai>
				</FordMainContainer>
			</Container>
		</>
	);
}

export default Dashboard;
