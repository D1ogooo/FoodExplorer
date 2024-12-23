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
import testePrato from "../../../assets/pratos/molla.svg";
import { api } from "../../../services/api";
import { useParams } from "react-router-dom";

export default function Prato() {
  const { id } = useParams()
  const [data, setData] = useState("");

	useEffect(() => {
		api
			.get(`/produtos/find/${id}`)
			.then((res) => {
				console.log(res.data.findProduct);
				setData(res.data.findProduct);
			})
			.catch((e) => {
				console.log("Falha", e);
				setData([]);
			});
	}, []);

  
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
                  {data.ingredientes.map((ingrediente) => (
                  <div key={ingrediente.id}>
                    <p>{ingrediente}</p>
                  </div>
                  ))}
                </Ingredientes>
              ): ""}
                <IncluirInspecionar />
              </Right>
            </Principal>
          ) : (
            <p>Carregando...</p>
          )}
        </Container>
      </PaiContainer>
    </>
  );
  
}



//   return (
//     <>
//       <PaiContainer>
//         <Return to="/">
//           <img src={returnIcon} alt="Voltar" />
//           <p>Voltar</p>
//         </Return>
//         <Container>
//           <Principal>
//             <Left>
//               <img src={data.image} alt={data.name} />  {/* Exibindo a imagem do prato */}
//             </Left>
//             <Right>
//               <h1>{data.name}</h1>  {/* Exibindo o nome do prato */}
//               <p>{data.sobre}</p>  {/* Exibindo a descrição do prato */}
//               <Ingredientes>
//                 <div>
//                   <h3>Ingredientes:</h3>
//                   <ul>
//                     {data.ingredientes.map((ingrediente, index) => (
//                       <li key={index}>{ingrediente}</li>  {/* Exibindo a lista de ingredientes */}
//                     ))}
//                   </ul>
//                 </div>
//               </Ingredientes>
//               <h2>R$ {data.valor}</h2>  {/* Exibindo o valor do prato */}
//               <IncluirInspecionar />  {/* Componente de incluir ou inspecionar */}
//             </Right>
//           </Principal>
//         </Container>
//       </PaiContainer>
//     </>
//   );
// }
