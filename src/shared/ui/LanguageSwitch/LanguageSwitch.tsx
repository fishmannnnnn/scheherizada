"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

import * as Select from "@radix-ui/react-select";

import styles from "./LanguageSwitch.module.scss";

interface LanguageSwitchProps {
	className?: string;
}

const countries: Record<string, ReactNode> = {
	en: (
		<div className={styles.lang}>
			{/* <Image priority={true} src={en} alt="" width={16} height={16} /> */}
			<span>EN</span>
		</div>
	),
	es: (
		<div className={styles.lang}>
			{/* <Image priority={true} src={es} alt="" width={16} height={16} /> */}
			<span>ES</span>
		</div>
	),
};

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
	const [value, setValue] = useState("en");
	const [open, setOpen] = useState(false);

	const triggerRef = useRef<HTMLButtonElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (triggerRef.current && contentRef.current) {
			const triggerWidth = triggerRef.current.offsetWidth;
			contentRef.current.style.width = `${triggerWidth}px`;
			contentRef.current.style.left = `-${10}px`;
		}
	}, [open]);

	return (
		<Select.Root
			value={value}
			onValueChange={setValue}
			onOpenChange={() => setOpen(!open)}
		>
			<Select.Trigger className={styles.trigger} ref={triggerRef}>
				<Select.Value aria-label={value}>
					<span className={styles.triggerValue}>
						<span className={styles.triggerValue}>
							{countries[value]}
						</span>
					</span>
				</Select.Value>
				<svg
					className={open ? styles.open : styles.close}
					width="14"
					height="7"
					viewBox="0 0 14 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 1.52734L8.41421 5.11313C7.63316 5.89418 6.36683 5.89418 5.58579 5.11313L2 1.52734"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="square"
						strokeLinejoin="round"
					/>
				</svg>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content
					ref={contentRef}
					className={styles.content}
					position="popper"
					side="bottom"
				>
					<Select.Viewport className={`${styles.viewport}`}>
						{Object.keys(countries).map(key => (
							<Select.Item
								className={styles.selectItem}
								value={key}
								key={key}
							>
								<Select.ItemText>
									{countries[key]}
								</Select.ItemText>
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};
