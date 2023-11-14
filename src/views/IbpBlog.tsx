import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import SvgIcon from "@components/SvgIcon";
import Copyright from "@components/footer/Copyright";
import Logo from "@components/header/Logo";
import Banner from "@features/Banner";
import MainComponent from "@features/MainComponent";

const MEDIA_QUERY = 1024;
export default function IbpBlog() {
	const [isOpen, setIsOpen] = useState<boolean>(
		window.innerWidth >= MEDIA_QUERY
	);

	const handleOpen = (): void => setIsOpen(!isOpen);

	useEffect((): (() => void) => {
		const changeStateOpen = (): void =>
			setIsOpen(window.innerWidth >= MEDIA_QUERY ? true : false);

		window.addEventListener("resize", changeStateOpen);

		return (): void => {
			window.removeEventListener("resize", changeStateOpen);
		};
	}, [isOpen]);

	return (
		<>
			<header className="sticky top-0 z-50 py-2 bg-slate-50 border-b border-slate-200 shadow dark:bg-slate-950 dark:border-slate-800 transition-all">
				<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
					<Logo />

					<nav
						className={`absolute top-full left-0 z-20 w-full px-4 text-slate-800 transition-all duration-700 lg:relative lg:top-0 lg:px-0 lg:w-72 lg:ml-auto dark:text-slate-50 ${
							isOpen
								? "min-h-max opacity-100 visible"
								: "h-0 opacity-0 invisible"
						}`}
					>
						<ul className="bg-slate-50 border border-slate-200 shadow rounded-md overflow-hidden lg:flex lg:bg-transparent lg:border-none lg:shadow-none dark:bg-slate-900 dark:border-slate-800 dark:lg:bg-transparent transition-all">
							<li>
								<NavLink
									to="/blog/somos-ibp"
									className={({ isActive }): string =>
										`flex items-center p-4 whitespace-nowrap capitalize hover:text-ibp-500 hover:bg-slate-100 transition-colors lg:justify-center lg:hover:bg-transparent lg:p-3 dark:hover:bg-slate-950 ${
											isActive ? "font-semibold text-ibp-500" : ""
										}`
									}
								>
									somos ibp
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/blog/noticias"
									className={({ isActive }): string =>
										`flex items-center p-4 whitespace-nowrap capitalize hover:text-ibp-500 hover:bg-slate-100 transition-colors lg:justify-center lg:hover:bg-transparent lg:p-3 dark:hover:bg-slate-950 ${
											isActive ? "font-semibold text-ibp-500" : ""
										}`
									}
								>
									noticias
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/blog/nosotros"
									className={({ isActive }): string =>
										`flex items-center p-4 whitespace-nowrap capitalize hover:text-ibp-500 hover:bg-slate-100 transition-colors lg:justify-center lg:hover:bg-transparent lg:p-3 dark:hover:bg-slate-950 ${
											isActive ? "font-semibold text-ibp-500" : ""
										}`
									}
								>
									nosotros
								</NavLink>
							</li>
						</ul>
					</nav>

					{/* Button */}
					<button
						className="order-2 text-slate-800 lg:hidden dark:text-slate-50"
						onClick={handleOpen}
					>
						<SvgIcon iconID="menu-alt-right-lienar" classes="w-10 h-8" />
					</button>
				</div>
			</header>

			<Banner srcImage={"bg-[url('/assets/images/somosibp.png')]"} />

			<MainComponent>
				<section className="max-w-6xl mx-auto px-4">
					<div className="py-8">
						<h1 className="text-2xl font-bold lg:text-4xl">Galería IBP</h1>
						<p className="text-slate-600 font-semibold uppercase md:text-right dark:text-slate-400">
							Nuestro legado
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<article className="rounded-md overflow-hidden hover:scale-105 transition-transform">
							<img
								src="https://ibp.edu.pe/blog/wp-content/uploads/2023/09/Imagen-de-atsApp-2023-09-01-a-las-14.52.42-768x1024.jpg"
								alt=""
							/>
						</article>

						<article>
							<div className="rounded-md overflow-hidden hover:scale-105 transition-transform">
								<img
									src="https://ibp.edu.pe/blog/wp-content/uploads/2023/09/las-14.52.50-1024x576.jpg"
									alt=""
								/>
							</div>

							<p className="mt-4">
								El 31 de agosto se realizó la clausura de los Curso de
								<strong> Coaching Creativo de Adultos Mayores</strong> con una
								activa participación de sus integrantes.
							</p>
						</article>

						<article className="rounded-md overflow-hidden hover:scale-105 transition-transform">
							<img
								src="https://ibp.edu.pe/blog/wp-content/uploads/2023/09/ImagenhatsApp-2023-09-01-a-las-14.52.45.jpg"
								alt=""
							/>
						</article>
					</div>

					<section className="py-16">
						<iframe
							className="block w-full"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7805.210394455886!2d-77.06517651828683!3d-12.001802653403566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cef98bedbd3b%3A0xaf95ccf16e4ef3ec!2sIBP%20El%20Buen%20Pastor!5e0!3m2!1ses-419!2spe!4v1699545611882!5m2!1ses-419!2spe"
							width="600"
							height="400"
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</section>
				</section>
			</MainComponent>

			<footer className="text-sm py-8 px-4 bg-slate-50 dark:bg-slate-900 transition-colors">
				<Copyright />
			</footer>
		</>
	);
}
