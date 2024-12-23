import React from 'react'
import { useAuth } from "../../../hooks/useAuth";
import { Container, Logo, StateUser, ButtonNovoPrato } from "./style";
import { Search, ButtonLoggout } from "./style";
import principalIcon from "../../../assets/icons/Polygon 1.svg";
import searchIcon from "../../../assets/icons/search.svg";
import loggoutIcon from "../../../assets/icons/SignOut.svg";
import { useNavigate } from 'react-router-dom';


export const HeaderAdmin = () => {
	const { loggout, role } = useAuth();
	const navigate = useNavigate();

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
									<Logo onClick={() => navigate('/')}>
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

							<ButtonNovoPrato to="/adicionarPrato">Novo prato</ButtonNovoPrato>

							<ButtonLoggout onClick={() => loggout()}>
									<img alt="" src={loggoutIcon} />
							</ButtonLoggout>
					</header>
			</Container>
	);
};
