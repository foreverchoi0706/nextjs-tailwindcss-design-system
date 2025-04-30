import React from "react";
import Button from "@design-system/ui/atoms/Button";
import Input from "@design-system/ui/atoms/Input";

function App() {
	return (
		<main className="bg-red-300">
			<Input />
			<Button onClick={() => alert("Button")} variant="primary" size="lg">
				Buttonㅇㅁㄴㅇㅇㅁㄴㅇㅇㅁㄴㅇㅇㅁㄴㅇㅇㅁㄴㅇㅇㅁㄴㅇㅇ
			</Button>
		</main>
	);
}

export default App;
