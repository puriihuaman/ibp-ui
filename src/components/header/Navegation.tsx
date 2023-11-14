import SvgIcon from "@components/SvgIcon";
import { Menu, Sublink } from "@interfaces/menu";
import { menuList } from "@services/menu-list";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navegation({ isOpen }: { isOpen: boolean }) {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

	return (
		<nav
			className={`absolute top-full left-0 z-20 w-full px-4 transition-all duration-700 lg:relative lg:top-0 lg:px-0 lg:w-4/6 ${
				isOpen ? "min-h-max opacity-100 visible" : "h-0 opacity-0 invisible"
			}`}
		>
			<ul className="p-4 bg-slate-50 border border-slate-200 shadow-md rounded-md lg:flex lg:items-center lg:gap-2 lg:p-0 lg:bg-transparent lg:shadow-none lg:border-none dark:bg-slate-950 dark:border-slate-800 dark:lg:bg-transparent">
				{menuList.map((item: Menu) => (
					<li key={item.id}>
						{item.sublinks.length < 1 ? (
							<NavLink
								to={item.path}
								className={({ isActive }): string =>
									`flex lg:justify-center items-center p-4 whitespace-nowrap text-sm capitalize hover:text-ibp-500 hover:bg-slate-100 transition-colors lg:hover:bg-transparent lg:p-3 dark:hover:bg-slate-900/50 dark:lg:hover:bg-transparent ${
										isActive
											? "font-semibold text-ibp-600"
											: "text-slate-800 dark:text-slate-50"
									}`
								}
							>
								{item.title}
							</NavLink>
						) : (
							<details
								className="flex w-full lg:justify-center gap-x-1.5 capitalize rounded-md overflow-hidden text-slate-800 select-none cursor-pointer transition-all duration-700 lg:rounded-none dark:text-slate-50"
								onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
							>
								<summary className="text-sm inline-flex justify-between gap-2 w-full p-4 list-none lg:p-3">
									<span>{item?.title}</span>

									<SvgIcon iconID="arrow-linear-down" classes="w-5 h-5" />
								</summary>

								{item.sublinks.length > 0 && (
									<ul
										className={`w-full pl-4 overflow-hidden lg:py-4 lg:absolute lg:top-full lg:z-10 lg:mt-2 lg:w-56 lg:bg-slate-50 lg:shadow-md lg:rounded-md lg:border lg:border-slate-200 dark:bg-slate-900 dark:border-slate-800`}
									>
										{item.sublinks.map((sublink: Sublink) => (
											<li key={sublink.id} role="none">
												<NavLink
													to={sublink.path}
													className={({ isActive }): string =>
														`flex p-4 text-sm font-normal hover:text-ibp-500 hover:bg-slate-100 lg:p-2 lg:hover:bg-transparent lg:bg-transparent transition-colors dark:hover:bg-slate-900 dark:hover:text-ibp-500 ${
															isActive
																? "font-semibold text-ibp-600 dark:text-ibp-600"
																: "text-slate-700 dark:text-slate-100"
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
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
