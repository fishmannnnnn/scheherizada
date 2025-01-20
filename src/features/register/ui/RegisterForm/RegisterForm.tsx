"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

import { client } from "@/shared/config/graphql";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { ApolloError, useMutation } from "@apollo/client";

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
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const router = useRouter();
	const [register] = useMutation(Register, {
		client,
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		if (!validateEmail()) {
			toast.error("Invalid email");
		}
		if (!validatePassword()) {
			toast.error(
				`Password should be minimum 8 characters long and contain at least 1 digit, 1 lower case and 1 upper case character`,
			);
		}
		if (!validateDuplicatedPassword()) {
			toast.error("Passwords do not match");
		}
		if (
			validateEmail() &&
			validatePassword() &&
			validateDuplicatedPassword()
		) {
			setButtonDisabled(true);
			try {
				const res = await register({
					variables: {
						data: {
							email: registerData.email,
							password: registerData.password,
						},
					},
				});

                if(res?.data) {
                    router.push("/registration/success");
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

	const onChangeEmail = (value: string) => {
		setRegisterData(prev => ({ ...prev, email: value }));
		if (buttonDisabled) setButtonDisabled(false);
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
		<form className={clsx(styles.Form, className)} onSubmit={handleSubmit}>
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
			<Input className={styles.input} placeholder={"Confirmation code"} />
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
