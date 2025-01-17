import clsx from "clsx";

import styles from "./Footer.module.scss";

interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={clsx(styles.Footer, className)}>
			<div className={styles.siteInfo}>
				<a
					href="https://support.scheherizada.tech"
					className={styles.supportLink}
				>
					support.scheherizada.tech
				</a>
				<span className={styles.c}>© 2033</span>
				<a
					href="https://www.scheherizada.com"
					className={styles.siteLink}
				>
					scheherizada.com
				</a>
			</div>
			<div className={styles.policies}>
				<a href="terms">Terms and conditions</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="4"
					height="4"
					viewBox="0 0 4 4"
					fill="none"
				>
					<circle cx="2" cy="2" r="2" fill="#7E7E7E" />
				</svg>
				<a href="privacy">Privacy Policy</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="4"
					height="4"
					viewBox="0 0 4 4"
					fill="none"
				>
					<circle cx="2" cy="2" r="2" fill="#7E7E7E" />
				</svg>
				<a href="cookies">Cookies policy</a>
			</div>
		</footer>
	);
};
