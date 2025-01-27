import clsx from "clsx";
import Image from "next/image";

import mainBg from "@/shared/assets/images/mainBg.webp";
import rays from "@/shared/assets/images/rays.webp";
import {
	LetterPattern,
	LetterPatternTheme,
} from "@/shared/ui/LetterPattern/LetterPattern";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
	return (
		<div className={clsx(styles.PageContainer)}>
			<div className={styles.bg}>
				<LetterPattern
					className={styles.letterPattern}
					theme={LetterPatternTheme.Dark}
				/>
				<Image className={styles.bgImage} src={mainBg} alt="" />
			</div>
            <Image className={styles.rays} src={rays} alt="" />
			<div className={styles.Page}></div>
		</div>
	);
};
