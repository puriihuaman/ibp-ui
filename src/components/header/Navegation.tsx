import { Menu, Sublink } from "@interfaces/menu";
import { menuList } from "@services/menu-list";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navegation({ isOpen }: { isOpen: boolean }) {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

	return (
		<nav
			className={`absolute top-full left-0 z-20 w-full px-4  text-slate-900 transition-all duration-700 lg:relative lg:top-0 lg:px-0 lg:w-4/6 ${
				isOpen ? "min-h-max opacity-100 visible" : "h-0 opacity-0 invisible"
			}`}
		>
			<ul className="p-4  bg-slate-200 shadow-lg rounded-md lg:flex lg:items-center lg:gap-2 lg:p-0 lg:bg-transparent lg:shadow-none">
				{menuList.map((item: Menu) => (
					<li key={item.id}>
						{item.sublinks.length < 1 ? (
							<NavLink
								to={item.path}
								className={({ isActive }): string =>
									`flex lg:justify-center items-center p-4 whitespace-nowrap text-sm capitalize hover:text-blue-500 hover:bg-slate-300 transition-colors lg:hover:bg-transparent lg:p-3 ${
										isActive ? "font-semibold text-blue-500" : ""
									}`
								}
							>
								{item.title}
							</NavLink>
						) : (
							<details
								className="flex w-full lg:justify-center gap-x-1.5 capitalize rounded-md overflow-hidden bg-slate text-slate-900 select-none cursor-pointer transition-all duration-700 lg:rounded-none"
								onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
							>
								<summary className="text-sm inline-flex justify-between gap-2 w-full p-4 list-none lg:p-3">
									<span>{item?.title}</span>

									<span
										slot="rotate-90"
										className={`flex justify-center items-center transition-transform rotate-90`}
									>
										<svg className="block w-5 h-5 text-current fill-current">
											<use href="/assets/icons/icons.svg#arrow-right"></use>
										</svg>
									</span>
								</summary>

								{item.sublinks.length > 0 && (
									<ul
										className={`lg:absolute lg:top-full z-10 w-full lg:mt-2 lg:w-56 origin-top-right bg-transparent p-4 pr-0 lg:bg-slate-200 lg:shadow-lg lg:ring-1 lg:ring-slate-200 ring-opacity-5 overflow-hidden focus:outline-none lg:rounded-md`}
									>
										{item.sublinks.map((sublink: Sublink) => (
											<li key={sublink.id} role="none">
												<NavLink
													to={sublink.path}
													className={({ isActive }): string =>
														`flex p-4 text-sm text-slate-800 capitalize font-normal hover:text-blue-600 hover:bg-slate-300 lg:p-2 lg:hover:bg-transparent lg:bg-transparent transition-colors ${
															isActive ? "font-semibold text-blue-500" : ""
														}`
													}
												>
													{sublink.title}
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</details>
							// <div
							// 	className="inline-flex w-full lg:justify-center gap-x-1.5 text-sm capitalize rounded-md bg-slate px-3 py-2 text-slate-900 cursor-pointer"
							// 	id="menu-button"
							// 	aria-expanded={isSubmenuOpen}
							// 	aria-haspopup={isSubmenuOpen}
							// 	onClick={handleSubmenuOpen}
							// >
							// 	<span>{item?.title}</span>
							// 	<span
							// 		className={`flex justify-center items-center transition-transform ${
							// 			isSubmenuOpen ? "rotate-90" : "rotate-0"
							// 		}`}
							// 	>
							// 		<svg className="block w-5 h-5 text-current fill-current">
							// 			<use href="/assets/icons/icons.svg#arrow-right"></use>
							// 		</svg>
							// 	</span>
							// </div>
						)}

						{/* {item.sublinks.length > 0 && (
							<ul
								ref={subMenuRef}
								className={`lg:absolute right-0 z-10 lg:mt-2 w-56 origin-top-right bg-transparent lg:bg-slate-200 lg:shadow-lg lg:ring-1 lg:ring-slate-200 ring-opacity-5 overflow-hidden focus:outline-none lg:rounded-md ${
									isSubmenuOpen
										? "visible opactity-100"
										: "h-0 invisible opactity-0"
								}`}
							>
								{item.sublinks.map((sublink: Sublink) => (
									<li key={sublink.id} role="none">
										<NavLink
											to={sublink.path}
											className={({ isActive }): string =>
												`flex pr-4 pl-6 py-2 text-sm text-slate-800 lg:bg-slate-100 capitalize hover:text-blue-600 transition-colors ${
													isActive ? "font-semibold text-blue-500" : ""
												}`
											}
										>
											{sublink.title}
										</NavLink>
									</li>
								))}
							</ul>
						)} */}
					</li>
				))}
			</ul>
		</nav>
	);
}
