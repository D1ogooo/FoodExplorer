import ravanello from "../assets/pratos/ravanello.svg";
import gambe from "../assets/pratos/gambe.svg";
import parma from "../assets/pratos/parma.svg";
import molla from "../assets/pratos/molla.svg";
import dish from "../assets/pratos/Dish.png";
import macaron from "../assets/pratos/macaron sobremesa.svg";
import pastry from "../assets/pratos/pastrysobremesa.svg";
import prugna from "../assets/pratos/prune sobremesa.svg";
import espresso from "../assets/pratos/expresso.svg";
import sucomaracuja from "../assets/pratos/suco de maracuja.svg";
import tedautnno from "../assets/pratos/Tè dautunno.svg";

export const dbRefeicoes = [
	{
		id: 0,
		title: "Salada de Ravanello >",
		prato: `${ravanello}`,
		explicacao:
			"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
		ingredientes: [
			"alface",
			"cebola",
			"pão naan",
			"pepino",
			"rabanete",
			"tomate",
		],
		valor: "R$ 49,97",
	},
	{
		id: 1,
		title: "Spaguetti Gambe >",
		prato: `${gambe}`,
		explicacao: "Massa fresca com camarões e pesto.",
		ingredientes: "",
		valor: "R$ 79,97",
	},
	{
		id: 2,
		title: "Torradas de Parma >",
		prato: `${parma}`,
		explicacao: "Presunto de parma e rúcula em um pão com fermentação natural.",
		ingredientes: "",
		valor: "R$ 25,97",
	},
	{
		id: 3,
		title: "Salada de Molla >",
		prato: `${molla}`,
		explicacao: "Originado das profundezas das florestas tropicais.",
		ingredientes: "",
		valor: "R$ 30,97",
	},
	{
		id: 4,
		title: "Salada de Molla >",
		prato: `${molla}`,
		explicacao: "Originado das profundezas das florestas tropicais.",
		ingredientes: "",
		valor: "R$ 30,97",
	},
	{
		id: 5,
		title: "Salada de Molla >",
		prato: `${molla}`,
		explicacao: "Originado das profundezas das florestas tropicais.",
		ingredientes: "",
		valor: "R$ 30,97",
	},
];

export const dbSobremesas = [
	{
		id: 6,
		title: "Prugna Pie >",
		prato: `${prugna}`,
		explicacao: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
		ingredientes: "",
		valor: "R$ 79,97",
	},
	{
		id: 7,
		title: "Peachy pastrie >",
		prato: `${pastry}`,
		explicacao: "Delicioso folheado de pêssego com folhas de hortelã.",
		ingredientes: "",
		valor: "R$ 32,97",
	},
	{
		id: 8,
		title: "Macarons >",
		prato: `${macaron}`,
		explicacao: "Farinha de amêndoas, manteiga, claras e açúcar.",
		ingredientes: "",
		valor: "R$ 79,97",
	},
	{
		id: 9,
		title: "Bolo de dish >",
		prato: `${dish}`,
		explicacao:
			"O Bolo Refrescante de Dish é uma obra-prima da confeitaria, onde a suavidade da massa encontra a intensidade dos damascos frescos.",
		ingredientes: "",
		valor: "R$ 25,97",
	},
];

export const dbBebidas = [
	{
		id: 10,
		title: "Espresso >",
		prato: `${espresso}`,
		explicacao: "Café cremoso feito na temperatura e pressões perfeitas.",
		ingredientes: "",
		valor: "R$ 15,97",
	},
	{
		id: 11,
		title: "Suco de maracujá >",
		prato: `${sucomaracuja}`,
		explicacao: "Suco de maracujá gelado, cremoso, docinho.",
		ingredientes: "",
		valor: "R$ 13,97",
	},
	{
		id: 12,
		title: "Tè dautunno >",
		prato: `${tedautnno}`,
		explicacao: "Chá de anis, canela e limão. Sinta o outono italiano.",
		ingredientes: "",
		valor: "R$ 19,97",
	},
];
