"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, FC } from "react";

import styles from "./Button.module.scss";

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	ACCENT = "accent",
	BACKGROUND = "background",
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	navigate?: string;
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	theme = ButtonTheme.CLEAR,
	square,
	size = ButtonSize.M,
	disabled,
	navigate,
	onClick,
	...otherProps
}) => {
	const router = useRouter();
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled) {
			event.preventDefault();
			return;
		}

		if (navigate) {
			router.push(navigate);
		}

		if (onClick) {
			onClick(event);
		}
	};
	const mods: Record<string, boolean> = {
		[styles[theme]]: true,
		[styles.square]: !!square,
		[styles[size]]: !!size,
		[styles.disabled]: !!disabled,
	};
	return (
		<button
			className={clsx(styles.Button, mods, className)}
			disabled={disabled}
			onClick={handleClick}
			{...otherProps}
		>
			{children}
		</button>
	);
};
