import { Loader, Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
				<div className="flex h-screen items-center justify-center">
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
	);
}