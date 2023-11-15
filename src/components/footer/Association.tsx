export default function Association() {
	return (
		<div className="flex-1">
			<div className="text-center mb-2">
				<h4 className="text-xl uppercase">FORMAMOS PARTE DE LA RED</h4>
			</div>

			<div className="flex flex-col justify-center items-center gap-4">
				<div className="w-24 h-24">
					<img
						className="aspect-square"
						src="/assets/images/cied.svg"
						alt="CIEDC - Consorcio de Instituciones Educativas de la Diócesis de Carabayllo"
					/>
				</div>

				<div className="w-24 h-24">
					<img
						className="aspect-square"
						src="/assets/images/ced.svg"
						alt="Seamos uno para que el mundo crear"
					/>
				</div>
			</div>
		</div>
	);
}
