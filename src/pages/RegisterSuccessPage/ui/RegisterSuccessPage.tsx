import clsx from "clsx";
import Image from "next/image";

import bg from "@/shared/assets/images/authWallpaper.webp";
import decorator from "@/shared/assets/images/decorator.png";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";
import { LetterPattern } from "@/shared/ui/LetterPattern/LetterPattern";

import styles from "./RegisterSuccessPage.module.scss";

interface PageProps {
	className?: string;
}

export const RegisterSuccessPage = ({ className }: PageProps) => {
	return (
		<div className={clsx(styles.PageContainer, className)}>
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
					<h1 className={styles.title}>Notification</h1>
					<Image src={decorator} alt="" width={303} height={30} />
					<p className={styles.text}>
						Your account has been created. <br /> A letter to
						terminate activation was sent to the specified e-mail
						address.
					</p>
				</div>
			</div>
		</div>
	);
};
