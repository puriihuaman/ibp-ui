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
			{ id: 1, path: "/estudiantil", title: "bienestral estudiantil" },
			{ id: 2, path: "/biblioteca", title: "biblioteca" },
			{ id: 3, path: "/pastoral", title: "pastoral juvenil" },
			{ id: 4, path: "/secretaria", title: "secretaria académica" },
		],
	},
	{
		id: 4,
		path: "/laboral",
		title: "inserción laboral",
		sublinks: [{ id: 1, path: "/egresados", title: "seguimiento egresados" }],
	},
	{
		id: 5,
		path: "/instituto",
		title: "instituto",
		sublinks: [
			{ id: 1, path: "/directorio", title: "directorio" },
			{ id: 2, path: "/docentes", title: "docentes" },
			{ id: 3, path: "/nosotros", title: "nosotros" },
			{ id: 4, path: "/personal", title: "personal" },
		],
	},
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
