import clsx from "clsx";

import styles from "./LetterPattern.module.scss";

export enum LetterPatternTheme {
	Light = "light",
	Dark = "dark",
}

interface LetterPatternProps {
	className?: string;
	theme?: LetterPatternTheme;
}

export const LetterPattern = ({ className, theme }: LetterPatternProps) => {
	return (
		<div
			className={clsx(
				styles.LetterPattern,
				theme === LetterPatternTheme.Dark && styles.dark,
				className,
			)}
		/>
	);
};
