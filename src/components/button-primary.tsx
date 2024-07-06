import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	icon?: string;
}

export default function ButtonPrimary({
	label = "Sign Up",
	icon = "",
	...props
}: ButtonPrimaryProps) {
	return (
		<button
			className="flex py-[0.625rem] px-[1.25rem] gap-2 items-center bg-brand-primary text-white rounded-md transition-all ease-in-out duration-300 hover:opacity-80"
			{...props}
		>
			{label && (
				<span className={icon ? "font-semibold" : ""}>{label}</span>
			)}
			{icon && (
				<Image src={icon} width={24} height={24} alt="Arrow right" />
			)}
		</button>
	);
}
