import { gql } from "@apollo/client";

export const Forgot = gql`
	mutation Forgot($email: String!) {
		forgotPasswordCustomer(email: $email)
	}
`;
