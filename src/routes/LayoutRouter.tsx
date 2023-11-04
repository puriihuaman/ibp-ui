import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "@views/Blog";
import Accounting from "@views/careers/Accounting";
import Administration from "@views/careers/Administration";
import Systems from "@views/careers/Systems.1";
import NotFound from "@views/NotFound";
import Home from "@views/Home";
import LoginEdusys from "@features/LoginEdusys";
import ProtectedRoute from "./ProtectedRoute";

export default function LayoutRouter() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contabilidad" element={<Accounting />} />
					<Route path="/administracion" element={<Administration />} />
					<Route path="/sistemas" element={<Systems />} />

					<Route
						path="/edusys"
						element={
							<ProtectedRoute isStudent={true} redirectTo="/">
								<LoginEdusys />
							</ProtectedRoute>
						}
					/>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
