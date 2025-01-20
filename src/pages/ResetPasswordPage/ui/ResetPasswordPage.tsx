import clsx from "clsx";
// import Image from "next/image";

import { ResetPasswordForm } from "@/features/reset-password";
// import decorator from "@/shared/assets/images/decorator.png";

import styles from "./ResetPasswordPage.module.scss";

interface PageProps {
	className?: string;
}

export const ResetPasswordPage = ({ className }: PageProps) => {
	return (
		<div className={clsx(styles.PageContainer, className)}>
			<div className={styles.bg}>
				{/* <LetterPattern className={styles.letterPattern} /> */}
			</div>
			<div className={styles.Page}>
				{/* <CloseButton className={styles.closeBtn} /> */}
				<div className={styles.content}>
					<div>
						<h1 className={styles.title}>Reset password</h1>
						{/* <Image src={decorator} alt="" width={303} height={30} /> */}
						<ResetPasswordForm className={styles.form} />
					</div>
				</div>
			</div>
		</div>
	);
};
