import { useState } from "react";
import MainComponent from "./MainComponent";
import SvgIcon from "@components/SvgIcon";

export default function LoginEdusys() {
	const [visible, setVisible] = useState(false);

	const handleChangeVisible = () => setVisible(!visible);

	return (
		<MainComponent>
			<div className="h-screen">
				<div className="relative w-full h-full px-4 flex justify-center items-center">
					<div className="flex justify-center items-center bg-slate-50 overflow-hidden dark:bg-slate-950 transition-colors">
						<div className="relative z-10 max-w-[500px] w-full p-4 bg-slate-50 border rounded-md transition-colors dark:bg-slate-900 dark:border-slate-800">
							<div className="h-[100px]">
								<a href="/">
									<img
										className="h-full mx-auto"
										src="https://www.edusys.pe/istpelbuenpastor/50_upload/institucion/logo_1.jpg?random=20190826150913"
										alt="ibp"
									/>
								</a>
							</div>

							<form className="flex flex-col gap-4 p-4 md:p-8">
								<fieldset className="">
									<label
										htmlFor="email"
										className="inline-block text-sm mb-2 text-slate-600 dark:text-slate-50"
									>
										Correo electrónico
									</label>

									<div className="relative flex items-center">
										<span className="absolute left-0 p-2 text-slate-400">
											<SvgIcon iconID="email" classes="w-4 h-4" />
										</span>

										<input
											id="email"
											type="email"
											className="w-full px-10 py-3 outline-none text-slate-800 bg-slate-50 border border-dark-200 rounded-lg focus:border-ibp-500 placeholder:text-sm dark:text-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-ibp-500 transition-all"
											placeholder="Escribe tu correo electrónico"
											name="email"
										/>
									</div>
								</fieldset>

								<fieldset>
									<label
										htmlFor="password"
										className="inline-block text-sm mb-2 text-slate-600 dark:text-slate-50"
									>
										Contraseña
									</label>

									<div className="relative flex items-center">
										<span className="absolute left-0 p-2 p text-slate-400">
											<SvgIcon iconID="lock-close" classes="w-4 h-4" />
										</span>
										<input
											id="password"
											type={visible ? "text" : "password"}
											className="w-full px-10 py-3 pr-12 outline-none text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:border-ibp-500 placeholder:text-sm dark:text-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-ibp-500 transition-all"
											placeholder="Escribe tu contraseña"
											autoComplete="off"
											name="password"
										/>

										<button
											type="button"
											className="absolute right-2 p-2 outline-none text-slate-400 scale-100 active:scale-95 transition-all"
											onClick={handleChangeVisible}
										>
											<SvgIcon
												iconID={`${visible ? "eye-on" : "eye-off"}`}
												classes="w-5 h-5"
											/>
										</button>
									</div>
								</fieldset>

								<fieldset className="py-2">
									<button
										type="submit"
										className="w-full flex justify-center items-center gap-2 py-3 px-4 text-slate-50 bg-ibp-500 border border-ibp-500 hover:bg-ibp-600 hover:border-ibp-600 rounded-lg transition-all"
									>
										<span>Inicia sesión</span>
										<SvgIcon iconID="arrow-line-right" classes="w-5 h-5 ml-4" />
									</button>
								</fieldset>
							</form>

							<div className="py-4 text-center">
								<a href="/recuperacion">
									<span className="text-ibp-400 hover:text-ibp-500 hover:underline transition-colors">
										¿Olvidaste tu contraseña?
									</span>
								</a>
							</div>
						</div>

						<div className="absolute">
							<img
								className="object-cover"
								src="/assets/images/campus.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</MainComponent>
	);
}
