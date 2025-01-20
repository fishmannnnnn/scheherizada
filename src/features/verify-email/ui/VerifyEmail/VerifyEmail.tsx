"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { client } from "@/shared/config/graphql";
import { Timer } from "@/widgets/Timer";
import { useMutation } from "@apollo/client";

import { Verify } from "../../model/api/mutations";
import styles from "./VerifyEmail.module.scss";

interface LoginFormProps {
	className?: string;
}

export const VerifyEmail = ({ className }: LoginFormProps) => {
	const params = useSearchParams();
	const token = params?.get("token");
	const router = useRouter();
	const [verify, { error }] = useMutation(Verify, {
		client,
	});
	useEffect(() => {
		verify({
			variables: { token },
		});
	}, [token, verify]);
	return (
		<div className={clsx(styles.Verify, className)}>
			<h1 style={{ textAlign: "center" }}>
				{error
					? "Verification token is invalid"
					: "Your email is now verified"}
			</h1>
			{!error && (
				<p style={{ marginTop: "30px" }}>
					Do not refresh the page. <br /> You will be redirected to
					login page in{" "}
					<Timer
						time="5"
						timeoutAction={() => {
							router.push("/login");
						}}
					/>{" "}
					seconds
				</p>
			)}
		</div>
	);
};
