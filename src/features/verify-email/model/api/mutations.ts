import { gql } from "@apollo/client";

export const Verify = gql`
	mutation Verify($token: String!) {
		verifyEmailCustomer(token: $token)
	}
`;
