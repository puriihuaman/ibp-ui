import { useState } from "react";
import MainComponent from "./MainComponent";

export default function LoginEdusys() {
	const [visible, setVisible] = useState(false);

	const handleChangeVisible = () => setVisible(!visible);

	return (
		<MainComponent>
			<div className="h-screen">
				<div className="w-full h-full flex justify-center items-center bg-[url(https://www.edusys.pe/istpelbuenpastor/50_upload/institucion/background_1.jpg?random=20190826150913)] bg-center bg-no-repeat bg-cover">
					<div className="max-w-[500px] w-full p-4 bg-gray-100 shadow-md rounded-lg">
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
								<label htmlFor="email" className="inline-block mb-3">
									Correo electrónico
								</label>

								<div className="s-relative s-cross-center">
									<input
										id="email"
										type="email"
										className="w-full px-4 py-3 outline-none text-gray-900 bg-gray-50 ring ring-gray-200 rounded-lg focus:ring-blue-500 placeholder:text-sm"
										placeholder="Escribe tu correo electrónico"
										name="email"
									/>
								</div>
							</fieldset>

							<fieldset className="">
								<label htmlFor="password" className="inline-block mb-3">
									Contraseña
								</label>

								<div className="relative flex items-center">
									<input
										id="password"
										type={visible ? "text" : "password"}
										className="w-full px-4 py-3 pr-12 outline-none text-gray-900 bg-gray-50 ring ring-gray-200 rounded-lg focus:ring-blue-500 placeholder:text-sm"
										placeholder="Escribe tu contraseña"
										autoComplete="off"
										name="password"
									/>

									<button
										type="button"
										className="absolute right-2 p-2 outline-none text-gray-500 scale-100 active:scale-95 transition-all"
										onClick={handleChangeVisible}
									>
										<span className="flex justify-center items-center">
											<svg className="block w-5 h-5 text-current fill-current">
												<use
													href={`/assets/icons/icons.svg#${
														visible ? "eye" : "eye-off"
													}`}
												></use>
											</svg>
										</span>
									</button>
								</div>
							</fieldset>

							<fieldset className="py-2">
								<button
									type="submit"
									className="w-full flex justify-center items-center py-3 px-4 text-blue-50 bg-blue-500 ring ring-blue-500 hover:bg-blue-600 hover:ring-blue-500 rounded-lg transition-colors"
								>
									Inicia sesión
								</button>
							</fieldset>
						</form>

						<div className="py-4 text-center">
							<a href="/recuperacion">
								<span className="text-blue-400 hover:text-blue-500 hover:underline transition-colors">
									¿Olvidaste tu contraseña?
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</MainComponent>
	);
}
