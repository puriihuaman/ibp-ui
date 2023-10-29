import Accounting from "@careers/Accounting";
import Administration from "@careers/Administration";
import Systems from "@careers/Systems";
import Banner from "@components/banner/Banner";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Main from "@components/main/Main";
import Blog from "@pages/Blog";
import NotFound from "@pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<BrowserRouter>
				<Banner />
				<Header />

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contabilidad" element={<Accounting />} />
					<Route path="/administracion" element={<Administration />} />
					<Route path="/sistemas" element={<Systems />} />
					<Route path="*" element={<NotFound />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}
