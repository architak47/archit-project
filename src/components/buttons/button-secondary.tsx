import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	icon?: string;
}

export default function ButtonSecondary({
	label = "Login",
	icon = "",
	...props
}: ButtonSecondaryProps) {
	return (
		<button
			className="flex gap-2 py-[0.625rem] px-[1.25rem] items-center   text-brand-primary bg-neutral-silver rounded-md transition-all ease-in-out duration-300 relative 
			after:absolute after:w-0 after:h-[1px] after:bg-brand-primary after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:transition-all after:ease-in-out after:duration-300 after:hover:w-[100%]"
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
