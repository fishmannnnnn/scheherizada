import { gql } from "@apollo/client";

export const GET_DATA = gql`
	query GetData {
		Words {
			docs {
				word
				hash
			}
		}
	}
`;
