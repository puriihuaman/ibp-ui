import { useEffect, useState } from "react";

interface Banner {
	id: number;
	image: string;
	description: string;
}

const bannersInitial: Banner[] = [
	{ id: 1, image: "https://www.ibp.edu.pe/img/slider2.png", description: "" },
	{ id: 2, image: "https://www.ibp.edu.pe/img/slider3.png", description: "" },
	{
		id: 1,
		image: "	https://www.ibp.edu.pe/img/segegresado.png",
		description: "seguimiento de egresados",
	},
];
const initial: Banner[] = [];

export default function Banner() {
	const [banners, setBanners] = useState<Banner[]>(initial);

	const [current, setCurrent] = useState<number>(1);
	const [start, setStart] = useState<number>(0);
	const [end, setEnd] = useState<number>(1);

	const byItem = 1;
	const total = Math.ceil(bannersInitial.length / byItem);

	const handleNextBanner = (): void => {
		setCurrent(current + 1);

		const countStart = start + byItem;
		const countEnd = end + byItem;

		setStart(countStart);
		setEnd(countEnd);

		if (current === total) {
			setCurrent(1);
			setStart(0);
			setEnd(1);
		}

		setBanners(bannersInitial.slice(start, end));
	};

	const handlePreviousBanner = (): void => {
		setCurrent(current - 1);
		let countStart, countEnd;

		if (current === 1) {
			countStart = (total - 1) * byItem;
			countEnd = total * byItem;
		} else {
			countStart = (current - 2) * byItem;
			countEnd = (current - 1) * byItem;
		}

		setStart(countStart);
		setEnd(countEnd);

		if (current === 1) {
			setCurrent(total);
			setStart((total - 1) * byItem);
			setEnd(total * byItem);
		}

		setBanners(bannersInitial.slice(start, end));
	};

	useEffect((): void => {
		setBanners(bannersInitial.slice(start, end));
	}, [current, start, end]);

	return (
		<section className="">
			<div className="relative max-h-96 overflow-hidden">
				{/* Content */}
				<div className="flex items-center h-full">
					{banners.map((banner: Banner) => (
						<img
							key={banner.id}
							className="h-full select-none"
							src={banner.image}
							alt={banner.description}
						/>
					))}
				</div>

				{/* buttons */}
				<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-950/20">
					<div className="flex justify-between items-center gap-4 w-full h-full px-4">
						<button
							type="button"
							className="flex justify-center items-center p-2 scale-100 outline-none text-blue-500 active:scale-95 hover:text-blue-600 transition-all"
							onClick={handlePreviousBanner}
						>
							<span className="flex justify-center items-center">
								<svg className="block w-8 h-8 text-current fill-current">
									<use href="/assets/icons/icons.svg#arrow-left"></use>
								</svg>
							</span>
							<span className="text-sm hidden">anterior</span>
						</button>

						<button
							type="button"
							className="flex justify-center items-center p-2 scale-100 outline-none text-blue-500 active:scale-95 hover:text-blue-600 transition-all"
							onClick={handleNextBanner}
						>
							<span className="flex justify-center items-center">
								<svg className="block w-8 h-8 text-current fill-current">
									<use href="/assets/icons/icons.svg#arrow-right"></use>
								</svg>
							</span>
							<span className="text-sm hidden">siguiente</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
