import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Pai, CardContent, Card } from "./style";
import { Left, Right, First, Second, ButtonExcluir } from "./style";
import { CardPagamento } from "./style";
import { Form } from "./style";
import exemploPrato from "../../../assets/pratos/molla.svg";
import pixIcon from "../../../assets/icons/PIX.svg";
import creditIcon from "../../../assets/icons/CreditCard.svg";
import qrcodeIcon from "../../../assets/icons/qrcode pix.svg";
import receitaIcon from "../../../assets/icons/Receipt.svg";

const createUserFormSchema = z.object({});

function Pedidos() {
	const [output, setOutput] = useState("");

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
			<Container>
				<Pai>
					<Left>
						<h1>Meu pedido</h1>
						<CardContent>
							<Card>
								<First>
									<img src={exemploPrato} alt="" />
								</First>
								<Second>
									<p>1 x Salada Radish</p>
									<div>
										<ButtonExcluir>Excluir</ButtonExcluir>
									</div>
								</Second>
								<span>R$ 25,97</span>
							</Card>
							<Card>
								<First>
									<img src={exemploPrato} alt="" />
								</First>
								<Second>
									<p>1 x Salada Radish</p>
									<div>
										<ButtonExcluir>Excluir</ButtonExcluir>
									</div>
								</Second>
								<span>R$ 25,97</span>
							</Card>
							<Card>
								<First>
									<img src={exemploPrato} alt="" />
								</First>
								<Second>
									<p>1 x Salada Radish</p>
									<div>
										<ButtonExcluir>Excluir</ButtonExcluir>
									</div>
								</Second>
								<span>R$ 25,97</span>
							</Card>
							<Card>
								<First>
									<img src={exemploPrato} alt="" />
								</First>
								<Second>
									<p>1 x Salada Radish</p>
									<div>
										<ButtonExcluir>Excluir</ButtonExcluir>
									</div>
								</Second>
								<span>R$ 25,97</span>
							</Card>
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
												required
												{...register("credito")}
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
