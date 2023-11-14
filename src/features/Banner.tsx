export default function Banner({
	title,
	srcImage,
	children,
	transparency = false,
}: {
	title?: string;
	srcImage: string;
	children?: JSX.Element;
	transparency?: boolean;
}) {
	return (
		<div
			className={`relative overflow-hidden ${srcImage} bg-no-repeat bg-center bg-cover`}
		>
			<div
				className={`flex justify-center items-center flex-col min-h-[280px] md:min-h-[360px] lg:min-h-[420px] max-w-5xl mx-auto px-4 py-8 after:content-[''] after:absolute after:w-full after:h-full ${
					transparency
						? "after:bg-gradient-to-r from-ibp-500/10 to-slate-950/80"
						: ""
				}`}
			>
				{title && (
					<p className="relative z-10 text-slate-300 uppercase font-bold mb-auto mr-auto">
						Estudia con los mejores
					</p>
				)}

				<div className="relative z-10 flex justify-center items-center flex-col gap-4 p-4 mb-4">
					<h1 className="text-slate-50 text-center text-2xl lg:text-5xl font-bold">
						{title}
					</h1>

					{children}
				</div>

				{title && (
					<div className="relative z-10 mt-auto ml-auto bg-ibp-500 p-2 text-xs lg:text-sm">
						<p className="text-slate-50">
							<strong>INICIO </strong>
							04 de setiembre
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
