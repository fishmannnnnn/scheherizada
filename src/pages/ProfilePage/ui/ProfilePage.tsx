import clsx from "clsx";

import styles from "./ProfilePage.module.scss";

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={clsx(styles.ProfilePage, className)}>
            Profile page
        </div>
    );
};