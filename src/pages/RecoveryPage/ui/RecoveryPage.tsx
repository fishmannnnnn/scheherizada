import clsx from "clsx";
import Image from "next/image";

import { RecoveryForm } from "@/features/recovery";
import bg from "@/shared/assets/images/authWallpaper.webp";
import decorator from "@/shared/assets/images/decorator.png";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";
import { LetterPattern } from "@/shared/ui/LetterPattern/LetterPattern";

import styles from "./RecoveryPage.module.scss";


export const RecoveryPage = () => {
	return (
		<div className={clsx(styles.PageContainer)}>
			<div className={styles.bg}>
				<Image
					className={styles.bgImage}
					src={bg}
					alt=""
					width={1600}
					height={900}
				/>
				<LetterPattern className={styles.letterPattern} />
			</div>
			<div className={styles.Page}>
				<CloseButton className={styles.closeBtn} />
				<div className={styles.content}>
					<div>
						<h1 className={styles.title}>Recover password</h1>
						<Image src={decorator} alt="" width={303} height={30} />
					</div>
					<p className={styles.text}>
						To recover your password, enter the email address you
						used to register your account. We will send you a link
						to reset your password.
					</p>
					<RecoveryForm className={styles.form} />
				</div>
			</div>
		</div>
	);
};
