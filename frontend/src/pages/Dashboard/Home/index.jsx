import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { api } from "../../../services/api";
import { useDebounceClick } from "../../../hooks/useDebounceClick";
import { InspectValue } from "../../../components/User/Incluir";
import LapisIcon from "../../../assets/icons/lapisIcon.svg";
import {
	Container,
	FirstMainComponent,
	SecondMainContainer,
	ThirdMainContainer,
	FordMainContainer,
	ImagemPrato,
} from "./style";
import { Toast } from "../../../components/toast";
import { CardPai, Card, FirstContentCard } from "./style";
import { Left, Right, Pai } from "./style";
import firstimageIcon from "../../../assets/images/pngegg 1.svg";
import Heart from "../../../assets/icons/Heart vazio.svg";
import HeartCheio from "../../../assets/icons/Heart cheio.svg";
import CaretLeft from "../../../assets/icons/CaretLeft.svg";
import CaretRight from "../../../assets/icons/CaretRight.svg";
import { ProductsContext } from '../../../contexts/ProductsContext.jsx'

function Dashboard() {
	const { role } = useAuth();
	const { products, setProducts } = useContext(ProductsContext);

	const [data, setData] = useState([]);
	const [stateToast, setStateToast] = useState(false)
	const [favoriteData, setFavoriteData] = useState([])
	const [favoriteIds, setFavoriteIds] = useState([])
	const cardPai = useRef(null);
	const secondCardPai = useRef(null);
	const thirdCardPai = useRef(null);
	// const debounceClick = useDebounceClick(favoriteToggle);

	useEffect(() => {
		api.get("/produtos/show")
			.then((res) => {
			   setData(res.data.products)
               setProducts(res.data.products)
			})
			.catch((e) => {
				console.log("Falha", e);
				setData([]);
			})
		api.get("/favorito/list")
			.then((res) => {
				setFavoriteData(res.data.favorites)
				setFavoriteIds(res.data.favorites.map(fav => fav.produtosId))
			})
			.catch((e) => {
				console.log("Falha", e)
			})
	}, []);

  function getRoute(id) {
    return role === "admin" ? `/editarPrato/${id}` : `/prato/${id}`;
   }

	const filterRefeicoes = data.filter(
		(aliment) => aliment.categoria === "refeicao",
	);

	const filterSobremesas = data.filter(
		(aliment) => aliment.categoria === "sobremesas",
	);

	const filterBebidas = data.filter(
		(aliment) => aliment.categoria === "bebidas",
	);

	function handleToast() {
		setStateToast(true);
		setTimeout(() => {
			setStateToast(false);
		}, 2500);
	}

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

	function favoriteToggle(id) {
		// Toggle local state immediately
		const wasFavorited = favoriteIds.includes(id);
		setFavoriteIds(prev => wasFavorited ? prev.filter(i => i !== id) : [...prev, id]);

		handleToast();

		api
			.post("/favorito/create", {
				id,
			})
			.then((res) => {
				// Refetch favorites after toggle
				api.get("/favorito/list")
					.then((res) => {
						setFavoriteData(res.data.favorites);
						setFavoriteIds(res.data.favorites.map(fav => fav.produtosId));
					})
					.catch((e) => {
						console.log("Falha ao atualizar favoritos", e);
					});
			})
			.catch((error) => {
				console.log(error);
				// Revert local state on error
				setFavoriteIds(prev => wasFavorited ? [...prev, id] : prev.filter(i => i !== id));
			});
	}

	function isFavorited(id) {
		return favoriteIds && favoriteIds.includes(id);
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
						<button
							className="button_left"
							type="button"
							onClick={handleLeftClick}
						>
							<img src={CaretLeft} alt="" />
						</button>
						<CardPai ref={cardPai}>

							{filterRefeicoes.map((refeicoes) => (
								<Card
									key={refeicoes.id}
									to={
										role === "admin" ? `/editarPrato/${refeicoes.id}` : `/prato/${refeicoes.id}`
									}
								>
									<FirstContentCard>
										<ImagemPrato
											to={
												role === "admin"
													? `/editarPrato/${refeicoes.id}`
													: `/prato/${refeicoes.id}`
											}
										>
											<img alt="" src={refeicoes.image} id="prato" />
										</ImagemPrato>
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button
												id="loveButton"
												type="button"
												onClick={(e) => {
													e.preventDefault()
													favoriteToggle(refeicoes.id)
												}}
											>
												<img
													src={isFavorited(refeicoes.id) ? HeartCheio : Heart}
													alt=""
												/>
											</button>
										)}
									</FirstContentCard>
									<h1>{refeicoes.name}</h1>
									<p>{refeicoes.sobre}</p>
									<h2>R$ {refeicoes.valor}</h2>
									{role === "usuario" && <InspectValue cartId={refeicoes.id} />}
									<div style={{ width: "100%" }} />
								</Card>
							))}
						</CardPai>
						<button
							type="button"
							className="button_right"
							onClick={handleRightClick}
						>
							<img src={CaretRight} alt="" />
						</button>
					</Pai>
				</SecondMainContainer>

				<ThirdMainContainer>
					<h1>Sobremesas</h1>
					<Pai>
						<button
							className="button_left"
							type="button"
							onClick={handleLeftClickSecond}
						>
							<img src={CaretLeft} alt="" />
						</button>
						<CardPai ref={secondCardPai}>

							{filterSobremesas.map((sobremesas) => (
								<Card key={sobremesas.id} to={role === "admin" ? `/editarPrato/${sobremesas.id}` : `/prato/${sobremesas.id}`}>
									<FirstContentCard>
										<ImagemPrato
											to={
												role === "admin"
													? `/editarPrato/${sobremesas.id}`
													: `/prato/${sobremesas.id}`
											}
										>
											<img alt="" src={sobremesas.image} id="prato" />
										</ImagemPrato>
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button
												type="button"
												onClick={(e) => {
													e.preventDefault()
													favoriteToggle(sobremesas.id)
												}}
											>
												<img alt="" src={isFavorited(sobremesas.id) ? HeartCheio : Heart} />
											</button>
										)}
									</FirstContentCard>
									<h1>{sobremesas.name}</h1>
									<p>{sobremesas.sobre}</p>
									<h2>R$ {sobremesas.valor}</h2>
									{role === "usuario" && <InspectValue cartId={sobremesas.id} />}
								</Card>
							))}
						</CardPai>
						<button
							className="button_right"
							type="button"
							onClick={handleRightClickSecond}
						>
							<img src={CaretRight} alt="" />
						</button>
					</Pai>
				</ThirdMainContainer>

				<FordMainContainer>
					<h1>Bebidas</h1>
					<Pai>
						<button
							className="button_left"
							type="button"
							onClick={handleLeftClickThird}
						>
							<img src={CaretLeft} alt="" />
						</button>
						<CardPai ref={thirdCardPai}>

							{filterBebidas.map((bebidas) => (
								<Card key={bebidas.id} to={role === "admin" ? `/editarPrato/${bebidas.id}` : `/prato/${bebidas.id}`}>
									<FirstContentCard>
												<ImagemPrato
											to={
												role === "admin"
													? `/editarPrato/${bebidas.id}`
													: `/prato/${bebidas.id}`
											}
										>
											<img alt="" src={bebidas.image} id="prato" />
										</ImagemPrato>
										{role === "admin" ? (
											<img src={LapisIcon} alt="" />
										) : (
											<button
												type="button"
												onClick={(e) => {
													e.preventDefault()
													favoriteToggle(bebidas.id)
												}}
											>
												<img alt="" src={isFavorited(bebidas.id) ? HeartCheio : Heart} />
											</button>
										)}
									</FirstContentCard>
									<h1>{bebidas.name}</h1>
									<p>{bebidas.sobre}</p>
									<h2>R$ {bebidas.valor}</h2>
									{role === "usuario" && <InspectValue cartId={bebidas.id} />}
								</Card>
							))}
						</CardPai>
						<button
							className="button_right"
							type="button"
							onClick={handleRightClickThird}
						>
							<img src={CaretRight} alt="" />
						</button>
					</Pai>
				</FordMainContainer>
			</Container>
		</>
	);
}

export default Dashboard;
