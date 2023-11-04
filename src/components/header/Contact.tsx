export default function Contact() {
	return (
		<div className="flex items-center gap-2">
			<a
				className="flex justify-center items-center animate-bounce"
				href="https://api.whatsapp.com/send?phone=928754115&text=Hola%20!!,%20Quisiera%20informaci%C3%B3n%20sobre%20sus%20carreras%20..."
			>
				<span className="flex justify-center items-center text-green-500">
					<svg className="block w-8 h-8 text-current fill-current">
						<use href="/assets/icons/icons.svg#whatsapp"></use>
					</svg>
				</span>
			</a>

			<a
				className="flex justify-center items-center w-8 h-8 text-slate-900 animate-bounce"
				href="/edusys"
			>
				<img
					className="aspect-square"
					src="https://www.ibp.edu.pe/img/edusys.png"
					alt="Edusys"
				/>
			</a>
		</div>
	);
}
