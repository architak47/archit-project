import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer bg-[#263238]">
			<div className="flex flex-row py-16 max-w-[70rem] mx-auto justify-between ">
				<div className="company-info flex gap-10 flex-col">
					<Image
						src={"/Images/Logo-on-black.png"}
						alt="logo"
						width={100}
						height={12}
					/>
					<div className="text-[#F5F7FA]">
						<p>Copyright © 2020 Nexcent ltd.</p>
						<p>All rights reserved</p>
					</div>
					<div className="social-icon flex flex-row gap-4">
						<Link href="https://www.instagram.com">
							<Image
								src="/Images/instagram.svg"
								alt="instagram"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="/website">
							<Image
								src="/Images/web.svg"
								alt="website"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="https://www.twitter.com">
							<Image
								src="/Images/twitter.svg"
								alt="twitter"
								width={24}
								height={24}
							/>
						</Link>
						<Link href="https://www.facebook.com">
							<Image
								src="/Images/youtube.svg"
								alt="youtube"
								width={24}
								height={24}
							/>
						</Link>
					</div>
				</div>
				<div className="footer-links flex gap-[6.6rem] ">
					<div className=" w-full max-w-[10rem]">
						<h3 className="text-[#F5F7FA] text-lg font-bold mb-6">
							Company
						</h3>
						<ul className="flex flex-col gap-3 text-[#F5F7FA] text-sm">
							<li>
								<Link href="/pages/about">About Us</Link>
							</li>
							<li>
								<Link href="/pages/blog">Blog</Link>
							</li>
							<li>
								<Link href="/pages/contact-us">Contact Us</Link>
							</li>
							<li>
								<Link href="/pages/pricing">Pricing</Link>
							</li>
							<li>
								<Link href="/testimonials">Testimonials</Link>
							</li>
						</ul>
					</div>
					<div className="w-full max-w-[10rem]">
						<h3 className="text-[#F5F7FA] text-lg font-bold mb-6">
							Support
						</h3>
						<ul className="flex flex-col gap-3 text-[#F5F7FA] text-sm">
							<li>
								<Link href="#">Help Center</Link>
							</li>
							<li>
								<Link className="whitespace-nowrap" href="#">Terms of service</Link>
							</li>
							<li>
								<Link href="#">Legal</Link>
							</li>
							<li>
								<Link href="#">Privacy Policy</Link>
							</li>
							<li>
								<Link href="#">Status</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-white text-lg font-bold mb-6">
							Stay up to date
						</h3>
						<form className="relative" action="" method="get">
							<input
								type="email"
								placeholder="Your Email Address"
								className="h-10 flex-shrink-0 rounded-lg bg-opacity-20 bg-white py-3 px-2 placeholder:text-[#D9DBE1] text-[#D9DBE1]"
							/>
							<button className="absolute right-4 top-[50%] translate-y-[-50%]">
								<Image
									src="/Images/send.svg"
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
