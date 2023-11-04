import { Menu } from "@interfaces/menu";

export const menuList: Menu[] = [
	{
		id: 1,
		path: "/carreras",
		title: "carreras",
		sublinks: [
			{ id: 1, path: "/administracion", title: "administración de empresas" },
			{ id: 2, path: "/contabilidad", title: "contabilidad" },
			{ id: 3, path: "/sistemas", title: "desarrollo de sistemas" },
		],
	},
	{ id: 2, path: "/#cursos", title: "cursos", sublinks: [] },
	{
		id: 3,
		path: "servicios",
		title: "servicios",
		sublinks: [
			{ id: 1, path: "/", title: "bienestral estudiantil" },
			{ id: 2, path: "/", title: "biblioteca" },
			{ id: 3, path: "/", title: "pastoral juvenil" },
			{ id: 4, path: "/", title: "secretaria académica" },
		],
	},

	// {
	// 	id: 4,
	// 	title: "inserción laboral",
	// open:true,
	// 	sublinks: [{ id: 1, title: "seguimiento egresados" }],
	// },
	// {
	// 	id: 5,
	// 	title: "instituto",
	// 	sublinks: [
	// 		{ id: 1, title: "directorio" },
	// 		{ id: 2, title: "docentes" },
	// 		{ id: 3, title: "nosotros" },
	// 		{ id: 4, title: "personal" },
	// 	],
	// },
	{
		id: 6,
		path: "/blog",
		title: "blog",
		sublinks: [
			{ id: 1, path: "/nosotros", title: "¿quiénes somos?" },
			{ id: 2, path: "/noticias", title: "noticias" },
		],
	},
];
