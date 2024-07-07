import Image from "next/image";

export default function AchievementSection() {
	const achievments = [
		{
			icon: "/Images/icon-1.png",
			number: "2,245,341",
			title: "Members",
		},
		{
			icon: "/Images/icon-2.png",
			number: "828,867",
			title: "Event Bookings",
		},
		{
			icon: "/Images/icon-3.png",
			number: "46,328",
			title: "Clubs",
		},
		{
			icon: "/Images/icon-4.png",
			number: "1,926,436",
			title: "Payments",
		},
	];
	return (
		<section className="flex py-12 px-[5%] bg-[#F5F7FA]">
			<div className="flex max-w-[72rem] mx-auto w-full">
				<div className="flex max-md:flex-wrap w-full gap-12 justify-between items-center">
					<div className="flex flex-col w-[100%] max-w-[33.75rem]">
						<h2 className="text-4xl font-semibold leading-[2.75rem] text-[#4D4D4D]">
							Helping a local{"  "}
							<span className="text-[#4CAF4F] text-nowrap">
								business reinvent itself
							</span>
						</h2>
						<p className="space-y-2 text-[#717171]">
							We reached here with our hard work and dedication
						</p>
					</div>
					<div className="grid grid-cols-2 w-[100%] gap-y-10">
						{achievments.map((achievment, index) => (
							<div
								key={index}
								className="flex w-[100%] gap-4 items-center"
							>
									<Image
										src={achievment.icon}
										alt="Illustration"
										width={48}
										height={48}
									/>
								<div>
									<h2 className="text-3xl font-bold text-[#4D4D4D]">
										{achievment.number}
									</h2>
									<p>{achievment.title }</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
// set username github
// git config --global user.name "username"
