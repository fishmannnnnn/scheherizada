import clsx from "clsx";
import { InputHTMLAttributes, memo, useState } from "react";

import styles from "./Input.module.scss";
import { Button } from "../Button/Button";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	inputType?: "default" | "password";
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		// type = "text",
		inputType,
		placeholder,
		...otherProps
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const [visible, setVisible] = useState(inputType == "password" ? false : true);

	return (
		<div className={clsx(styles.wrapper, className)}>
			<input
				type={visible ? "text" : "password"}
				value={value}
				style={inputType === "password" ? { paddingRight: "36px" } : {}}
				onChange={onChangeHandler}
				className={styles.Input}
				placeholder={placeholder}
				{...otherProps}
			/>
			{inputType === "password" && (
				<Button
					type="button"
					className={styles.btn}
					onClick={() => setVisible(!visible)}
				>
					{visible ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<path
								d="M7.98833 3C5.5551 3 3.05546 4.56684 1.09091 7.70052C0.973738 7.88281 0.969832 8.12587 1.07919 8.31684C2.59069 10.9427 5.05517 13 7.98833 13C10.8903 13 13.4055 10.9384 14.9209 8.30382C15.0264 8.11719 15.0264 7.88281 14.9209 7.69618C13.4016 5.09201 10.8668 3 7.98833 3Z"
								stroke="black"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.4998 7.99848C10.4998 6.46636 9.37883 5.2207 8.00012 5.2207C6.62142 5.2207 5.50049 6.46636 5.50049 7.99848C5.50049 9.5306 6.62142 10.7763 8.00012 10.7763C9.37883 10.7763 10.4998 9.5306 10.4998 7.99848Z"
								stroke="black"
								strokeMiterlimit="10"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<g clipPath="url(#clip0_2057_11129)">
								<path
									d="M6.60033 2.82799C7.05921 2.72057 7.52904 2.66688 8.00033 2.66799C12.667 2.66799 15.3337 8.00132 15.3337 8.00132C14.929 8.75839 14.4464 9.47114 13.8937 10.128M9.41366 9.41465C9.23056 9.61115 9.00976 9.76876 8.76443 9.87807C8.5191 9.98738 8.25426 10.0462 7.98572 10.0509C7.71718 10.0556 7.45043 10.0062 7.2014 9.90565C6.95236 9.80506 6.72614 9.65534 6.53622 9.46542C6.34631 9.2755 6.19659 9.04928 6.096 8.80025C5.99541 8.55121 5.94601 8.28447 5.95075 8.01593C5.95549 7.74738 6.01426 7.48255 6.12358 7.23722C6.23289 6.99189 6.39049 6.77108 6.58699 6.58799M11.9603 11.9613C10.8207 12.83 9.43306 13.3112 8.00033 13.3347C3.33366 13.3347 0.666992 8.00132 0.666992 8.00132C1.49625 6.45592 2.64642 5.10572 4.04033 4.04132L11.9603 11.9613Z"
									stroke="#2F2E2B"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M0.666992 0.667969L15.3337 15.3346"
									stroke="#2F2E2B"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2057_11129">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					)}
				</Button>
			)}
		</div>
	);
});
