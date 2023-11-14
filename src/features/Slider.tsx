import { useEffect, useState } from "react";

import { sliderList } from "@services/banner-list";
import { Slider } from "@interfaces/slider";
import SvgIcon from "@components/SvgIcon";

export default function Slider() {
	const [sliders, setSliders] = useState<Slider[]>(sliderList);

	const [current, setCurrent] = useState<number>(1);
	const [start, setStart] = useState<number>(0);
	const [end, setEnd] = useState<number>(1);

	const byItem = 1;
	const total = Math.ceil(sliderList.length / byItem);

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

		setSliders(sliderList.slice(start, end));
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

		setSliders(sliderList.slice(start, end));
	};

	useEffect((): void => {
		setSliders(sliderList.slice(start, end));
	}, [current, start, end]);

	return (
		<section className="">
			<div className="relative min-h-[25vh] overflow-hidden">
				{/* Content */}
				<div className="min-h-[inherit]">
					{sliders.map((banner: Slider) => (
						<img
							key={banner.id}
							className="min-h-[inherit] object-cover select-none"
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
							className="flex justify-center items-center p-2 scale-100 outline-none text-ibp-500 active:scale-95 hover:text-ibp-600 transition-all"
							onClick={handlePreviousBanner}
						>
							<SvgIcon iconID="arrow-linear-left" classes="w-8 h-8" />

							<span className="text-sm hidden">anterior</span>
						</button>

						<button
							type="button"
							className="flex justify-center items-center p-2 scale-100 outline-none text-ibp-500 active:scale-95 hover:text-ibp-600 transition-all"
							onClick={handleNextBanner}
						>
							<SvgIcon iconID="arrow-linear-right" classes="w-8 h-8" />

							<span className="text-sm hidden">siguiente</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
