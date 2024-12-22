import React, { useState } from "react";
import { api } from "../../../../services/api";
import { Container, PaiContainer, Return } from "../../Prato/style";
import { TitleMark, MarkContainer, MarkExternal, CardDefault, For } from "./style";
import { Title, Primeiro, Segundo, Terceiro, Content } from "./style";
import { First, Second, Third } from "./style";
import IconClose from "../../../../assets/icons/Close.svg";
import Marcacoes from "../../../../components/Admin/Marcacao";
import returnIcon from "../../../../assets/icons/CaretLeft.svg";
import UploadSimple from "../../../../assets/icons/UploadSimple.svg";


function AdicionarPrato() {
  const [stateToast, setStateToast] = useState(false)
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [listaDeMarcadores, setListaDeMarcadores] = useState(["Pão Naan"]);
  const [name, setName] = useState("")
  const [image, setImage] = useState(null);
  const [valor, setValor] = useState()
  const [sobre, setSobre] = useState("")

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

  function handleSubmit() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("valor", valor);
    formData.append("sobre", sobre);
    formData.append("categoria", opcaoSelecionada);
    formData.append("ingredientes", JSON.stringify(listaDeMarcadores));
    
    if(!name) {
      alert("é necessário declarar o nome do produto")
    }

    if(!valor) {
     alert("é necessário declarar o valor do produto")
    }
    
    if(!sobre) {
      alert("é necessário deixar um pequeno texto falando sobre o produto")
    }

    if(!opcaoSelecionada) {
     alert("é necessário declara a categoria do produto")
    }
    
    if(!listaDeMarcadores) {
     alert("é necessário declarar os ingredientes do produto")
    }

    if (!image) {
      alert("é necessário declarar uma imagem");
      return;
    }
  
    formData.append("image", image);
  
    api
      .post("/produtos/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert("Produto criado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao criar o produto");
      });
  }

  return (
    <>
      <PaiContainer>
        {stateToast && <Toast message={"É necessário declarar uma imagem"}/>}
        <Return to="/">
          <img src={returnIcon} alt="" />
          <p>voltar</p>
        </Return>
        <Container>
          <Title>Adicionar prato</Title>
          <Content>
            <First>
              <Primeiro>
                <label id="select_image">
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
                        onClick={() => deleteMark(index)}
                        src={IconClose}
                        alt=""
                      />
                    </CardDefault>
                  ))}
                  <Marcacoes setListaDeMarcadores={setListaDeMarcadores} />
                </MarkExternal>
              </MarkContainer>
              <label id="valor_select">
                <p>Preço</p>
                <div>
                  <input type="number" placeholder="R$ 00,00" onChange={(e) => setValor(e.target.value)}/>
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
                    onChange={(e) => setSobre(e.target.value)}
                  />
                </div>
              </label>
              <For>
                <button type="button" onClick={handleSubmit}>
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

export default AdicionarPrato;
