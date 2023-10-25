export default function StudentStatistics() {
	return (
		<section className="max-w-6xl mx-auto px-4 py-16">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<article className="p-4 text-slate-900 bg-slate-100 shadow-md rounded-md">
					<div className="text-xl font-bold text-center md:text-2xl">
						<h3>80</h3>
						<h3>Ingresantes 2023</h3>
					</div>

					<div className="w-40 h-40 mx-auto p-2">
						<img
							className="aspect-square"
							src="https://www.ibp.edu.pe/img/ingresantes.png"
							alt="Ingresantes"
						/>
					</div>
				</article>

				<article className="p-4 text-slate-900 bg-slate-100 shadow-md rounded-md">
					<div className="text-xl font-bold text-center md:text-2xl">
						<h3>271</h3>
						<h3>Matriculados 2023</h3>
					</div>

					<div className="w-40 h-40 mx-auto p-2">
						<img
							className="aspect-square"
							src="https://www.ibp.edu.pe/img/matriculados.png"
							alt="Matriculados"
						/>
					</div>
				</article>

				<article className="p-4 text-slate-900 bg-slate-100 shadow-md rounded-md">
					<div className="text-xl font-bold text-center md:text-2xl">
						<h3>25</h3>
						<h3>Egresados 2023</h3>
					</div>

					<div className="w-40 h-40 mx-auto p-2">
						<img
							className="aspect-square"
							src="https://www.ibp.edu.pe/svg/6.svg"
							alt="Egresados"
						/>
					</div>
				</article>

				<article className="p-4 text-slate-900 bg-slate-100 shadow-md rounded-md">
					<div className="text-xl font-bold text-center md:text-2xl">
						<h3>100</h3>
						<h3>Becados 2023</h3>
					</div>

					<div className="w-40 h-40 mx-auto p-2">
						<img
							className="aspect-square"
							src="https://www.ibp.edu.pe/img/becados.png"
							alt="Becados"
						/>
					</div>
				</article>
			</div>
		</section>
	);
}
