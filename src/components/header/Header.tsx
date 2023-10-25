import { useEffect, useState } from "react";
import Logo from "./Logo";
import Contact from "./Contact";
import Navegation from "./Navegation";

const MEDIA_QUERY = 1024;
export default function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(
		window.innerWidth >= MEDIA_QUERY
	);

	const handleOpen = (): void => {
		setIsOpen(!isOpen);
	};

	useEffect((): (() => void) => {
		const changeStateOpen = (): void =>
			setIsOpen(window.innerWidth >= MEDIA_QUERY ? true : false);

		window.addEventListener("resize", changeStateOpen);

		return (): void => {
			window.removeEventListener("resize", changeStateOpen);
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 z-50 px-4 py-4 shadow-md bg-slate-100">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center gap-4">
					{/* logo */}
					<Logo />

					{/* nav */}
					<Navegation isOpen={isOpen} />

					{/* Button */}
					<button
						className="order-2 text-slate-900 lg:hidden"
						onClick={handleOpen}
					>
						<span className="flex justify-center items-center">
							<svg className="block w-6 h-6">
								<use href="/assets/icons/icons.svg#menu"></use>
							</svg>
						</span>
					</button>

					{/* contacto */}
					<Contact />
				</div>
			</div>
		</header>
	);
}
