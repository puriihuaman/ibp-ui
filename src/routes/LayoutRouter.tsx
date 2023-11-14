import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "@views/Blog";
import Accounting from "@views/careers/Accounting";
import Administration from "@views/careers/Administration";
import NotFound from "@views/NotFound";
import Home from "@views/Home";
import LoginEdusys from "@features/LoginEdusys";
import ProtectedRoute from "./ProtectedRoute";
import Graduates from "@views/Graduates";
import Systems from "@views/careers/Systems";
import IbpBlog from "@views/IbpBlog";
import News from "@views/News";
import JobPlacement from "@views/JobPlacement";
import Teacher from "@views/Teacher";
import Staff from "@views/Staff";
import ToggleTheme from "@components/ToggleTheme";

export default function LayoutRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/carreras/contabilidad" element={<Accounting />} />
					<Route path="/carreras/administracion" element={<Administration />} />
					<Route path="/carreras/sistemas" element={<Systems />} />

					<Route path="/instituto/egresados" element={<Graduates />} />
					<Route
						path="/instituto/insercion-laboral"
						element={<JobPlacement />}
					/>
					<Route path="/instituto/docentes" element={<Teacher />} />
					<Route path="/instituto/personal" element={<Staff />} />

					<Route path="/blog/nosotros" element={<Blog />} />
					<Route path="/blog/somos-ibp" element={<IbpBlog />} />
					<Route path="/blog/noticias" element={<News />} />

					<Route
						path="/blog/edusys"
						element={
							<ProtectedRoute isStudent={true} redirectTo="/">
								<LoginEdusys />
								<ToggleTheme classes="fixed bottom-4 left-2 text-slate-500 border-slate-500 dark:text-slate-400 dark:border-current" />
							</ProtectedRoute>
						}
					/>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
