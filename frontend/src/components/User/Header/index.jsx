import React from 'react'
import { useAuth } from "../../../hooks/useAuth";
import { Container, Logo, StateUser } from "./style";
import { Search, ButtonPedidos, ButtonLoggout, Favoritos } from "./style";
import principalIcon from "../../../assets/icons/Polygon 1.svg";
import searchIcon from "../../../assets/icons/search.svg";
import receitaIcon from "../../../assets/icons/Receipt.svg";
import loggoutIcon from "../../../assets/icons/SignOut.svg";
import { useNavigate } from 'react-router-dom';

export const HeaderUser = () => {
	const { loggout, role } = useAuth();
	const navigate = useNavigate()
	
	async function handleLoggout() {
		await loggout();
		navigate("/");
	}

	return (
		<Container>
			<header>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "end",
					}}
				>
					<Logo to="/">
						<img alt="" src={principalIcon} />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "end",
								alignItems: "end",
							}}
						>
							<p>food explorer</p>
						</div>
					</Logo>
					<StateUser>
						<h4>{role}</h4>
					</StateUser>
				</div>

				<Search>
					<div>
						<img alt="" src={searchIcon} />
						<input
							type="text"
							placeholder="Busque por pratos ou ingredientes"
						/>
					</div>
				</Search>

				<Favoritos to="/favoritos">
					<p>Meus favoritos</p>
				</Favoritos>

				<ButtonPedidos to="/checkinPedidos">
					<img alt="" src={receitaIcon} />
					<p>Pedidos (0)</p>
				</ButtonPedidos>

				<ButtonLoggout onClick={handleLoggout}>
					<img alt="" src={loggoutIcon} />
				</ButtonLoggout>
			</header>
		</Container>
	);
};
