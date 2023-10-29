import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

interface Menu {
	id: number;
	path: string;
	title: string;
	sublinks: Sublink[];
}
interface Sublink {
	id: number;
	path: string;
	title: string;
}

const menu: Menu[] = [
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
	// {
	// 	id: 3,
	// 	title: "servicios",
	// 	sublinks: [
	// 		{ id: 1, title: "bienestral estudiantil" },
	// 		{ id: 2, title: "biblioteca" },
	// 		{ id: 3, title: "pastoral juvenil" },
	// 		{ id: 4, title: "secretaria académica" },
	// 	],
	// },

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

export default function Navegation({ isOpen }: { isOpen: boolean }) {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
	const subMenuRef = useRef(null);

	const handleSubmenuOpen = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	return (
		<nav
			className={`absolute top-full left-0 z-20 w-full px-4  text-slate-900 transition-all duration-700 lg:relative lg:top-0 lg:px-0 lg:w-4/6 ${
				isOpen ? "min-h-max opacity-100 visible" : "h-0 opacity-0 invisible"
			}`}
		>
			<ul className="px-4 py-2 bg-slate-200 shadow-lg rounded-md lg:flex lg:px-0 lg:bg-transparent lg:shadow-none">
				{menu.map((item: Menu) => (
					<li key={item.id}>
						{item.sublinks.length < 1 ? (
							<NavLink
								to={item.path}
								className={({ isActive }): string =>
									`flex lg:justify-center items-center px-3 py-2 whitespace-nowrap text-sm capitalize hover:text-blue-500 hover:bg-slate-50 transition-colors lg:hover:bg-transparent ${
										isActive ? "font-semibold text-blue-500" : ""
									}`
								}
							>
								{item.title}
							</NavLink>
						) : (
							<div
								className="inline-flex w-full lg:justify-center gap-x-1.5 text-sm capitalize rounded-md bg-slate px-3 py-2 text-slate-900 cursor-pointer"
								id="menu-button"
								aria-expanded={isSubmenuOpen}
								aria-haspopup={isSubmenuOpen}
								onClick={handleSubmenuOpen}
							>
								<span>{item?.title}</span>
								<span
									className={`flex justify-center items-center transition-transform ${
										isSubmenuOpen ? "rotate-90" : "rotate-0"
									}`}
								>
									<svg className="block w-5 h-5 text-current fill-current">
										<use href="/assets/icons/icons.svg#arrow-right"></use>
									</svg>
								</span>
							</div>
						)}

						{item.sublinks.length > 0 && (
							<ul
								ref={subMenuRef}
								className={`lg:absolute right-0 z-10 lg:mt-2 w-56 origin-top-right bg-transparent lg:bg-slate-200 lg:shadow-lg lg:ring-1 lg:ring-slate-200 ring-opacity-5 overflow-hidden focus:outline-none lg:rounded-md ${
									isSubmenuOpen
										? "visible opactity-100"
										: "h-0 invisible opactity-0"
								}`}
							>
								{item.sublinks.map((sublink: Sublink) => (
									<li key={sublink.id} role="none">
										<NavLink
											to={sublink.path}
											className={({ isActive }): string =>
												`flex pr-4 pl-6 py-2 text-sm text-slate-800 lg:bg-slate-100 capitalize hover:text-blue-600 transition-colors ${
													isActive ? "font-semibold text-blue-500" : ""
												}`
											}
										>
											{sublink.title}
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
