import Image from "next/image";
import ButtonPrimary from '@/components/buttons/button-primary';

export default function UnseenSection() {
	return (
		<section className="flex py-[2.5rem] px-[5%]">
			<div className="flex max-md:flex-wrap w-full max-w-[72rem] mx-auto justify-between items-center">
				<figure className="flex max-md:w-full max-sm:justify-center">
					<Image
						className="hover:hover:scale-105 transition-transform duration-300 ease-in-out"
						src={"/Images/unseen-illustration.svg"}
						alt="Illustration"
						width={442}
						height={443}
					/>
				</figure>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4 pr-16 sm:max-w-[661px] max-md:w-full">
						<h2 className="flex text-4xl font-semibold leading-[2.75rem] text-[#4D4D4D]">
							The unseen of spending three years at Pixelgrade
						</h2>
						<p className="text-[#717171]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed sit amet justo ipsum. Sed accumsan quam
							vitae est varius fringilla. Pellentesque placerat
							vestibulum lorem sed porta. Nullam mattis tristique
							iaculis. Nullam pulvinar sit amet risus pretium
							auctor. Etiam quis massa pulvinar, aliquam quam
							vitae, tempus sem. Donec elementum pulvinar odio.
						</p>
					</div>
					<div className="inline-flex">
						<ButtonPrimary label="Learn More" />
					</div>
				</div>
			</div>
		</section>
	);
}
