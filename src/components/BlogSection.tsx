export default function BlogSection() {
	return (
		<section
			className="absolute w-full h-full bg-[url(https://www.ibp.edu.pe/img/blog.png)] bg-center bg-no-repeat bg-cover bg-fixed after:content[''] after:absolute after:top-0 after:w-full after:h-full after:bg-slate-900/40"
			style={{ clipPath: "polygon(100% 100%, 0% 100%, 100% 0)" }}
		>
			<div className="relative z-10 flex justify-end items-end flex-col gap-8 px-4 pr-8 w-full h-full max-w-6xl mx-auto lg:pr-24">
				<header className="mt-auto">
					<h3 className="font-bold text-2xl text-slate-50 lg:text-4xl">
						Nuestro blog
					</h3>
				</header>

				<div className="text-center mb-16">
					<a
						className="inline-flex justify-center items-center px-8 py-4 text-sm uppercase text-slate-50 tracking-widest bg-ibp-500 rounded-md shadow-md hover:text-ibp-500 hover:bg-slate-100"
						href="/blog/somos-ibp"
						rel="noopener noreferrer"
						target="_self"
					>
						Visitanos
					</a>
				</div>
			</div>
		</section>
	);
}
