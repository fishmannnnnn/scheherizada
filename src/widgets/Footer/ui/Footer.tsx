import clsx from "clsx";

import styles from "./Footer.module.scss";
import Link from "next/link";

interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={clsx(styles.Footer, className)}>
			<div className={styles.siteInfo}>
				<Link
					href="https://support.scheherizada.tech"
					className={styles.supportLink}
				>
					support.scheherizada.tech
				</Link>
				<span className={styles.c}>© 2033</span>
				<Link
					href="https://www.scheherizada.com"
					className={styles.siteLink}
				>
					scheherizada.com
				</Link>
			</div>
			<div className={styles.policies}>
				<Link href="/terms">Terms and conditions</Link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="4"
					height="4"
					viewBox="0 0 4 4"
					fill="none"
				>
					<circle cx="2" cy="2" r="2" fill="#7E7E7E" />
				</svg>
				<Link href="/privacy">Privacy Policy</Link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="4"
					height="4"
					viewBox="0 0 4 4"
					fill="none"
				>
					<circle cx="2" cy="2" r="2" fill="#7E7E7E" />
				</svg>
				<Link href="/cookies">Cookies policy</Link>
			</div>
		</footer>
	);
};
