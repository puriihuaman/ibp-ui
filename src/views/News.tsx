import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import MainComponent from "@features/MainComponent";
import Logo from "@components/header/Logo";
import SvgIcon from "@components/SvgIcon";
import Copyright from "@components/footer/Copyright";

const MEDIA_QUERY = 1024;

export default function News() {
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
			<header className="sticky top-0 py-2 bg-slate-50 border-b border-slate-200 shadow dark:bg-slate-950 dark:border-slate-800 transition-all">
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
						className="order-2 text-dark-900 lg:hidden dark:text-slate-50"
						onClick={handleOpen}
					>
						<SvgIcon iconID="menu-alt-right-lienar" classes="w-10 h-8" />
					</button>
				</div>
			</header>

			<MainComponent>
				<div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<section className=" flex flex-col gap-4 lg:col-span-2">
						<article className="p-6 border border-slate-200 bg-slate-50 rounded shadow dark:bg-slate-900 dark:border-slate-800 transition-all">
							<header>
								<h2 className="text-xl font-bold">
									<a
										className="hover:text-ibp-500"
										href="https://ibp.edu.pe/blog/el-instituto-ibp-anuncia-dos-promociones-para-la-matricula-del-ciclo-academico-2023-ii/"
										rel="bookmark"
									>
										El Instituto IBP anuncia dos promociones para la matrícula
										del Ciclo Académico 2023-II
									</a>
								</h2>

								<div className="text-sm text-slate-600 dark:text-slate-400">
									<span>
										Publicada el{" "}
										<a
											href="https://ibp.edu.pe/blog/el-instituto-ibp-anuncia-dos-promociones-para-la-matricula-del-ciclo-academico-2023-ii/"
											rel="bookmark"
										>
											<time
												className="text-ibp-500"
												dateTime="2023-08-24T15:50:54+00:00"
											>
												agosto 24, 2023
											</time>
										</a>
									</span>
									<span>
										{" "}
										por{" "}
										<span>
											<a
												className="text-ibp-500"
												href="https://ibp.edu.pe/blog/author/admin/"
											>
												admin
											</a>
										</span>
									</span>
								</div>
							</header>

							<div className="my-4">
								<a
									className="block"
									href="https://ibp.edu.pe/blog/el-instituto-ibp-anuncia-dos-promociones-para-la-matricula-del-ciclo-academico-2023-ii/"
									aria-hidden="true"
									tabIndex={-1}
								>
									<img
										width="3840"
										height="2160"
										src="https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1.png"
										className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
										alt="El Instituto IBP anuncia dos promociones para la matrícula del Ciclo Académico 2023-II"
										decoding="async"
										srcSet="https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1.png 3840w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1-300x169.png 300w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1-1024x576.png 1024w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1-768x432.png 768w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1-1536x864.png 1536w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_1-2048x1152.png 2048w"
										sizes="(max-width: 3840px) 100vw, 3840px"
									/>{" "}
								</a>
							</div>

							<div>
								<p className="mb-4">
									7 de agosto de 2023 – El Instituto El Buen Pastor se complace
									en presentar dos atractivas promociones para el ciclo
									académico 2023-II, brindando a los estudiantes oportunidades
									únicas de obtener una educación de calidad a precios
									accesibles.
								</p>

								<p className="mb-4">
									Promoción 1: 50% de descuento en la Matrícula hasta el 31 de
									agosto
								</p>

								<p className="mb-4">
									El Instituto IBP está comprometido con la excelencia educativa
									y la accesibilidad para todos. En línea con esta misión, nos
									complace anunciar un descuento especial del 50% en la
									matrícula para aquellos estudiantes que realicen el pago de la
									primera cuota antes del 31 de agosto. Esta es una oportunidad
									única para asegurar tu lugar en nuestros programas académicos
									con alta demanda laboral y comenzar el próximo ciclo con un
									ahorro significativo en los costos.
								</p>

								<p className="mb-4">
									Promoción 2: ¡Matricúlate con un amigo y ambos no pagan
									Matrícula!
								</p>

								<p className="mb-4">
									Sabemos que compartir es una parte esencial de la experiencia
									educativa. Por ello, el Instituto IBP se complace en presentar
									una promoción que premia la amistad y el compromiso con la
									educación. Si tú y un amigo se matriculan juntos en cualquiera
									de nuestros programas para el ciclo 2023-II, ambos podrán
									disfrutar de la ventaja de no pagar la matrícula, solo
									pagarían su primera cuota. Es una oportunidad ideal para
									aprovechar el poder del aprendizaje en compañía y celebrar
									juntos los logros académicos.
								</p>

								<p className="mb-4">
									Estas promociones reflejan nuestro compromiso constante de
									brindar una educación integral y accesible que fomente el
									crecimiento personal y profesional. En el Instituto IBP,
									creemos que la educación transforma vidas y estamos
									emocionados de ofrecer estas oportunidades exclusivas para
									nuestros estudiantes.
								</p>

								<p className="mb-4">
									No pierdas tiempo y asegura tu futuro académico con estas
									atractivas promociones. Para obtener más información sobre
									cómo aprovechar estas ofertas y cómo matricularte en el ciclo
									académico 2023-II, visita nuestro sitio web www.ibp.edu.pe o
									contáctanos al Whatsapp IBP 928754115.
								</p>

								<p className="mb-4">
									En el Instituto IBP, ¡creamos oportunidades para el éxito!
								</p>
							</div>

							<footer>
								<span className="inline-block mr-2">
									Publicada en{" "}
									<a
										className="text-ibp-500"
										href="https://ibp.edu.pe/blog/category/noticias/"
										rel="category tag"
									>
										Noticias
									</a>
								</span>

								<span className="inline-block">
									<a
										className="text-ibp-500"
										href="https://ibp.edu.pe/blog/el-instituto-ibp-anuncia-dos-promociones-para-la-matricula-del-ciclo-academico-2023-ii/#respond"
									>
										Dejar un comentario{" "}
										<span className="hidden">
											en El Instituto IBP anuncia dos promociones para la
											matrícula del Ciclo Académico 2023-II
										</span>
									</a>
								</span>
							</footer>
						</article>

						<article className="p-6 border border-slate-200 bg-slate-50 rounded shadow dark:bg-slate-900 dark:border-slate-800 transition-all">
							<header>
								<h2 className="text-xl font-bold">
									<a
										className="hover:text-ibp-500"
										href="https://ibp.edu.pe/blog/instituto-el-buen-pastor-ofrece-oportunidades-de-aprendizaje-especializadas-para-adultos-mayores/"
										rel="bookmark"
									>
										Instituto El Buen Pastor ofrece oportunidades de aprendizaje
										especializadas para adultos mayores
									</a>
								</h2>

								<div className="text-sm text-slate-600 dark:text-slate-400">
									<span>
										Publicada el{" "}
										<a
											href="https://ibp.edu.pe/blog/instituto-el-buen-pastor-ofrece-oportunidades-de-aprendizaje-especializadas-para-adultos-mayores/"
											rel="bookmark"
										>
											<time
												className="text-ibp-500"
												dateTime="2023-08-24T14:57:00+00:00"
											>
												agosto 24, 2023
											</time>
										</a>
									</span>

									<span>
										{" "}
										por{" "}
										<span className="author vcard">
											<a
												className="text-ibp-500"
												href="https://ibp.edu.pe/blog/author/admin/"
											>
												admin
											</a>
										</span>
									</span>
								</div>
							</header>

							<div className="my-4">
								<a
									className="block"
									href="https://ibp.edu.pe/blog/instituto-el-buen-pastor-ofrece-oportunidades-de-aprendizaje-especializadas-para-adultos-mayores/"
									aria-hidden="true"
									tabIndex={-1}
								>
									<img
										width="3840"
										height="2160"
										src="https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2.png"
										className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
										alt="Instituto El Buen Pastor ofrece oportunidades de aprendizaje especializadas para adultos mayores"
										decoding="async"
										srcSet="https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2.png 3840w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2-300x169.png 300w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2-1024x576.png 1024w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2-768x432.png 768w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2-1536x864.png 1536w, https://ibp.edu.pe/blog/wp-content/uploads/2023/08/wallpaper_2-2048x1152.png 2048w"
										sizes="(max-width: 3840px) 100vw, 3840px"
									/>{" "}
								</a>
							</div>

							<div>
								<p className="mb-4">
									7 de agosto de 2023 – El Instituto El Buen pastor se complace
									en anunciar la organización de dos emocionantes talleres
									gratuitos diseñados especialmente para los adultos mayores de
									nuestra comunidad. Estos cursos ofrecen una excelente
									oportunidad para enriquecer la vida de nuestros queridos
									adultos mayores a través de experiencias educativas y
									creativas.
								</p>

								<p className="mb-4">Taller: Creatividad para Adultos Mayores</p>

								<p className="mb-4">Fecha de Inicio: 2 de agosto</p>

								<p className="mb-4">Días: Miércoles y Viernes</p>

								<p className="mb-4">Horario: 2:00 pm – 6:00 pm</p>

								<p className="mb-4">
									En el corazón de nuestra iniciativa se encuentra el taller
									«Creatividad para Adultos Mayores», diseñado para fomentar la
									expresión artística y la exploración creativa en un ambiente
									inclusivo y estimulante. Los participantes descubrirán nuevas
									formas de canalizar su creatividad a través de diversas
									actividades, desde pintura hasta escritura, todo mientras
									disfrutan de la camaradería y el apoyo de sus compañeros.
								</p>

								<p className="mb-4">
									Taller: Expresión Corporal para Adultos Mayores
								</p>

								<p className="mb-4">Fecha de Inicio: 3 de agosto</p>

								<p className="mb-4">Días: Martes a Jueves</p>

								<p className="mb-4">Horario: 2:00 pm – 6:00 pm</p>

								<p className="mb-4">
									Además, presentamos el taller «Expresión Corporal para Adultos
									Mayores», que arranca el 3 de agosto. Este taller tiene como
									objetivo promover el bienestar físico y emocional a través de
									la danza y la actividad física adaptada. Los participantes
									explorarán movimientos suaves y ejercicios diseñados para
									mejorar la flexibilidad, la coordinación y la autoconfianza.
								</p>

								<p className="mb-4">
									Ambos talleres son gratuitos y se llevarán a cabo en nuestras
									instalaciones del Instituto IBP, donde hemos creado un entorno
									seguro y amigable que fomenta el aprendizaje y la
									participación activa. Los cupos son limitados, por lo que
									alentamos a los interesados a registrarse lo antes posible.
								</p>

								<p className="mb-4">
									En el Instituto IBP, estamos comprometidos con el
									enriquecimiento continuo de nuestras comunidades y brindamos
									oportunidades significativas para el crecimiento personal y el
									desarrollo. Estamos emocionados de recibir a los adultos
									mayores en nuestros talleres y esperamos compartir momentos de
									aprendizaje y diversión juntos.
								</p>

								<p className="mb-4">
									Para más información y para inscripciones, por favor
									comuníquese con nosotros al Whatsapp IBP 928754115 o visite
									nuestro sitio web en www.ibp.edu.pe
								</p>

								<p className="mb-4">¡Juntos, crecemos y aprendemos!</p>
							</div>

							<footer className="entry-footer">
								<span>
									Publicada en{" "}
									<a
										className="text-ibp-500 mr-2"
										href="https://ibp.edu.pe/blog/category/noticias/"
										rel="category tag"
									>
										Noticias
									</a>
								</span>
								<span className="text-ibp-500">
									<a href="https://ibp.edu.pe/blog/instituto-el-buen-pastor-ofrece-oportunidades-de-aprendizaje-especializadas-para-adultos-mayores/#respond">
										Dejar un comentario{" "}
										<span className="hidden">
											en Instituto El Buen Pastor ofrece oportunidades de
											aprendizaje especializadas para adultos mayores
										</span>
									</a>
								</span>
							</footer>
						</article>
					</section>

					<aside>
						<div className="min-h-min md:col-span-1 p-6 border border-slate-200 bg-slate-50 shadow dark:bg-slate-900 dark:border-slate-800 transition-all">
							<form
								action="#"
								className="flex items-center justify-between gap-4 w-full"
							>
								<fieldset className="w-full">
									<label
										className="block mb-2 text-slate-600 text-sm"
										htmlFor="search"
									>
										Buscar
									</label>

									<input
										className="block w-full py-3 px-4 text-sm bg-slate-50 outline-none border-2 border-slate-200 active:border-ibp-500 focus:border-ibp-500 rounded-md placeholder:text-slate-400 placeholder:text-sm dark:bg-slate-950 dark:border-slate-800"
										type="search"
										name="search-post"
										id="search"
										placeholder="Buscar post"
									/>
								</fieldset>

								<fieldset className="mt-auto">
									<button className="flex py-3 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all">
										Buscar
									</button>
								</fieldset>
							</form>

							<article className="pt-8">
								<h3 className="font-bold text-xl capitalize">
									publicación reciente
								</h3>

								<div className="flex flex-col gap-2 pt-4 text-sm">
									<a
										className="text-ibp-500 hover:text-ibp-600"
										href="https://ibp.edu.pe/blog/el-instituto-ibp-anuncia-dos-promociones-para-la-matricula-del-ciclo-academico-2023-ii/"
									>
										El Instituto IBP anuncia dos promociones para la matrícula
										del Ciclo Académico 2023-II
									</a>

									<a
										className="text-ibp-500 hover:text-ibp-600"
										href="https://ibp.edu.pe/blog/instituto-el-buen-pastor-ofrece-oportunidades-de-aprendizaje-especializadas-para-adultos-mayores/"
									>
										Instituto El Buen Pastor ofrece oportunidades de aprendizaje
										especializadas para adultos mayores
									</a>
								</div>
							</article>
						</div>
					</aside>
				</div>
			</MainComponent>

			<footer className="text-sm py-8 px-4 bg-slate-50 dark:bg-slate-900 transition-colors">
				<Copyright />
			</footer>
		</>
	);
}
