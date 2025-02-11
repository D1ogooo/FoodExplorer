import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toast } from "../../../components/toast";
import { api } from "../../../services/api";
import { Container, Pai, CardContent, Card } from "./style";
import { Left, Right, First, Second, ButtonExcluir } from "./style";
import { CardPagamento } from "./style";
import { Form } from "./style";
import exemploPrato from "../../../assets/pratos/molla.svg";
import pixIcon from "../../../assets/icons/PIX.svg";
import creditIcon from "../../../assets/icons/CreditCard.svg";
import qrcodeIcon from "../../../assets/icons/qrcode pix.svg";
import receitaIcon from "../../../assets/icons/Receipt.svg";
import { useNavigate } from "react-router-dom";

const createUserFormSchema = z.object({});

function Pedidos() {
	const [stateToast, setStateToast] = useState(false);
	const [data, setData] = useState([]);
	const [valueCard, setValueCard] = useState("")
	const [output, setOutput] = useState("");
	const cardInput = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		api
			.get('/cart/list')
			.then((res) => {
				setData(res.data.itensList.map((item) => item));
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	function handleCard(e) {
		let changeValue = e.target.value.replace(/\D/g, '');
		let valueMuted = changeValue.replace(/(\d{4})(?=\d)/g, '$1 ');
		// cardInput.current.value = valueMuted;
	}

	function handleToast() {
		setStateToast(true);
		setTimeout(() => {
			setStateToast(false);
		}, 2500);
	}

	function handleDelete(id, index) {
		const updateItem = [...data]
		updateItem.splice(index, 1)
		setData(updateItem)

		api.delete(`/cart/delete/${id}`)
			.then(() => {
				handleToast()
			})
			.catch((e) => {
				alert(e)
			})
	}

	const [image, setImage] = useState(false);
	function handleImage(id) {
		id === 0 ? setImage(true) : setImage(false);
	}

	const { register, handleSubmit } = useForm();
	function createUser() {
		setOutput(JSON.stringify(data, null, 2));
	}

	return (
		<>
			{stateToast && <Toast message={"Produto deletado"} />}
			<Container>
				<Pai>
					<Left>
						<h1>Meu pedido</h1>
						<CardContent>
							{data.map((cart) =>
								cart.items.map((item, index) => (
									<Card key={item.id}>
										<First>
											<img
												src={item.produtos.image}
												alt={""}
											/>
										</First>
										<Second>
											<p>
												{item.quantity} x {item.produtos?.name || "Produto"}
											</p>
											<div>
												<ButtonExcluir onClick={() => handleDelete(item.id, index)}>
													Excluir
												</ButtonExcluir>
											</div>
										</Second>
										<span>R$ {item.produtos?.valor?.toFixed(2) || "0.00"}</span>
									</Card>
								)),
							)}
						</CardContent>
						<span className="totalValue">Total: R$ 103,88</span>
					</Left>
					<Right>
						<h1>Pagamento</h1>
						<div>
							<button onClick={() => handleImage(0)} type="button">
								<img src={pixIcon} alt="" />
								<p>PIX</p>
							</button>
							<button onClick={() => handleImage(1)} type="button">
								<img src={creditIcon} alt="" />
								<p>Crédito</p>
							</button>
						</div>
						<CardPagamento>
							{image ? (
								<div>
									<img src={qrcodeIcon} alt="" />
								</div>
							) : (
								<Form onSubmit={handleSubmit(createUser)}>
									<label id="text_number_card">
										Número do Cartão
										<div>
											<input
												type="text"
												placeholder="0000 0000 0000 0000"
												ref={cardInput}
												// onChange={handleCard}
												onChange={() => {
													console.log("OI")
												}}
												maxLength="19"
												{...register("credito")}
												required
											/>
										</div>
									</label>

									<section className="info_card">
										<label id="Seu nome">
											Validade
											<div>
												<input
													type="text"
													placeholder="04/25"
													{...register("validade_credito")}
												/>
											</div>
										</label>

										<label id="Seu nome">
											CVC
											<div>
												<input
													type="text"
													placeholder="000"
													maxLength={3}
													{...register("cvc_credito")}
												/>
											</div>
										</label>
									</section>
									<button type="submit" onClick={(e) => e.preventDefault()}>
										<img src={receitaIcon} alt="" />
										Finalizar pagamento
									</button>
								</Form>
							)}
						</CardPagamento>
					</Right>
				</Pai>
			</Container>
		</>
	);
}

export default Pedidos;
