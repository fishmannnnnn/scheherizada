"use client";

import clsx from "clsx";
import { SyntheticEvent, useState } from "react";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useMutation } from "@apollo/client";

import { Register } from "../../model/api/mutations";
import styles from "./RegisterForm.module.scss";

interface RegisterFormProps {
	className?: string;
}

export const RegisterForm = ({ className }: RegisterFormProps) => {
	const [registerData, setRegisterData] = useState({
		email: "",
		password: "",
		duplicatedPassword: "",
	});

	const [register, { loading, data }] = useMutation(Register, {
		client,
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (!validateEmail()) {
			console.log("Invalid email");
		}
		if (!validatePassword()) {
			console.log("Invalid password");
		}
		if (!validateDuplicatedPassword()) {
			console.log("Passwords do not match");
		}
		if (
			validateEmail() &&
			validatePassword() &&
			validateDuplicatedPassword()
		) {
			await register({
				variables: {
					data: {
						email: registerData.email,
						password: registerData.password,
					},
				},
			});
			console.log(data, loading, registerData);
		}
	};

	const onChangeEmail = (value: string) => {
		setRegisterData(prev => ({ ...prev, email: value }));
	};

	const onChangePassword = (value: string) => {
		setRegisterData(prev => ({ ...prev, password: value }));
	};

	const onChangeDuplicatedPassword = (value: string) => {
		setRegisterData(prev => ({ ...prev, duplicatedPassword: value }));
	};

	const validateEmail = () => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(registerData.email);
	};

	const validatePassword = () => {
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
		return passwordRegex.test(registerData.password);
	};

	const validateDuplicatedPassword = () => {
		return registerData.password === registerData.duplicatedPassword;
	};

	return (
		<form
			className={clsx(styles.RegisterForm, className)}
			onSubmit={handleSubmit}
		>
			<Input
				className={styles.input}
				placeholder={"Enter email"}
				onChange={onChangeEmail}
				value={registerData.email}
				autoFocus
                autoComplete="email"
			/>
			<Input
				inputType="password"
				className={styles.input}
				placeholder={"Password"}
				onChange={onChangePassword}
				value={registerData.password}
                autoComplete="new-password"
			/>
			<Input
				inputType="password"
				className={styles.input}
				placeholder={"Confirm password"}
				onChange={onChangeDuplicatedPassword}
				value={registerData.duplicatedPassword}
                autoComplete="new-password"
			/>
			<Input
				className={styles.input}
				placeholder={"Confirmation code"}
			/>
			<Button
				className={styles.btn}
				type="submit"
				theme={ButtonTheme.ACCENT}
				// disabled={!validatePassword()}
			>
				SIGN UP
			</Button>
		</form>
	);
};
