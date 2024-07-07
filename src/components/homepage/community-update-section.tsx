import { Content } from "next/font/google";
import Image from "next/image";
// import ButtonPrimary from "@/components/buttons/button-primary";
import ButtonSecondary from "@/components/buttons/button-secondary";

export default function CommunityUpdateSection() {
	const blogs = [
		{
			src: "/Images/image-1.png",
			alt: "image-1",
			Content: "Creating Streamlined Safeguarding Processes with OneRen",
		},
		{
			src: "/Images/image-2.png",
			alt: "image-2",
			Content:
				"What are your safeguarding responsibilities and how can you manage them?",
		},
		{
			src: "/Images/image-3.png",
			alt: "image-3",
			Content: "Revamping the Membership Model with Triathlon Australia",
		},
	];
	return (
		<section className="px-[5%] py-12">
			<div className="flex flex-col gap-4 max-w-[72rem] mx-auto text-center">
				<div className="flex flex-col gap-2 max-w-[40rem] mx-auto">
					<h2 className="text-4xl font-semibold text-[#4D4D4D]">
						Caring is the new marketing
					</h2>
					<p className="text-[#717171]">
						The Nexcent blog is the best place to read about the
						latest membership insights, trends and more. See
						who&apos;s joining the community, read about how our
						community are increasing their membership income and
						lot&apos;s more.
					</p>
				</div>
				<div className="flex justify-between w-full">
					{blogs.map(({ src, alt, Content }, index) => (
						<div className="card" key={index}>
							<Image
								src={src}
								alt={alt}
								width={368}
								height={286}
								style={{
									objectFit: "cover",
									aspectRatio: "368 / 286",
									borderRadius: "0.5rem",
								}}
								className="rounded-lg"
							/>
							<div className="relative z-5 w-fit mx-auto flex flex-col gap-4 items-center mt-[-25%] px-4 py-4 rounded-lg bg-[#F5F7FA] text-center shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)]">
								<h2 className="w-full max-w-[285px] text-xl font-semibold text-[#717171]">
									{Content}
								</h2>
								<div className="inline-flex mx-auto">
									<ButtonSecondary
										label="Read more"
										icon="/Images/arrow-right.svg"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
