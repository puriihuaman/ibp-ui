import SvgIcon from "@components/SvgIcon";
import { ReactNode, useRef, MouseEvent } from "react";
import { createPortal } from "react-dom";

export default function Modal({
	classes,
	isOpenModal,
	closeModal,
	children,
}: {
	classes?: string;
	isOpenModal: boolean;
	closeModal: () => void;
	children: ReactNode;
}) {
	const modalRef = useRef<HTMLDivElement | null>(null);

	const handleCloseModal = (
		ev: MouseEvent<HTMLDivElement | HTMLButtonElement>
	): void => {
		if (!modalRef.current || modalRef.current.contains(ev.target as Node)) {
			return;
		}

		closeModal();
	};
	return (
		<>
			{createPortal(
				<div
					className={`${
						isOpenModal
							? "scale-1 visible opacity-100"
							: "scale-0 invisible opacity-0"
					} fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center p-4 bg-slate-950/60 origin-center transition-all first:py-16`}
					data-modal="modal"
					ref={modalRef}
					onClick={handleCloseModal}
				>
					<div className={`flex flex-col w-full max-w-md ${classes}`}>
						<button
							className="ml-auto p-1 z-50 bg-slate-50 text-ibp-500 rounded-md hover:bg-ibp-500 hover:text-slate-50 active:scale-95 dark:bg-slate-900 dark:hover:bg-slate-950 transition-all"
							onClick={closeModal}
						>
							<SvgIcon iconID="close" classes="w-6 h-6" />
						</button>
						{children}
					</div>
				</div>,
				document.body
			)}
		</>
	);
}
