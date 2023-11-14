import SvgIcon from "@components/SvgIcon";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Banner from "@features/Banner";
import MainComponent from "@features/MainComponent";

export default function Blog() {
	return (
		<>
			<Banner
				srcImage={"bg-[url('/assets/images/bienestudianttil.png')]"}
				title="somos IBP"
			/>

			<Header />

			<MainComponent>
				<section className="max-w-6xl mx-auto py-8 px-4">
					<div className="flex flex-col lg:flex-row gap-8">
						<section>
							<article>
								<p>
									Uno de los objetivos del Padre Pedro Martínez, Promotor de la
									comunidad educativa “El Buen Pastor” en la última década del
									siglo XX, fue la de abrir una Institución de Educación
									Superior, que diera cobertura a los jóvenes con menores
									recursos económicos, para tener una Carrera Tecnológica en
									Lima Norte, basada en una formación académica de calidad con
									los principios cristianos y católicos. Es por eso que, a
									mediados de 1992, los profesores César Cortés y Zunuel Ames
									Portella bajo el auspicio de la Promotoría iniciaron las
									actividades preparatorias para realizar un estudio con el fin
									de establecer un Instituto Superior, líder en Lima Norte.
								</p>
							</article>

							<div className="py-8 flex flex-col lg:flex-row gap-8">
								<article className="p-4 text-center bg-slate-50 border border-slate-200 shadow lg:p-8 lg:text-left dark:bg-slate-900 dark:border-slate-800 transition-all">
									<h2 className="text-2xl text-center font-bold lg:text-3xl">
										Misión
									</h2>

									<div className="pt-4">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Optio iste est assumenda laudantium rerum illo quam
											veritatis ea saepe consequuntur quod facere beatae eaque
											aliquam, fuga molestias qui, debitis officiis unde
											deserunt necessitatibus sunt suscipit! Natus mollitia quo
											doloremque nemo excepturi aut, ducimus vel tenetur tempora
											reprehenderit perferendis deserunt maxime cumque ex ipsum
											aperiam eligendi similique ea quidem quasi dolorum
											necessitatibus corrupti sequi dicta. Animi fuga
											perferendis fugit. Cumque nemo optio perferendis,
											molestias, non ipsum maiores harum aliquam repellendus
											illo voluptas beatae labore exercitationem nostrum quas
											quis voluptatibus corporis vel iure error, ipsa assumenda
											possimus soluta. Corporis a eligendi repellat.
										</p>
									</div>
								</article>

								<article className="p-4 text-center bg-slate-50 border border-slate-200 shadow lg:p-8 lg:text-left dark:bg-slate-900 dark:border-slate-800 transition-all">
									<h2 className="text-2xl text-center font-bold lg:text-3xl">
										Visión
									</h2>

									<div className="pt-4">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Optio iste est assumenda laudantium rerum illo quam
											veritatis ea saepe consequuntur quod facere beatae eaque
											aliquam, fuga molestias qui, debitis officiis unde
											deserunt necessitatibus sunt suscipit! Natus mollitia quo
											doloremque nemo excepturi aut, ducimus vel tenetur tempora
											reprehenderit perferendis deserunt maxime cumque ex ipsum
											aperiam eligendi similique ea quidem quasi dolorum
											necessitatibus corrupti sequi dicta. Animi fuga
											perferendis fugit. Cumque nemo optio perferendis,
											molestias, non ipsum maiores harum aliquam repellendus
											illo voluptas beatae labore exercitationem nostrum quas
											quis voluptatibus corporis vel iure error, ipsa assumenda
											possimus soluta. Corporis a eligendi repellat.
										</p>
									</div>
								</article>
							</div>
						</section>

						<aside>
							<article className="p-8 text-center bg-slate-50 border shadow mb-8 dark:bg-slate-900 dark:border-slate-800 transition-all">
								<div className="w-24 h-24 flex justify-center items-center mx-auto p-3 mb-4 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
									<SvgIcon iconID="medal" classes="w-16 h-16" />
								</div>

								<div className="mt-4">
									<a
										className="w-full block py-3 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md whitespace-nowrap hover:bg-ibp-600 hover:border-ibp-600 transition-all"
										href="https://www.ibp.edu.pe/doc/PERIDODO%20DE%20VIGENCIA%20DEL%20LICENCIAMIENTO-%20PROGRAMAS.pdf"
										target="_blank"
									>
										Vigencia del Licenciamento
									</a>
								</div>
							</article>

							<article className="p-8 text-center bg-slate-50 border shadow mb-8 dark:bg-slate-900 dark:border-slate-800 transition-all">
								<div className="w-24 h-24 flex justify-center items-center mx-auto p-3 text-ibp-500 bg-ibp-50 rounded-md dark:bg-ibp-900/20 transition-colors">
									<SvgIcon iconID="shapes" classes="w-16 h-16" />
								</div>

								<div className="mt-4">
									<a
										className="w-full block py-3 px-4 text-sm text-slate-50 bg-ibp-500 border-2 border-ibp-500 rounded-md whitespace-nowrap hover:bg-ibp-600 hover:border-ibp-600 transition-all"
										href="https://www.ibp.edu.pe/doc/REGLAMENTOINSTITUCIONAL.pdf"
										target="_blank"
									>
										Reglamento Institucional
									</a>
								</div>
							</article>
						</aside>
					</div>
				</section>
			</MainComponent>

			<Footer />
		</>
	);
}
