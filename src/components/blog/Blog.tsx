export default function Blog() {
	return (
		<main className="px-4">
			<section></section>

			<aside>
				<header>
					<h3 className="font-bold text-xl">Escríbenos</h3>

					<p>Si deseas información o tienes una consulta , escríbenos</p>
				</header>

				<div>
					<article className="p-8 text-center bg-slate-100 shadow-md">
						<div className="w-40 h-40 mx-auto">
							<img
								className="aspect-square"
								src="https://www.ibp.edu.pe/svg/empleo.svg"
								alt=""
							/>
						</div>

						<div>
							<h4 className="font-bold mb-2">Comunícate con:</h4>
							<a href="mailto:pamela.culqui@bpastor.edu.pe">
								pamela.culqui@bpastor.edu.pe
							</a>
						</div>
					</article>

					<div className="text-center bg-slate-100">
						<p className="font-semibold mb-4">Nuestras redes</p>

						<div className="flex justify-center items-center flex-wrap gap-4">
							<a href="#" className="block text-blue-600" target="_blank">
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
		</main>
	);
}
