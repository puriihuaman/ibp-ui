import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";
import MainComponent from "@features/MainComponent";

export default function Graduates() {
	return (
		<>
			<Banner />
			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8">
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
								<article className="p-4 bg-gray-100 shadow-md lg:px-8">
									<div className="h-40">
										<img
											className="h-full mx-auto"
											src="https://www.ibp.edu.pe/img/egresados.png"
											alt="información de egresados"
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
											className="flex justify-center items-center p-3 mt-4 text-blue-50 bg-blue-500 ring ring-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:ring-blue-500 transition-all"
											href="/cuestionario"
										>
											Registrate
										</a>
									</div>
								</article>

								<article className="p-4 bg-gray-100 shadow-md lg:px-8">
									<div className="h-40">
										<img
											className="h-full mx-auto"
											src="https://www.ibp.edu.pe/svg/egresados.svg"
											alt="encuentro de egresados"
										/>
									</div>

									<div className="text-center py-4">
										<h2 className="text-2xl font-bold mb-4">
											Encuentro de egresados
										</h2>
										<p>
											Te invitamos a participar en el encuentro de egresados IBP
											2023-II
										</p>

										<a
											className="flex justify-center items-center p-3 mt-4 text-blue-50 bg-blue-500 ring ring-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:ring-blue-500 transition-all"
											href="/cuestionario"
										>
											Actualiza
										</a>
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
							<div className="sticky top-24 py-4 text-center bg-slate-100 shadow-md">
								<div className="p-4">
									<h3 className="text-2xl font-bold mb-4 lg:text-3xl">
										Escríbenos
									</h3>
									<p>Si deseas información o tienes una consulta, escríbenos</p>
								</div>

								<article className="p-4">
									<div className="text-blue-500">
										<span className="flex justify-center items-center">
											<svg className="block w-32 h-32 text-current fill-current">
												<use href="/assets/icons/icons.svg#job" />
											</svg>
										</span>
									</div>

									<article className="py-4">
										<h4 className="font-semibold mb-2">Comunicate</h4>
										<div className="text-sm text-blue-50 bg-blue-500 shadow-md rounded-lg hover:bg-blue-600 transition-colors">
											<a
												className="flex justify-center items-center gap-2 p-3"
												href="mailto:pamela.culqui@bpastor.edu.pe"
											>
												<span className="flex justify-center items-center">
													<svg className="block w-5 h-5 text-current fill-current">
														<use href="/assets/icons/icons.svg#mail" />
													</svg>
												</span>

												<span>pamela.culqui@bpastor.edu.pe</span>
											</a>
										</div>
									</article>
								</article>

								<div className="text-center bg-slate-100 py-4">
									<p className="font-semibold mb-4">Nuestras redes</p>

									<div className="flex justify-center items-center flex-wrap gap-4">
										<a
											href="https://m.facebook.com/people/CEFE-IBP/100057463237906/"
											className="block text-blue-600"
											target="_blank"
										>
											<span className="flex justify-center items-center">
												<svg className="block w-10 h-10 text-current fill-current">
													<use href="/assets/icons/icons.svg#facebook"></use>
												</svg>
											</span>
											<span className="hidden">Facebook</span>
										</a>

										<a href="#" className="block text-pink-500" target="_blank">
											<span className="flex justify-center items-center">
												<svg className="block w-10 h-10 text-current fill-current">
													<use href="/assets/icons/icons.svg#instagram"></use>
												</svg>
											</span>
											<span className="hidden">instagram</span>
										</a>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
