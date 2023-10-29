export default function Courses() {
	return (
		<section className="px-4 py-16 max-w-6xl mx-auto">
			<header className="mb-8">
				<h3 className="font-bold text-2xl lg:text-4xl">Nuestros Cursos</h3>
			</header>

			<div className="flex flex-col gap-8 sm:flex-row">
				<article className="max-w-60 max-h-60 overflow-hidden scale-100 shadow-md rounded-md hover:scale-95 transition-transform">
					<a
						href="#"
						className="block"
						title="Reforzamiento Contable y Tributario"
					>
						<img
							className="aspect-video object-cover"
							src="https://www.ibp.edu.pe/img/CC_CONTA.png"
							alt="Reforzamiento Contable y Tributario"
						/>
					</a>
				</article>

				<article className="max-w-60 max-h-60 overflow-hidden scale-100 shadow-md rounded-md hover:scale-95 transition-transform">
					<a href="#" className="block" title="Microsoft excel 356">
						<img
							className="aspect-video object-cover"
							src="https://www.ibp.edu.pe/img/CC_EXCEL.png"
							alt="Microsoft excel 356"
						/>
					</a>
				</article>

				<article className="max-w-60 max-h-60 overflow-hidden scale-100 shadow-md rounded-md hover:scale-95 transition-transform">
					<a href="#" className="block" title="Inglés básico - nivel 1">
						<img
							className="aspect-video object-cover"
							src="https://www.ibp.edu.pe/img/CC_INGLES.png"
							alt="Inglés básico - nivel 1"
						/>
					</a>
				</article>
			</div>
		</section>
	);
}
