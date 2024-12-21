import React from 'react'
import { useState } from "react";
import { Container, PaiContainer, Return } from "../../Prato/style";
import { TitleMark, MarkContainer, MarkExternal, CardDefault, For } from "./style";
import { Title, Primeiro, Segundo, Terceiro, Content } from "./style";
import { First, Second, Third } from "./style";
import IconClose from "../../../../assets/icons/Close.svg";
import Marcacoes from "../../../../components/Admin/Marcacao";
import returnIcon from "../../../../assets/icons/CaretLeft.svg";
import UploadSimple from "../../../../assets/icons/UploadSimple.svg";

function Editar() {
	const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
	const [listaDeMarcadores, setListaDeMarcadores] = useState(["Pão Naan"]);
	const [name, setName] = useState("");

	function deleteMark(index) {
		let lista = [...listaDeMarcadores];
		lista.splice(index, 1);
		setListaDeMarcadores(lista);
	}

	return (
		<>
			<PaiContainer>
				<Return to="/">
					<img src={returnIcon} />
					<p>voltar</p>
				</Return>
				<Container>
					<Title>Editar prato</Title>
					<Content>
						<First>
							<Primeiro>
								<label id="select_image">
									Imagem do prato
									<div>
										<img src={UploadSimple} />
										<input type="file" accept="image/*" />
									</div>
								</label>
							</Primeiro>
							<Segundo>
								<label id="declare_name">
									Nome
									<div>
										<input
											type="text"
											placeholder="Ex.: Salada Ceasar"
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
								</label>
							</Segundo>
							<Terceiro>
								<label id="option_categoria">
									Categoria
									<select onChange={(e) => setOpcaoSelecionada(e.target.value)}>
										<option value="opcao1">Refeição</option>
										<option value="opcao2">Sobremesas</option>
										<option value="opcao3">Bebidas</option>
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
											<img src={IconClose} onClick={() => deleteMark(index)} />
										</CardDefault>
									))}
									<Marcacoes setListaDeMarcadores={setListaDeMarcadores} />
								</MarkExternal>
							</MarkContainer>
							<label id="valor_select">
								<p>Preço</p>
								<div>
									<input type="text" placeholder="R$ 00,00" />
								</div>
							</label>
						</Second>
						<Third>
							<label id="valor_select">
								<p>Descrição</p>
								<div>
									<textarea
										placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
										cols="1000"
										rows="13"
									></textarea>
								</div>
							</label>
						<For>
							<button>
								Excluir prato
							</button>
							<button>
								Salvar alterações
							</button>
						</For>
						</Third>
					</Content>
				</Container>
			</PaiContainer>
		</>
	);
}

export default Editar;
