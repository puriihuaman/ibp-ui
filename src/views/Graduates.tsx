import { useState } from "react";

import SvgIcon from "@components/SvgIcon";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";
import MainComponent from "@features/MainComponent";

export default function Graduates() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	return (
		<>
			<Banner srcImage={"bg-[url('/assets/images/segegresado.png')]"} />

			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8 px-4">
					<div className="flex flex-col lg:flex-row gap-8">
						<section>
							<article className="text-center lg:text-left">
								<p>
									Nos encargamos de monitorear y analizar la inserción laboral
									de nuestros egresados en el mercado laboral; así mismo,
									conocer si el proceso de enseñanza y aprendizaje fue el más
									adecuado.
								</p>
							</article>

							<div className="py-8 flex flex-col lg:flex-row gap-8">
								<article className="p-4 bg-slate-50 shadow lg:px-8 dark:bg-slate-900 transition-colors">
									<div className="w-32 h-32 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon
											iconID="messages-square"
											classes="w-16 h-16 text-ibp-500"
										/>
									</div>

									<div className="text-center py-4">
										<h2 className="text-2xl font-bold mb-4">
											Información egresados
										</h2>
										<p>
											Actualiza tus datos para el seguimiento y comunicación con
											nosotros
										</p>

										<a
											className="flex justify-center items-center p-3 mt-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md shadow-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											href="https://www.ibp.edu.pe/cuestionario/"
											target="_blank"
										>
											Registrate
										</a>
									</div>
								</article>

								<article className="p-4 bg-slate-50 shadow-md lg:px-8 dark:bg-slate-900 transition-colors">
									<div className="w-32 h-32 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="users" classes="w-16 h-16 text-ibp-500" />
									</div>

									<div className="text-center py-4">
										<h2 className="text-2xl font-bold mb-4">
											Encuentro de egresados
										</h2>
										<p>
											Te invitamos a participar en el encuentro de egresados IBP
											2023-II
										</p>

										<button
											className="w-full flex justify-center items-center p-3 mt-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md shadow-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											onClick={() => setIsOpenModal(!isOpenModal)}
										>
											Actualiza
										</button>
									</div>
								</article>
							</div>

							<figure className="block">
								<img
									className="aspect-video w-full h-full"
									src="https://www.ibp.edu.pe/img/Cifrass.png"
									alt="seguimientos de egresados en cifras"
								/>
								<figcaption className="text-sm text-right text-slate-500">
									Encuesta S.E. 2023
								</figcaption>
							</figure>
						</section>

						<aside className="lg:ml-auto lg:max-w-xs">
							<div className="sticky top-24 p-4 text-center bg-slate-50 shadow dark:bg-slate-900 transition-colors">
								<div className="flex flex-col gap-4">
									<div className="w-16 h-16 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="mail-search" classes="w-8 h-8" />
									</div>

									<h3 className="text-2xl font-bold lg:text-3xl">Escríbenos</h3>
									<p>Si deseas información o tienes una consulta, escríbenos</p>

									<div className="text-sm text-slate-800 border border-slate-200 shadow rounded-lg hover:text-ibp-500 hover:border-current dark:text-slate-50 dark:border-slate-800 dark:hover:text-ibp-500 dark:hover:border-current transition-colors">
										<a
											className="flex justify-center items-center gap-2 p-3"
											href="mailto:pamela.culqui@bpastor.edu.pe"
										>
											<SvgIcon iconID="mail" classes="w-4 h-4" />

											<span>pamela.culqui@bpastor.edu.pe</span>
										</a>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</section>
			</MainComponent>

			<Footer />

			<div
				className={`${
					isOpenModal
						? "scale-1 visible opacity-100"
						: "scale-0 invisible opacity-0"
				} fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center p-4 bg-slate-900/40 origin-center transition-all duration-700`}
				data-modal="modal"
				onClick={() => setIsOpenModal(!isOpenModal)}
			>
				<div className="min-w-60 max-w-lg w-full bg-slate-50 rounded-md shadow-md">
					<div className="relative">
						<button
							className="absolute right-0 -top-10 p-1 z-50 bg-slate-50 text-ibp-500 rounded-md overflow-hidden hover:bg-ibp-500 hover:text-slate-50 active:scale-95 transition-all"
							onClick={() => setIsOpenModal(!isOpenModal)}
						>
							<SvgIcon iconID="close" classes="w-6 h-6" />
						</button>

						<div className="relative bg-ibp-500 rounded-md overflow-hidden">
							<img
								className="w-full h-full"
								src="/assets/images/encuentroegresados.png"
								alt="encuentro de egresados"
							/>

							<a
								className="absolute right-24 bottom-24 flex justify-center items-center py-3 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md shadow-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
								href="https://www.ibp.edu.pe/cuestionario/"
								target="_blank"
							>
								Inscríbete
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
