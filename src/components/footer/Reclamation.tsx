import SvgIcon from "@components/SvgIcon";

export default function Reclamation() {
	return (
		<div className="flex-1 flex flex-col gap-4">
			<a
				className="inline-flex justify-center items-center gap-2 pb-2 border-b border-slate-200 hover:text-ibp-500 dark:border-slate-800 transition-colors"
				href="https://docs.google.com/forms/d/e/1FAIpQLSeelpoHSATcdVo0sA98ltkTn_HxREIYBlbjLYpfVd2PWeqEoA/viewform"
				rel="noopener noreferrer"
				target="_blank"
			>
				<SvgIcon iconID="book-linear" classes="w-7 h-7" />
				Reclamaciones
			</a>

			<div className="text-center">
				<h4 className="font-bold mb-4 uppercase">Contactos</h4>

				<div className="flex justify-centers sitems-center flex-col gap-4">
					<a
						className="flex justify-centers items-center gap-2 hover:text-green-500"
						href="https://api.whatsapp.com/send?phone=928754115&text=Hola%20!!%20tengo%20dudas%20sobre%20...."
						rel="noopener noreferrer"
						target="_blank"
					>
						<SvgIcon
							iconID="whatsapp-linear"
							classes="w-6 h-6 text-green-500"
						/>

						<span>928754115</span>
					</a>

					<a
						className="flex justify-centers items-center gap-2 hover:text-ibp-500"
						href="mailto:informesibp@bpastor.edu.pe"
						rel="noopener noreferrer"
						target="_blank"
					>
						<SvgIcon iconID="mail" classes="w-6 h-6" />

						<span>Escribenos</span>
					</a>

					<a
						className="flex justify-centers justify-centers items-center gap-2 flex-wrap"
						href="https://bit.ly/CampusIBP"
						rel="noopener noreferrer"
						target="_blank"
					>
						<SvgIcon iconID="maps" classes="w-6 h-6" />

						<span>Av. El Trébol 7194 Urb. El Trébol, Los Olivos.</span>
					</a>
				</div>
			</div>
		</div>
	);
}
