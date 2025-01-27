"use client";

import clsx from "clsx";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import logo from "@/shared/assets/icons/logo.svg";
import { LanguageSwitch } from "@/shared/ui/LanguageSwitch/LanguageSwitch";

import styles from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const path = usePathname();
	// const router = useRouter();
	return (
		<nav className={clsx(styles.Navbar, className)}>
			<div className={styles.NavbarInner}>
				<Image
					className={styles.logo}
					src={logo}
					alt="scheherizada"
					width={355}
					height={120}
					priority={true}
					// onClick={() => router.push("/")}
				/>
				<LanguageSwitch />
                <div className={styles.accountActions}>
                    account
                </div>
			</div>
		</nav>
	);
};
