import Link from "next/link";
import Image from "next/image";
import ButtonSecondary from "./buttons/button-secondary";
import ButtonPrimary from "./buttons/button-primary";

export default function Navbar() {
	const links = [
		{ href: "/", label: "Home" },
		{ href: "/services", label: "Services" },
		{ href: "/feature", label: "Feature" },
		{ href: "/product", label: "Product" },
		{ href: "/testimonials", label: "Testimonials" },
		{ href: "/faq", label: "FAQ" },
	];
	return (
		<div className="fixed top-0 w-full z-50">
			<div className="max-h-[5.25rem] py-[1.38rem] px-[5%] bg-neutral-silver">
				<nav className="flex max-w-[75rem] mx-auto justify-between items-center">
					<div className="max-lg:hidden">
						<Link href={"/"}>
							<Image
								src="/Logo.svg"
								alt="logo"
								width={154}
								height={24}
							/>
						</Link>
					</div>
					{/* Mobile Menu Button */}
					<Link href={"/"} className="block lg:hidden">
						<svg
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</Link>
					{/* Mobile Menu */}
					<div className="md:hidden hidden bg-white w-full py-2">
						{links.map(({ href, label }) => (
							<Link
								className="block px-4 py-2 text-gray-900 text-center hover:text-brand-primary"
								key={`${href}${label}`}
								href={href}
							>
								{label}
							</Link>
						))}
					</div>
					{/* Desktop Menu */}
					<div className="inline-flex gap-[3.125rem] max-lg:hidden">
						{links.map(({ href, label }) => (
							<Link
								className="text-base font-medium text-gray-900 transition-all ease-in-out duration-300 relative 
								after:absolute after:w-0 after:h-[2px] after:bg-brand-primary after:left-[50%] after:translate-x-[-50%] after:bottom-0 
								after:transition-all after:ease-in-out after:duration-300 hover:after:w-full hover:text-brand-primary"
								key={`${href}${label}`}
								href={href}
							>
								{label}
							</Link>
						))}
					</div>
					<div className="flex gap-[0.875rem]">
						<ButtonSecondary />
						<ButtonPrimary />
					</div>
				</nav>
			</div>
		</div>
	);
}
