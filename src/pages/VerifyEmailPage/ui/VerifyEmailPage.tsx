import clsx from "clsx";

import { VerifyEmail } from "@/features/verify-email";

import styles from "./VerifyEmailPage.module.scss";

interface PageProps {
	className?: string;
}

export const VerifyEmailPage = ({ className }: PageProps) => {
	return (
		<div className={clsx(styles.PageContainer, className)}>
			<div className={styles.bg}></div>
			<div className={styles.Page}>
				<VerifyEmail className={styles.verify} />
			</div>
		</div>
	);
};
