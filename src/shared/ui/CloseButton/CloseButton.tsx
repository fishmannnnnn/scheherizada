import clsx from "clsx";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

import cross from "@/shared/assets/icons/cross.svg";

import { Button } from "../Button/Button";
import styles from "./CloseButton.module.scss";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
}

export const CloseButton = ({
	className,
	disabled,
	...otherProps
}: CloseButtonProps) => {
	return (
		<Button
			className={clsx(
				styles.CloseButton,
				{ [styles.disabled]: disabled },
				className,
			)}
			disabled={disabled}
			{...otherProps}
		>
			<Image src={cross} alt="Close" />
		</Button>
	);
};
