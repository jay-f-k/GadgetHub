"use client";
import { SessionProvider } from "next-auth/react";

interface SessionProps {
	session: any;
	children: any;
}
export default function App({ children, session }: SessionProps) {
	return <SessionProvider session={session!}>{children}</SessionProvider>;
}
