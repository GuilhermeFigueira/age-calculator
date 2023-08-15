import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700", "800"],
	style: ["normal", "italic"],
});

export const metadata = {
	title: "Frontend Mentor | Age Calculator App",
	description:
		"A frontendmentor website where you can calculate your full age!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`bg-off_white ${poppins.className}`}>
				{children}
			</body>
		</html>
	);
}
