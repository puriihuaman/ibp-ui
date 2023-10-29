export default function Reclamation() {
	return (
		<div className="flex-1 flex flex-col gap-4">
			<div className="border-b">
				<a
					className="block w-32 mx-auto"
					href="https://docs.google.com/forms/d/e/1FAIpQLSeelpoHSATcdVo0sA98ltkTn_HxREIYBlbjLYpfVd2PWeqEoA/viewform"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						className="aspect-video"
						src="https://www.ibp.edu.pe/img/libro_reclamacion.png"
						alt="Libro de reclamaciones"
					/>
				</a>
			</div>

			<div className="text-center">
				<h4 className="text-xl mb-2 uppercase">Contactos</h4>

				<div className="flex justify-center items-center flex-col gap-4">
					<a
						className="flex flex-col items-center gap-2 md:flex-row"
						href="https://api.whatsapp.com/send?phone=928754115&text=Hola%20!!%20tengo%20dudas%20sobre%20...."
						rel="noopener noreferrer"
						target="_blank"
					>
						<span className="flex justify-center items-center text-green-500">
							<svg className="block w-8 h-8 text-current fill-current">
								<use href="/assets/icons/icons.svg#whatsapp"></use>
							</svg>
						</span>
						<span>928754115</span>
					</a>

					<a
						className="flex flex-col items-center gap-2 md:flex-row"
						href="mailto:informesibp@bpastor.edu.pe"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span className="flex justify-center items-center">
							<svg className="block w-8 h-8 text-current fill-current">
								<use href="/assets/icons/icons.svg#mail"></use>
							</svg>
						</span>
						<span>Escribenos</span>
					</a>

					<a
						className="flex flex-col items-center gap-2 md:flex-row"
						href="https://bit.ly/CampusIBP"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span className="flex justify-center items-center">
							<svg className="block w-8 h-8 text-current fill-current">
								<use href="/assets/icons/icons.svg#googlemaps"></use>
							</svg>
						</span>

						<span>Av. El Trébol 7194 Urb. El Trébol, Los Olivos.</span>
					</a>
				</div>
			</div>
		</div>
	);
}
