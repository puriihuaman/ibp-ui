import { useEffect, useState } from "react";
import Logo from "./Logo";
import Contact from "./Contact";
import Navegation from "./Navegation";
import SvgIcon from "@components/SvgIcon";

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
		<header className="sticky top-0 z-50 px-4 py-2 border-b border-slate-200 shadow bg-slate-50/95 dark:bg-slate-950/95 dark:border-slate-800 transition-all">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center gap-4">
					{/* logo */}
					<Logo />

					{/* nav */}
					<Navegation isOpen={isOpen} />

					{/* Button */}
					<button
						className="order-2 text-slate-800 lg:hidden dark:text-slate-50"
						onClick={handleOpen}
					>
						<SvgIcon iconID="menu-alt-right-lienar" classes="w-10 h-8" />
					</button>

					{/* contacto */}
					<Contact />
				</div>
			</div>
		</header>
	);
}
