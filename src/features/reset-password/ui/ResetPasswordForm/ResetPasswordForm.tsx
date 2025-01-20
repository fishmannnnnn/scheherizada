"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { ApolloError, useMutation } from "@apollo/client";

import { ResetPassword } from "../../model/api/mutations";
import styles from "./ResetPasswordForm.module.scss";

interface ResetPasswordFormProps {
	className?: string;
}

export const ResetPasswordForm = ({ className }: ResetPasswordFormProps) => {
	const params = useSearchParams();
	const token = params?.get("token");

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [password, setPassword] = useState("");
	const [duplicatedPassword, setDuplicatedPassword] = useState("");

	const [resetPassword] = useMutation(ResetPassword, {
		client,
	});

	const onChangePassword = (value: string) => {
		setPassword(value);
	};

	const onChangeDuplicatedPassword = (value: string) => {
		setDuplicatedPassword(value);
	};

	const validatePassword = () => {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
		return passwordRegex.test(password);
	};

	const validateDuplicatedPassword = () => {
		return password === duplicatedPassword;
	};

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (!validatePassword()) {
			toast.error(
				`Password should be minimum 8 characters long and contain at least 1 digit, 1 lower case and 1 upper case character`,
			);
		}
		if (!validateDuplicatedPassword()) {
			toast.error("Passwords do not match");
		}
		if (validatePassword() && validateDuplicatedPassword()) {
			setButtonDisabled(true);
			try {
				const res = await resetPassword({
					variables: { token, password },
				});

				if (res?.data) {
                    toast("The password was reset")
				}
			} catch (e) {
				if (e instanceof ApolloError) {
					toast.error(e.message);
				} else {
					console.error("Unknown error");
				}
			}
		}
	};
	return (
		<form className={clsx(styles.Form, className)} onSubmit={handleSubmit}>
			<Input
				inputType="password"
				className={styles.input}
				placeholder={"New password"}
				onChange={onChangePassword}
				value={password}
				autoComplete="new-password"
			/>
			<Input
				inputType="password"
				className={styles.input}
				placeholder={"Confirm password"}
				onChange={onChangeDuplicatedPassword}
				value={duplicatedPassword}
				autoComplete="new-password"
			/>
			<Button
				className={styles.btn}
				type="submit"
				theme={ButtonTheme.ACCENT}
				disabled={buttonDisabled}
			>
				Reset
			</Button>
		</form>
	);
};
