export default function CareerSection() {
	return (
		<section id="/#cursos" className="max-w-6xl mx-auto py-16">
			<header className="mb-8">
				<h3 className="font-bold text-2xl lg:text-4xl">Nuestras carreras</h3>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<article className="overflow-hidden rounded-md scale-100 hover:scale-95 transition-transform">
					<a href="sistemas" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/40 to-blue-500/20">
							<h4 className="text-xl font-bold text-slate-100 capitalize lg:text-2xl">
								Desarrollo de Sistemas
							</h4>
						</div>

						<img
							src="https://www.ibp.edu.pe/img/dsiiccono.png"
							alt="Desarrollo de sistemas"
						/>
					</a>
				</article>

				<article className="overflow-hidden rounded-md scale-100 hover:scale-95 transition-transform">
					<a href="/contabilidad" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/80 to-red-500/40">
							<h4 className="text-xl font-bold text-slate-100 capitalize lg:text-2xl">
								Contabilidad
							</h4>
						</div>

						<img
							src="https://www.ibp.edu.pe/img/conticono.png"
							alt="Contabilidad"
						/>
					</a>
				</article>

				<article className="overflow-hidden rounded-md scale-100 hover:scale-95 transition-transform">
					<a href="/administracion" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/80 to-green-500/40">
							<h4 className="text-xl font-bold text-slate-100 capitalize lg:text-2xl">
								Administración de empresa
							</h4>
						</div>

						<img
							src="https://www.ibp.edu.pe/img/admiicono.png"
							alt="Administración de empresa"
						/>
					</a>
				</article>
			</div>
		</section>
	);
}
