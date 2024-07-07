import Image from "next/image";

export default function CommunitySection() {
	const communities = [
		{
			src: "/Images/community-1.svg",
			alt: "community-1",
			title: "Membership Organizations",
			desc: "Our membership management software provides full automation of membership renewals and payments",
		},
		{
			src: "/Images/community-2.svg",
			alt: "community-2",
			title: "National Associations",
			desc: "Our membership management software provides full automation of membership renewals and payments",
		},
		{
			src: "/Images/community-3.svg",
			alt: "community-3",
			title: "Clubs And Groups",
			desc: "Our membership management software provides full automation of membership renewals and payments",
		},
	];
	return (
		<section className="gap-4 pb-[2.5rem] px-[5%]">
			<div className="flex max-w-[72rem] mx-auto flex-col gap-4 items-center">
				<div className="flex flex-col gap-2 items-center">
					<div className="max-w-[33.875rem]">
						<h2 className="text-neutral-d-gray text-center font-semibold text-4xl leading-[2.75rem]">
							Manage your entire community in a single system
						</h2>
					</div>
					<p className="text-base text-neutral-gray font-normal">
						Who is Nextcent suitable for?
					</p>
				</div>

				<div className="flex flex-wrap item-center w-full justify-between ">
					{communities.map(({ src, alt, title, desc }, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center w-full max-w-[18.6875rem] max-lg:min-w-[18.6875rem] max-lg:max-w-full py-6 px-8 gap-2
              transition-all ease-in-out duration-300 hover:shadow-lg hover:bg-neutral-l-gray hover:text-neutral-d-gray"
						>
							<Image src={src} alt={alt} width={65} height={56} />
							<h3 className="text-[1.75rem] leading-9 font-bold text-neutral-d-gray">
								{title}
							</h3>
							<p className="text-base text-neutral-gray font-normal">
								{desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
