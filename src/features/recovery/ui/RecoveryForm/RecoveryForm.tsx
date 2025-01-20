"use client";

import clsx from "clsx";
import { SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { ApolloError, useMutation } from "@apollo/client";

import { Forgot } from "../../model/api/mutations";
import styles from "./RecoveryForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const RecoveryForm = ({ className }: LoginFormProps) => {
	const [email, setEmail] = useState("");
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const onChangeEmail = (value: string) => {
		setEmail(value);
		if (buttonDisabled) setButtonDisabled(false);
	};

	const [forgot] = useMutation(Forgot, {
		client,
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		setButtonDisabled(true);
		try {
			const res = await forgot({
				variables: { email: email },
			});

			if (res?.data) {
				toast.success("The email was sent")
			}
		} catch (e) {
			if (e instanceof ApolloError) {
				toast.error(e.message);
			}
		}
	};

	return (
		<form className={clsx(styles.Form, className)} onSubmit={handleSubmit}>
			<Input
				className={styles.input}
				placeholder={"Enter email"}
				onChange={onChangeEmail}
				value={email}
				autoFocus
				autoComplete="email"
			/>
			<Button
				className={styles.btn}
				type="submit"
				theme={ButtonTheme.ACCENT}
				disabled={buttonDisabled}
			>
				SIGN UP
			</Button>
		</form>
	);
};
