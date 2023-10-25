export default function BlogSection() {
	return (
		<section className="bg-[url(https://www.ibp.edu.pe/img/blog.png)] bg-center bg-no-repeat bg-cover bg-fixed py-8">
			<div className="px-4 py-16 max-w-6xl mx-auto">
				<header>
					<h3 className="font-bold text-3xl lg:text-4xl">Nuestro blog</h3>
				</header>

				<div className="text-center py-16">
					<a
						className="inline-flex justify-center items-center px-8 py-6 text-2xl uppercase text-slate-100 tracking-widest bg-blue-500 rounded-md shadow-md hover:text-blue-500 hover:bg-slate-100"
						href="/blog"
						rel="noopener noreferrer"
						target="_blank"
					>
						Visitanos
					</a>
				</div>
			</div>
		</section>
	);
}
