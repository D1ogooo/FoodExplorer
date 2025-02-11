import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toast } from "../../components/utils/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Left, Form, Register } from "./style";
import iconfoodexplorer from "../../assets/icons/Polygon 1.svg";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const schema = z.object({
	email: z.string().email("Email inválido").min(1, "Email não declarado"),
	senha: z.string().min(1, "Senha não declarada"),
});

function SignIn() {
	const { signin } = useAuth();
	const [toastState, setToastState] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	function handleToast() {
		setToastState(true);
		setTimeout(() => {
			setToastState(false);
		}, 2500);
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	function onSubmit(data, e) {
		e.preventDefault();
		signin({ email: data.email, password: data.senha })
			.then(() => {
				navigate("/");
			})
			.catch(() => {
				alert("error");
			});
	}

	return (
		<Container>
			{toastState && <Toast />}
			<Left to="/">
				<img alt="" src={iconfoodexplorer} />
				<h2>food explorer</h2>
			</Left>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h1>Faça login</h1>

				<label htmlFor="email">
					Email
					<div>
						<input
							id="email"
							type="email"
							placeholder="Exemplo: exemplo@exemplo.com.br"
							{...register("email")}
						/>
					</div>
					{errors.email && (
						<p style={{ marginTop: ".5rem" }}>{errors.email.message}</p>
					)}
				</label>

				<label htmlFor="senha">
					Senha
					<div>
						<input
							id="senha"
							type="password"
							placeholder="No mínimo 6 caracteres"
							{...register("senha")}
						/>
					</div>
					{errors.senha && (
						<p style={{ marginTop: ".5rem" }}>{errors.senha.message}</p>
					)}
				</label>

				<input type="submit" value="Entrar" />
				<Register to="/register" id="registro">
					Criar uma conta
				</Register>
			</Form>
		</Container>
	);
}

export default SignIn;
