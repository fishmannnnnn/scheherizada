"use client";

import { ReactNode } from "react";

import { client } from "@/shared/config/graphql";
import { ApolloProvider } from "@apollo/client";

export const GraphqlProvider = ({ children }: { children: ReactNode }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
