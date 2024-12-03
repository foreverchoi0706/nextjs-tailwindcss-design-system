import Button from "@/app/_components/atoms/Button";
import type { NextPage } from "next";

const Page: NextPage = () => {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<Button variant="primary">BUTTON</Button>
		</div>
	);
};

export default Page;
