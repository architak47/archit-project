import Image from "next/image";
import ButtonSecondary from "@/components/buttons/button-secondary";

export default function CustomerSection() {
  const logo = [
    {
      src: "/Images/client-1.svg",
      alt: "client-1",
    },
    {
      src: "/Images/client-2.svg",
      alt: "client-2",
    },
    {
      src: "/Images/client-3.svg",
      alt: "client-3",
    },
    {
      src: "/Images/client-4.svg",
      alt: "client-4",
    },
    {
      src: "/Images/client-5.svg",
      alt: "client-5",
    },
    {
      src: "/Images/client-6.svg",
      alt: "client-6",
    },
  ];

	return (
		<section className="px-[5%] py-12">
			<div className="mx-auto w-full max-w-[72rem]">
				<div className="grid w-full grid-cols-[auto,1fr] gap-[4.88rem] justify-stretch items-stretch">
					<div>
						<Image
							src="/Images/tesla.jpeg"
							alt="Illustration"
							width={326}
							height={326}
							style={{
								objectFit: "cover",
                aspectRatio: "1 / 1",
                borderRadius: "0.5rem",
                boxShadow: "0px 8px 16px 0px rgba(171, 190, 209, 0.40)"
							}}
						/>
					</div>
					<div className="flex flex-col items-start justify-center gap-4">
						<p className="font-semibold leading-6">
							Maecenas dignissim justo eget nulla rutrum molestie.
							Maecenas lobortis sem dui, vel rutrum risus
							tincidunt ullamcorper. Proin eu enim metus. Vivamus
							sed libero ornare, tristique quam in, gravida enim.
							Nullam ut molestie arcu, at hendrerit elit. Morbi
							laoreet elit at ligula molestie, nec molestie mi
							blandit. Suspendisse cursus tellus sed augue
							ultrices, quis tristique nulla sodales. Suspendisse
							eget lorem eu turpis vestibulum pretium. Suspendisse
							potenti. Quisque malesuada enim sapien, vitae
							placerat ante feugiat eget. Quisque vulputate odio
							neque, eget efficitur libero condimentum id.
							Curabitur id nibh id sem dignissim finibus ac sit
							amet magna.
						</p>
						<div className="flex flex-col gap-2">
							<h2 className="text-brand-primary text-xl font-semibold">Tim Smith</h2>
							<p>British Dragon Boat Racing Association</p>
            </div>
            <div className="flex gap-8 w-full justify-between">
              <div className="flex items-center gap-10">
                {logo.map((item, index) => (
                  <Image
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={40}
                  height={40}
                />
                ))}
              </div>
              <ButtonSecondary label="Meet all customers" icon="/Images/arrow-right.svg" />

            </div>
					</div>
				</div>
			</div>
		</section>
	);
}
