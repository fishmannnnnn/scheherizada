import clsx from "clsx";
import Image from "next/image";

import { LoginForm } from "@/features/login";
import bg from "@/shared/assets/images/authBg.webp";
import decorator from "@/shared/assets/images/decorator.png";
import { Button } from "@/shared/ui/Button/Button";
import { CloseButton } from "@/shared/ui/CloseButton/CloseButton";
import {
	LetterPattern,
	LetterPatternTheme,
} from "@/shared/ui/LetterPattern/LetterPattern";

import styles from "./LoginPage.module.scss";

interface LoginPageProps {
	className?: string;
}

export const LoginPage = ({ className }: LoginPageProps) => {
	return (
		<div className={clsx(styles.LoginPageContainer, className)}>
			<div className={styles.bg}>
				<Image
					className={styles.bgImage}
					src={bg}
					alt=""
					width={1600}
					height={900}
				/>
				<LetterPattern
					className={styles.letterPattern}
					theme={LetterPatternTheme.Dark}
				/>
			</div>
			<div className={styles.LoginPage}>
				<CloseButton className={styles.closeBtn} />
				<div className={styles.blurZone}>
					<div className={styles.content}>
						<div className={styles.loginBlock}>
							<h1 className={styles.loginTitle}>Sign in</h1>
							<LoginForm className={styles.loginForm} />
							<Button className={styles.btn} navigate="/register">
								SIGN UP
							</Button>
						</div>
						<div className={styles.siteDescription}>
							<h1 className={styles.title}>SHA-256</h1>
							<Image
								src={decorator}
								alt=""
								width={303}
								height={30}
							/>
							<p className={styles.text}>
								This site provides online SHA-256 encryption and
								decryption services. We have an extremely large
								database of over 90,000 data records. Most are
								free and a small amount is charged. This site
								can also decrypt types using salt in real time.
								Use it for md5 decryption and md5 decoder.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
