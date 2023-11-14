import Modal from "@features/Modal";
import { useModal } from "@hooks/useModal";

export default function InstallmentPrices() {
	const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

	return (
		<>
			<section
				className="absolute w-full h-full bg-[url('/assets/images/cont.png')] bg-no-repeat bg-cover bg-center"
				style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
			>
				<div className="flex justify-start items-start flex-col gap-8 px-4 pl-8 w-full h-full max-w-6xl mx-auto md:pl-24">
					<header className="mt-16">
						<h3 className="text-slate-50 font-bold text-2xl lg:text-4xl">
							Nuestras Cuotas
						</h3>
					</header>

					<div className="text-center mb-auto">
						<button
							className="inline-flex justify-center items-center p-4 text-sm uppercase text-slate-50 tracking-widest bg-ibp-500 rounded-md shadow-md hover:text-ibp-500 hover:bg-slate-100 transition-colors"
							rel="noopener noreferrer"
							onClick={handleOpenModal}
						>
							Tasas actuales
						</button>
					</div>
				</div>
			</section>

			{/* Modal */}
			<Modal
				classes="w-full h-full lg:max-w-5xl"
				isOpenModal={isOpenModal}
				closeModal={handleCloseModal}
			>
				<div className="min-w-60 w-full max-w-6xl h-5/6 overflow-hidden bg-slate-50 border-0 rounded-md shadow-md">
					<iframe
						className="w-full h-full"
						src="https://ibp.edu.pe/doc/TASAS_FINAL.pdf"
					></iframe>
				</div>
			</Modal>
		</>
	);
}
