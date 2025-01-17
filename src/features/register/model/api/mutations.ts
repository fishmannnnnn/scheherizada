import { gql } from "@apollo/client";

export const Register = gql`
	mutation Register($data: mutationCustomerInput!) {
		createCustomer(data: $data) {
            email
            updatedAt
        }
	}
`;
