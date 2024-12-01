import { useState } from "react";
import { Container, Left, Form, Register } from "./style";
import iconfoodexplorer from "../../assets/icons/Polygon 1.svg";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function SignIn() {
	const { signin } = useAuth();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		signin({ email, password })
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}

	return (
		<>
			<Container>
				<Left to="/">
					<img alt="" src={iconfoodexplorer} />
					<h2>food explorer</h2>
				</Left>
				<Form>
					<h1>Faça login</h1>
					<label id="email">
						Email
						<div>
							<input
								type="email"
								placeholder="Exemplo: exemplo@exemplo.com.br"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</label>
					<label>
						Senha
						<div className="Seunome">
							<input
								type="password"
								placeholder="No mínimo 6 caracteres"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</label>
					<input type="submit" onClick={handleSubmit} />
					<Register href="#" to="/register" id="registro">
						Criar uma conta
					</Register>
				</Form>
			</Container>
		</>
	);
}

export default SignIn;
