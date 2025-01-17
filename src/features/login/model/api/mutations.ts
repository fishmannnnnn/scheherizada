import { gql } from "@apollo/client";

export const Login = gql`
	mutation Login($email: String!, $password: String!) {
		loginCustomer(email: $email, password: $password) {
			user {
				email
			}
			exp
			token
		}
	}
`;
