import Image from "next/image";
import ButtonPrimary from "@/components/buttons/button-primary"; 

export default function HeroSection() {
	return (
		<section className="flex py-24 px-[5%] mt-[5.25rem] items-center h-[calc(100vh-5.25rem)] lg:max-h-[40rem] md:max-h-[40rem] bg-[#F5F7FA]">
			<div className="max-w-[72rem] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="max-w-full">
						<h1 className="text-4xl text-neutral-d-gray font-semibold">
							Lessons and insights{" "}
							<span className=" inline text-[#4CAF4F] text-nowrap">
								from 8 years
							</span>
						</h1>
						<p className="text-base font-normal mt-4 mb-8 text-[#717171]">
							Where to grow your business as a photographer: site
							or social media?
						</p>
						<ButtonPrimary label="Register" />
					</div>
					<div className="max-w-full place-self-end max-md:place-self-center hover:scale-105 transition-transform duration-300 ease-in-out">
						<Image
							src="/Images/Illustration.svg"
							alt="Illustration"
							width={391}
							height={407}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
