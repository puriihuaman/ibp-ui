import { useState } from "react";

export function useModal() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	const handleOpenModal = (): void => setIsOpenModal(true);
	const handleCloseModal = (): void => setIsOpenModal(false);

	return { isOpenModal, handleOpenModal, handleCloseModal };
}
