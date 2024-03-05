import Image from "next/image";

export const Loader = () => {
	return (
		<div className="h-full flex flex-col gap-y-4 item-center justify-center">
			<div className=" ml-6 w-10 h-10 relative animate-spin">
				<Image fill src="/logo.png" alt="logo" />
			</div>
			<p className="text-sm text-muted-foreground">Genius is thinking..</p>
		</div>
	);
};
