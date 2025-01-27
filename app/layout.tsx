import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import { Roboto_Serif } from "next/font/google";
import { Sancreek } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import { GraphqlProvider } from "@/app/providers/graphql";
import "@/app/styles/index.scss";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";

export const metadata: Metadata = {
	title: "Scheherizada",
	description: "Generated by create next app",
};

export const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	display: "swap",
	variable: "--roboto-slab",
});

export const robotoFlex = Roboto_Flex({
	subsets: ["latin"],
	display: "swap",
	variable: "--roboto-flex",
});

export const robotoSerif = Roboto_Serif({
	subsets: ["latin"],
	display: "swap",
	variable: "--roboto-serif",
});

export const sancreek = Sancreek({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--sancreek",
});

export const algerian = localFont({
	src: "../public/fonts/algerian.ttf",
	variable: "--algerian",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={clsx(
				algerian.variable,
				robotoSlab.variable,
				robotoFlex.variable,
				robotoSerif.variable,
				sancreek.variable,
			)}
		>
			<body>
				<GraphqlProvider>
					<Toaster
						position="top-center"
						reverseOrder={false}
						gutter={8}
						containerClassName=""
						containerStyle={{}}
						toastOptions={{
							className: "",
							duration: 5000,
							removeDelay: 1000,
							style: {
								background: "var(--color-2)",
								color: "var(--black-1)",
								border: "1px solid var(--black-2)",
								fontFamily: "var(--roboto-slab)",
							},
							success: {
								duration: 3000,
								iconTheme: {
									primary: "green",
									secondary: "white",
								},
							},
						}}
					/>
					<Navbar />
					{children}
					<Footer />
				</GraphqlProvider>
			</body>
		</html>
	);
}
