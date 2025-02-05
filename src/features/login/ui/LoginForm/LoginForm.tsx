"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { ApolloError, useMutation } from "@apollo/client";

import { Login } from "../../model/api/mutations";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const router = useRouter();

	const [loginData, setLoginData] = useState({ email: "", password: "" });

	const [login] = useMutation(Login, {
		client,
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			const res = await login({
				variables: {
					email: loginData.email,
					password: loginData.password,
				},
			});
			if (res.data) {
				router.push("/profile");
			}
		} catch (e) {
			if (e instanceof ApolloError) {
				toast.error(e.message);
			} else {
				console.log("Unknown error");
			}
		}
	};

	const onChangeEmail = (value: string) => {
		setLoginData(prev => ({ ...prev, email: value }));
	};

	const onChangePassword = (value: string) => {
		setLoginData(prev => ({ ...prev, password: value }));
	};

	return (
		<form className={clsx(styles.Form, className)} onSubmit={handleSubmit}>
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
