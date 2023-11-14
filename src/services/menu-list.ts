import { Menu } from "@interfaces/menu";

export const menuList: Menu[] = [
	{
		id: 1,
		path: "/carreras",
		title: "carreras",
		sublinks: [
			{
				id: 1,
				path: "/carreras/administracion",
				title: "administración de empresas",
			},
			{ id: 2, path: "/carreras/contabilidad", title: "contabilidad" },
			{ id: 3, path: "/carreras/sistemas", title: "desarrollo de sistemas" },
		],
	},
	{ id: 2, path: "/#cursos", title: "cursos", sublinks: [] },
	// {
	// 	id: 3,
	// 	path: "servicios",
	// 	title: "servicios",
	// 	sublinks: [
	// 		{ id: 1, path: "/estudiantil", title: "bienestral estudiantil" },
	// 		{ id: 2, path: "/biblioteca", title: "biblioteca" },
	// 		{ id: 3, path: "/pastoral", title: "pastoral juvenil" },
	// 		{ id: 4, path: "/secretaria", title: "secretaria académica" },
	// 	],
	// },
	{
		id: 4,
		path: "/instituto",
		title: "instituto",
		sublinks: [
			{ id: 1, path: "/instituto/egresados", title: "seguimiento egresados" },
			{
				id: 2,
				path: "/instituto/insercion-laboral",
				title: "insercion laboral",
			},
			{
				id: 3,
				path: "https://ibp.edu.pe/doc/CentralIBP.pdf",
				title: "directorio",
			},
			{ id: 4, path: "/instituto/docentes", title: "docentes" },
			{ id: 5, path: "/instituto/personal", title: "personal" },
		],
	},
	{
		id: 5,
		path: "/blog",
		title: "blog",
		sublinks: [
			{ id: 1, path: "/blog/somos-ibp", title: "somos IBP" },
			{ id: 2, path: "/blog/nosotros", title: "nosotros" },
			{ id: 3, path: "/blog/noticias", title: "noticias" },
		],
	},
];
