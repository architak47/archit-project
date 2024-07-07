import Image from "next/image";

export default function ClientSection() {
	const clients = [
		{ src: "/Images/client-1.svg", alt: "client-1" },
		{ src: "/Images/client-2.svg", alt: "client-2" },
		{ src: "/Images/client-3.svg", alt: "client-3" },
		{ src: "/Images/client-4.svg", alt: "client-4" },
		{ src: "/Images/client-5.svg", alt: "client-5" },
		{ src: "/Images/client-6.svg", alt: "client-6" },
		{ src: "/Images/client-7.svg", alt: "client-7" },
	]; 
	return (
		<section className="gap-4 py-[2.5rem] px-[5%]">
			<div className="flex max-w-[72rem] mx-auto flex-col gap-4 items-center">
				<div className="flex flex-col gap-2 items-center">
					<div className="max-w-[33.875rem]">
						<h2 className="text-neutral-d-gray text-center font-semibold text-4xl leading-[2.75rem]">
							Our Clients
						</h2>
					</div>
					<p className="text-base text-neutral-gray font-normal text-center">
						We have been working with some Fortune 500+ clients
					</p>
				</div>

				<div className="flex flex-wrap py-[1.56rem] item-center w-full items-stretch justify-between max-sm:grid max-sm:grid-cols-3 max-sm:place-items-center max-sm:w-full max-sm:gap-8">
					{clients.map(({ src, alt }, index) => (
						<div
							className={`flex justify-center items-center ${
								index === clients.length - 1
									? "max-sm:col-span-3"
									: ""
							}`}
							key={src}
						>
							<Image
								src={src}
								alt={alt}
								width={48}
								height={48}
								layout="fixed"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
