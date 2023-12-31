export default function Agreements() {
	return (
		<section className="px-4 max-w-6xl mx-auto py-8">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="flex-1 py-8">
					<p className="text-xl text-center mb-4 md:text-2xl">
						Formamos parte de la{" "}
						<span>red educativas más grande de lima norte</span>{" "}
					</p>

					<div className="flex flex-col flex-wrap sm:flex-row gap-4">
						<article className="p-4 w-32 h-32 mx-auto">
							<img
								className="aspect-square"
								src="/assets/images/bup.png"
								alt="C.E.P. DIOCESANO - EL BUEN PASTOR"
							/>
						</article>

						<article className="p-4 w-32 h-32 mx-auto">
							<img
								className="aspect-square"
								src="/assets/images/dio.png"
								alt="dio"
							/>
						</article>

						<article className="p-4 w-32 h-32 mx-auto">
							<img
								className="aspect-square"
								src="/assets/images/cied.png"
								alt="cied"
							/>
						</article>
					</div>
				</div>

				<article className="flex-1 py-8">
					<h3 className="text-2xl text-center font-bold mb-4">
						Nuestros Convenios
					</h3>

					<div className="w-44 mx-auto md:w-60">
						<img
							className="aspect-video object-cover mix-blend-darken dark:mix-blend-screen"
							src="/assets/images/ucss.png"
							alt="ucss"
						/>
					</div>
				</article>
			</div>
		</section>
	);
}
