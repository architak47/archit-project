import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer bg-[#263238]">
			<div className="flex flex-row py-16 max-w-[70rem] mx-auto justify-between ">
				<div className="company-info flex gap-10 flex-col">
					<Image
						src={"/Logo-on-black.png"}
						alt="logo"
						width={100}
						height={12}
					/>
					<div className="text-neutral-silver">
						<p>Copyright © 2020 Nexcent ltd.</p>
						<p>All rights reserved</p>
					</div>
					<div className="social-icon flex flex-row gap-4">
						<Link href="https://www.instagram.com">
							<Image
								src="/instagram.svg"
								alt="instagram"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="/website">
							<Image
								src="/web.svg"
								alt="website"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="https://www.twitter.com">
							<Image
								src="/twitter.svg"
								alt="twitter"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="https://www.facebook.com">
							<Image
								src="/youtube.svg"
								alt="youtube"
								width={24}
								height={24}
							/>
						</Link>
					</div>
				</div>
				<div className="footer-links flex gap-[1.88rem] ">
					<div className=" w-full max-w-[10rem]">
						<h3 className="text-neutral-silver text-lg font-bold mb-6">
							Company
						</h3>
						<ul className="flex flex-col gap-3 text-neutral-silver text-sm">
							<li>
								<Link href="/about">About Us</Link>
							</li>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/contact-us">Contact Us</Link>
							</li>
							<li>
								<Link href="/pricing">Pricing</Link>
							</li>
							<li>
								<Link href="/testimonials">Testimonials</Link>
							</li>
						</ul>
					</div>
					<div className="w-full max-w-[10rem]">
						<h3 className="text-neutral-silver text-lg font-bold mb-6">
							Support
						</h3>
						<ul className="flex flex-col gap-3 text-neutral-silver text-sm">
							<li>
								<Link href="#">Help Center</Link>
							</li>
							<li>
								<Link href="#">Terms and service</Link>
							</li>
							<li>
								<Link href="#">Legal</Link>
							</li>
							<li>
								<Link href="#">Pripacy Policy</Link>
							</li>
							<li>
								<Link href="#">Status</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-neutral-silver text-lg font-bold mb-6">
							Quick Links
						</h3>
						<form className="relative" action="" method="get">
							<input
								type="email"
								placeholder="Your Email Address"
								className="h-10 flex-shrink-0 rounded-lg opacity-20 bg-white py-3 px-2 placeholder:text-gray-300 text-gray-950"
							/>
							<button className="absolute right-4 top-[50%] translate-y-[-50%]">
								<Image
									src="/send.svg"
									alt="send"
									width={24}
									height={24}
								/>
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}
