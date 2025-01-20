import { gql } from "@apollo/client";

export const ResetPassword = gql`
	mutation ResetPassword($token: String!, $password: String!) {
		resetPasswordCustomer(token: $token, password: $password) {
            token
        }
	}
`;
