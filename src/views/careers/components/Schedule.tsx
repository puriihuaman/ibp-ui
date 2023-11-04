export default function Schedule() {
	return (
		<div className="text-center py-8 lg:text-left">
			<h4 className="font-bold text-2xl mb-4 lg:text-3xl">Horario</h4>

			<div className="bg-gray-100 shadow-md rounded-md overflow-hidden">
				<div className="grid grid-cols-4 py-3 font-semibold border-b border-gray-200 shadow">
					<div>
						<span></span>
					</div>
					<div className="flex justify-center items-center">
						<span>Turnos</span>
					</div>

					<div className="flex justify-center items-center">
						<span>Frecuencia</span>
					</div>

					<div className="flex justify-center items-center">
						<span>Lugar</span>
					</div>
				</div>

				<div className="text-gray-600">
					<div className="grid grid-cols-4 py-3">
						<div>
							<span className="flex justify-center items-center text-yellow-500">
								<svg className="block w-10 h-10">
									<use href="/assets/icons/icons.svg#sun"></use>
								</svg>
							</span>
						</div>
						<div className="flex justify-center items-center">
							<span>8:00 - 13:00</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lunes - Viernes</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lima</span>
						</div>
					</div>

					<div className="grid grid-cols-4 py-3">
						<div className="">
							<span className="flex justify-center items-center text-blue-500">
								<svg className="block w-10 h-10">
									<use href="/assets/icons/icons.svg#moon"></use>
								</svg>
							</span>
						</div>

						<div className="flex justify-center items-center">
							<span className="">18:30 - 22:30</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lunes - Viernes</span>
						</div>

						<div className="flex justify-center items-center">
							<span>Lima</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
