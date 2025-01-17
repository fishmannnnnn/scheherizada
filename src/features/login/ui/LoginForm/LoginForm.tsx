"use client";

import clsx from "clsx";
import { SyntheticEvent, useState } from "react";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useMutation } from "@apollo/client";

import { Login } from "../../model/api/mutations";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const [loginData, setLoginData] = useState({ email: "", password: "" });

	const [login, { loading, data }] = useMutation(Login, {
		client,
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		await login({
			variables: { email: loginData.email, password: loginData.password },
		});
		console.log(data, loading, loginData);
	};

	const onChangeEmail = (value: string) => {
		setLoginData(prev => ({ ...prev, email: value }));
	};

	const onChangePassword = (value: string) => {
		setLoginData(prev => ({ ...prev, password: value }));
	};

	return (
		<form
			className={clsx(styles.LoginForm, className)}
			onSubmit={handleSubmit}
		>
			<Input
				className={styles.input}
				placeholder={"Enter email"}
				onChange={onChangeEmail}
				value={loginData.email}
				autoFocus
                autoComplete="email"
			/>
			<Input
				inputType="password"
				className={styles.input}
				placeholder={"Password"}
				onChange={onChangePassword}
				value={loginData.password}
                autoComplete="current-password"
			/>
			<Input
				className={styles.input}
				placeholder={"Confirmation code"}
				// onChange={onChangeEmail}
				// value={loginData.email}
			/>
			<Button
				className={styles.btn}
				type="submit"
				theme={ButtonTheme.ACCENT}
			>
				SIGN IN
			</Button>
		</form>
	);
};
