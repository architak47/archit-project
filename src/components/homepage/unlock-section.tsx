import Image from "next/image";
import ButtonPrimary from "@/components/buttons/button-primary";

export default function UnlockSection() {
  return (
		<section className="flex py-[2.5rem] px-[5%]">
			<div className="flex max-md:flex-wrap w-full max-w-[72rem] mx-auto justify-between items-center">
				<figure className="flex max-md:w-full max-sm:justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
					<Image
						src={"Images/pana.svg"}
						alt="Illustration"
						width={442}
						height={329}
					/>
				</figure>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-12 pr-16 sm:max-w-[661px] max-md:w-full">
						<h2 className="text-4xl font-semibold leading-[2.75rem] text-[#4D4D4D]">
							How to design your site footer like we did
						</h2>
						<p className="text-[#717171]">
							Donec a eros justo. Fusce egestas tristique
							ultrices. Nam tempor, augue nec tincidunt molestie,
							massa nunc varius arcu, at scelerisque elit erat a
							magna. Donec quis erat at libero ultrices mollis. In
							hac habitasse platea dictumst. Vivamus vehicula leo
							dui, at porta nisi facilisis finibus. In euismod
							augue vitae nisi ultricies, non aliquet urna
							tincidunt. Integer in nisi eget nulla commodo
							faucibus efficitur quis massa. Praesent felis est,
							finibus et nisi ac, hendrerit venenatis libero.
							Donec consectetur faucibus ipsum id gravida.
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