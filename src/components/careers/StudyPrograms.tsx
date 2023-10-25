export default function StudyPrograms() {
	return (
		<section className="max-w-6xl mx-auto px-4 py-16">
			<header className="mb-4">
				<h3 className="font-bold text-3xl lg:text-4xl">Programas de studios</h3>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<article className="overflow-hidden rounded-md scale-100 hover:scale-95 transition-transform">
					<a href="dsi.html" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/40 to-blue-500/20">
							<h4 className="text-2xl font-bold text-slate-100 capitalize">
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
					<a href="cont.html" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/80 to-red-500/40">
							<h4 className="text-2xl font-bold text-slate-100 capitalize">
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
					<a href="adm.html" className="block relative">
						<div className="absolute w-full h-full p-4 bg-gradient-to-b from-slate-950/80 to-green-500/40">
							<h4 className="text-2xl font-bold text-slate-100 capitalize">
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
