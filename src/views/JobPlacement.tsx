import SvgIcon from "@components/SvgIcon";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";
import InscriptionForm from "@features/InscriptionForm";
import MainComponent from "@features/MainComponent";
import Modal from "@features/Modal";
import { useModal } from "@hooks/useModal";

export default function JobPlacement() {
	const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

	return (
		<>
			<Banner srcImage={"bg-[url('/assets/images/insercionf.png')]"} />
			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8 px-4">
					<div className="flex flex-col lg:flex-row gap-8">
						<section>
							<article>
								<p>
									Queremos coadyuvar a que nuestros estudiantes y egresados, se
									vinculen con el mercado laboral y el sector productivo. Dar la
									oportunidad laboral a través de la bolsa de trabajo, y
									ayudarles a desarrollar económicamente.
								</p>
							</article>

							<div className="grid sm:grid-cols-2 gap-4 py-16">
								<article className="p-6 flex flex-col gap-4 text-center bg-slate-50 border border-slate-200 shadow dark:bg-slate-900 dark:border-slate-800 transition-colors">
									<div className="w-20 h-20 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="job" classes="w-10 h-10 text-ibp-500" />
									</div>

									<div>
										<h2 className="font-bold text-xl mb-4">Bolsa de Trabajo</h2>
										<p>
											Conoce las oportunidades laborales que tenemos para ti.
										</p>
									</div>

									<footer className="mt-auto">
										<a
											className="block text-sm py-3 px-4 whitespace-nowrap text-center text-slate-50 bg-ibp-500 border border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											href="https://ibp.edu.pe/bolsalaboral/"
											target="_blank"
										>
											Bolsa de trabajos
										</a>
									</footer>
								</article>

								<article className="p-6 flex flex-col gap-4 text-center bg-slate-50 border border-slate-200 shadow dark:bg-slate-900 dark:border-slate-800 transition-colors">
									<div className="w-20 h-20 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon
											iconID="job-offer"
											classes="w-10 h-10 text-ibp-500"
										/>
									</div>

									<div>
										<h2 className="font-bold text-xl mb-4">
											Publica tu oferta laboral
										</h2>
										<p>
											Si eres empresa o persona natural recluta a los mejores
											talentos con nosotros.
										</p>
									</div>

									<footer className="mt-auto">
										<a
											className="block text-sm py-3 px-4 whitespace-nowrap text-center text-slate-50 bg-ibp-500 border border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											href="https://bit.ly/FICHAEMPRESAS"
											target="_blank"
										>
											Solo empresa
										</a>
									</footer>
								</article>

								<article className="p-6 flex flex-col gap-4 text-center bg-slate-50 border border-slate-200 shadow dark:bg-slate-900 dark:border-slate-800 transition-colors">
									<div className="w-20 h-20 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="users" classes="w-10 h-10 text-ibp-500" />
									</div>

									<div>
										<h2 className="font-bold text-xl mb-4">Red Alumno</h2>
										<p>
											Actualiza tus datos para la comunicación con nosotros.
										</p>
									</div>

									<footer className="mt-auto">
										<a
											className="block text-sm py-3 px-4 whitespace-nowrap text-center text-slate-50 bg-ibp-500 border border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											href="https://www.ibp.edu.pe/cuestionario/"
											target="_blank"
										>
											Actualizar tus datos
										</a>
									</footer>
								</article>

								<article className="p-6 flex flex-col gap-4 text-center bg-slate-50 border border-slate-200 shadow dark:bg-slate-900 dark:border-slate-800 transition-colors">
									<div className="w-20 h-20 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="cv" classes="w-10 h-10 text-ibp-500" />
									</div>

									<div>
										<h2 className="font-bold text-xl mb-4">Envianos tu CV</h2>
										<p>
											Si estás en búsqueda de trabajo puedes enviarnos tu cv
											para participar en ofertas laborales
										</p>
									</div>

									<footer className="mt-auto">
										<a
											className="block text-sm py-3 px-4 whitespace-nowrap text-center text-slate-50 bg-ibp-500 border border-ibp-500 rounded-md hover:bg-ibp-600 hover:border-ibp-600 transition-all"
											href="mailto:oficinadeempleo@bpastor.edu.pe"
											target="_blank"
										>
											Enviar tu CV
										</a>
									</footer>
								</article>
							</div>

							<article>
								<h2 className="text-2xl font-bold mb-4">Asesorías</h2>
								<p>
									En empleabilidad IBP, hemos preparado el Programa de Inserción
									Laboral que se desarrollará durante el semestre 2023-II. Este
									programa brindará herramientas efectivas de orientación
									profesional para poder estar preparados en los procesos de
									reclutamiento y selección, y tener un tránsito adecuado entre
									la vida estudiantil y el mundo laboral. Aportará también a
									aquellos alumnos que estén próximos a buscar su primera oferta
									laboral
								</p>

								<div className="flex justify-between flex-col md:flex-row gap-8 py-4">
									<div className="flex-1 py-4">
										<details className="p-4 bg-slate-50 border border-slate-200 rounded-md cursor-pointer mb-4 select-none dark:bg-slate-900 dark:border-slate-800 transition-all">
											<summary>Sesión 1</summary>
											<div className="p-4">
												<p>Planeamiento de Vida Profesional</p>
											</div>
										</details>

										<details className="p-4 bg-slate-50 border border-slate-200 rounded-md cursor-pointer mb-4 select-none dark:bg-slate-900 dark:border-slate-800 transition-all">
											<summary>Sesión 2</summary>
											<div className="p-4">
												<p>Elaboración de CV</p>
											</div>
										</details>

										<details className="p-4 bg-slate-50 border border-slate-200 rounded-md cursor-pointer mb-4 select-none dark:bg-slate-900 dark:border-slate-800 transition-all">
											<summary>Sesión 3</summary>
											<div className="p-4">
												<p>Entrevista de Trabajo</p>
											</div>
										</details>
									</div>

									<div className="flex-1 flex justify-center items-center gap-6 py-4">
										<a
											className="block text-sm whitespace-nowrap py-3 px-4 text-slate-50 bg-ibp-500 border-2 border-ibp-500 hover:bg-ibp-600 hover:border-ibp-600 rounded-md transition-all"
											href="https://ibp.edu.pe/doc/Fomato%20-%20modelo%20de%20CV_estudiantes_IBP.docx"
										>
											Descargar CV
										</a>

										<button
											className="block text-sm py-3 px-4 text-slate-50 bg-ibp-500 border-2 border-ibp-500 hover:bg-ibp-600 hover:border-ibp-600 rounded-md transition-all"
											onClick={handleOpenModal}
										>
											Inscríbete
										</button>
									</div>
								</div>
							</article>
						</section>

						{/* Aside */}
						<aside>
							<div className="text-center p-4 bg-slate-50 shadow dark:bg-slate-900 transition-colors">
								<h2 className="text-2xl font-bold mb-4">Escríbenos</h2>
								<p>Si deseas información o tienes una consulta, escríbenos</p>

								<div className="py-4 mt-4 bg-slate-50 dark:bg-slate-900 transition-colors">
									<div className="w-16 h-16 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon iconID="job" classes="w-8 h-8 text-ibp-500" />
									</div>

									<div className="py-4">
										<h3 className="font-bold">
											Asesorías para nuestros alumnos
										</h3>

										<div className="mt-4">
											<a
												className="block p-3 text-sm text-slate-80 border border-slate-200 rounded-md hover:text-ibp-500 dark:border-slate-800 dark:hover:border-current transition-colors"
												href="mailto:oficinadeempleo@bpastor.edu.pe"
											>
												oficinadeempleo@bpastor.edu.pe
											</a>
										</div>
									</div>
								</div>

								<div className="py-4 mt-4 bg-slate-50 dark:bg-slate-900 transition-colors">
									<div className="w-16 h-16 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
										<SvgIcon
											iconID="corporate"
											classes="w-8 h-8 text-ibp-500"
										/>
									</div>

									<div className="py-4">
										<h3 className="font-bold">Solo empresas</h3>

										<div className="mt-4">
											<a
												className="block p-3 text-sm text-slate-80 border border-slate-200 rounded-md hover:text-ibp-500 dark:border-slate-800 dark:hover:border-current transition-colors"
												href="mailto:oficinadeempleo@bpastor.edu.pe"
											>
												oficinadeempleo@bpastor.edu.pe
											</a>
										</div>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</section>
			</MainComponent>

			<Footer />

			<Modal isOpenModal={isOpenModal} closeModal={handleCloseModal}>
				<InscriptionForm />
			</Modal>
		</>
	);
}
