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
		ingredientes: [
			"Espaguete",
			"Camarões limpos e sem casca",
			"Azeite de oliva",
			"Alho",
			"Tomates",
			"Pimenta vermelha",
			"Sal",
			"Pimenta-do-reino",
	],
		valor: "R$ 79,97",
	},
	{
		id: 2,
		title: "Torradas de Parma >",
		prato: `${parma}`,
		explicacao: "Presunto de parma e rúcula em um pão com fermentação natural.",
		ingredientes: [
			"Pão de forma ou baguete",
			"Presunto de Parma",
			"Queijo parmesão ou queijo de sua preferência",
			"Azeite de oliva",
			"Alho",
			"Tomates-cereja",
			"Rúcula",
			"Pimenta-do-reino",
	],
		valor: "R$ 25,97",
	},
	{
		id: 3,
		title: "Salada de Molla >",
		prato: `${molla}`,
		explicacao: "Originado das profundezas das florestas tropicais.",
		ingredientes: [
			"Alface",
			"Rúcula",
			"Tomates-cereja",
			"Pepino",
			"Cebola roxa",
			"Azeite de oliva",
			"Vinagre balsâmico",
			"Sal",
			"Pimenta-do-reino",
	],
		valor: "R$ 30,97",
	},
];

export const dbSobremesas = [
	{
		id: 6,
		title: "Prugna Pie >",
		prato: `${prugna}`,
		explicacao: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
		ingredientes: [
			"Ameixas frescas ou secas",
			"Massa para torta",
			"Açúcar",
			"Farinha de trigo",
			"Manteiga",
			"Ovos",
			"Canela em pó",
			"Casca de limão ralada",
			"Suco de limão",
			"Amido de milho",
			"Sal",
			"Açúcar de confeiteiro"
	],
		valor: "R$ 79,97",
	},
	{
		id: 7,
		title: "Peachy pastrie >",
		prato: `${pastry}`,
		explicacao: "Delicioso folheado de pêssego com folhas de hortelã.",
		ingredientes: [
			"Massa folhada",
			"Pêssegos frescos ou em calda",
			"Açúcar",
			"Amido de milho",
			"Canela em pó",
			"Suco de limão",
			"Manteiga",
			"Ovos",
			"Essência de baunilha",
			"Açúcar de confeiteiro"
	],
		valor: "R$ 32,97",
	},
	{
		id: 8,
		title: "Macarons >",
		prato: `${macaron}`,
		explicacao: "Farinha de amêndoas, manteiga, claras e açúcar.",
		ingredientes: [
			"Claras de ovo",
			"Açúcar refinado",
			"Açúcar de confeiteiro",
			"Farinha de amêndoas",
			"Corante alimentício",
			"Sal",
			"Creme de tártaro",
			"Manteiga",
			"Açúcar de confeiteiro",
			"Essência de baunilha",
			"Chocolate branco"
	],
		valor: "R$ 79,97",
	},
	{
		id: 9,
		title: "Bolo de dish >",
		prato: `${dish}`,
		explicacao:
			"O Bolo Refrescante de Dish é uma obra-prima da confeitaria, onde a suavidade da massa encontra a intensidade dos damascos frescos.",
		ingredientes: [
			"Farinha de trigo",
			"Açúcar",
			"Ovos",
			"Manteiga ou margarina",
			"Leite",
			"Fermento em pó",
			"Essência de baunilha",
			"Sal",
			"Chocolate em pó ou cacau"
	],
		valor: "R$ 25,97",
	},
];

export const dbBebidas = [
	{
		id: 10,
		title: "Espresso >",
		prato: `${espresso}`,
		explicacao: "Café cremoso feito na temperatura e pressões perfeitas.",
		ingredientes: [
			"Café moído fino",
			"Água filtrada"
	],
		valor: "R$ 15,97",
	},
	{
		id: 11,
		title: "Suco de maracujá >",
		prato: `${sucomaracuja}`,
		explicacao: "Suco de maracujá gelado, cremoso, docinho.",
		ingredientes: [
			"Polpa de maracujá",
			"Água",
			"Açúcar",
			"Gelo"
	],
		valor: "R$ 13,97",
	},
	{
		id: 12,
		title: "Tè dautunno >",
		prato: `${tedautnno}`,
		explicacao: "Chá de anis, canela e limão. Sinta o outono italiano.",
		ingredientes: [
			"Folhas de chá preto ou chá verde",
			"Maçã",
			"Canela em pau",
			"Cravo-da-índia",
			"Gengibre fresco",
			"Casca de laranja",
			"Mel",
			"Água quente"
	],
		valor: "R$ 19,97",
	},
];
