import { ImageKitProvider } from "@imagekit/next";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<ImageKitProvider urlEndpoint={process.env.URL_ENDPOINT}>
				{children}
			</ImageKitProvider>
		</SessionProvider>
	);
}
