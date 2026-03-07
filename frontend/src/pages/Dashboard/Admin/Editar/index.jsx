import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../../services/api";

import { Container, PaiContainer, Return } from "../../Prato/style";
import { TitleMark, MarkContainer, MarkExternal, CardDefault, For } from "./style";
import { Title, Primeiro, Segundo, Terceiro, Content } from "./style";
import { First, Second, Third } from "./style";

import IconClose from "../../../../assets/icons/Close.svg";
import Marcacoes from "../../../../components/Admin/Marcacao";
import returnIcon from "../../../../assets/icons/CaretLeft.svg";
import UploadSimple from "../../../../assets/icons/UploadSimple.svg";

function Editar() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
	const [listaDeMarcadores, setListaDeMarcadores] = useState([]);
	const [name, setName] = useState("");
	const [valor, setValor] = useState("");
	const [sobre, setSobre] = useState("");
	const [image, setImage] = useState(null);

	function handleImage(e) {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
		}
	}

	function deleteMark(index) {
		const lista = [...listaDeMarcadores];
		lista.splice(index, 1);
		setListaDeMarcadores(lista);
	}

	// 🔹 buscar produto quando abrir página
useEffect(() => {

	if (!id) return;

	async function fetchProduto() {
		const response = await api.get(`/produtos/${id}`);

		const produto = response.data;

		setName(produto.name);
		setValor(produto.valor);
		setSobre(produto.sobre);
		setOpcaoSelecionada(produto.categoria);
		setListaDeMarcadores(produto.ingredientes || []);
	}

	fetchProduto();
}, [id]);

	// 🔹 editar produto
	async function editItem() {

		const formData = new FormData();

		formData.append("name", name);
		formData.append("valor", valor);
		formData.append("sobre", sobre);
		formData.append("categoria", opcaoSelecionada);
		formData.append("ingredientes", JSON.stringify(listaDeMarcadores));

		if (image) {
			formData.append("image", image);
		}

		try {

			await api.put(`/produtos/update/${id}`, formData, {
				headers: { "Content-Type": "multipart/form-data" }
			});

			alert("Produto atualizado com sucesso!");

			navigate("/");

		} catch (error) {
			console.error(error);
			alert("Erro ao atualizar produto");
		}
	}

	// 🔹 deletar produto
	async function handleDeletePrato() {

		const confirmDelete = confirm("Deseja realmente excluir este prato?");

		if (!confirmDelete) return;

		try {

			await api.delete(`/produtos/delete/${id}`);

			alert("Produto deletado com sucesso!");

			navigate("/");

		} catch (error) {
			console.error(error);
			alert("Erro ao deletar produto");
		}
	}

	return (
		<PaiContainer>

			<Return to="/">
				<img src={returnIcon} alt="" />
				<p>voltar</p>
			</Return>

			<Container>

				<Title>Editar prato</Title>

				<Content>

					<First>

						<Primeiro>
							<label>
								Imagem do prato
								<div>
									<img src={UploadSimple} alt="" />
									<input
										type="file"
										accept="image/*"
										onChange={handleImage}
									/>
								</div>
							</label>
						</Primeiro>

						<Segundo>
							<label>
								Nome
								<div>
									<input
										type="text"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</label>
						</Segundo>

						<Terceiro>
							<label>
								Categoria
								<select
									value={opcaoSelecionada}
									onChange={(e) => setOpcaoSelecionada(e.target.value)}
								>
									<option value="refeicao">Refeição</option>
									<option value="sobremesas">Sobremesas</option>
									<option value="bebidas">Bebidas</option>
								</select>
							</label>
						</Terceiro>

					</First>

					<Second>

						<MarkContainer>

							<TitleMark>Ingredientes</TitleMark>

							<MarkExternal>

								{listaDeMarcadores.map((mark, index) => (

									<CardDefault key={index}>
										<p>{mark}</p>
										<img
											src={IconClose}
											onClick={() => deleteMark(index)}
											alt=""
										/>
									</CardDefault>

								))}

								<Marcacoes setListaDeMarcadores={setListaDeMarcadores} />

							</MarkExternal>

						</MarkContainer>

						<label>
							<p>Preço</p>
							<div>
								<input
									type="number"
									value={valor}
									onChange={(e) => setValor(e.target.value)}
								/>
							</div>
						</label>

					</Second>

					<Third>

						<label>
							<p>Descrição</p>
							<div>
								<textarea
									value={sobre}
									onChange={(e) => setSobre(e.target.value)}
								/>
							</div>
						</label>

						<For>

							<button onClick={handleDeletePrato}>
								Excluir prato
							</button>

							<button onClick={editItem}>
								Salvar alterações
							</button>

						</For>

					</Third>

				</Content>

			</Container>

		</PaiContainer>
	);
}

export default Editar;