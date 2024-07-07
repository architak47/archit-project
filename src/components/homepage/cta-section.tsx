import ButtonPrimary from "@/components/buttons/button-primary";
import Image from "next/image";

export default function CTASection() {
  return (
		<section className="px-[5%] py-12 bg-[#F5F7FA]">
			<div className="flex flex-col items-center gap-8 max-w-[55rem] mx-auto text-center">
				<h2 className="text-7xl font-semibold text-[#263238]">Pellentesque suscipit fringilla libero eu.</h2>
				<div className="flex items-center gap-2 bg-[#4CAF4F] font-semibold text-white rounded hover:scale-105 transition-transform duration-200 ease-in" >
					<ButtonPrimary 
						
						label="Get a Demo" 
						icon="/Images/arrow-right-white.svg" 
					/>
				</div>
			</div>
		</section>
  );
}