import { queryOptions } from "@tanstack/react-query";
import type { Todo } from "@/apis/getTodo/index.d";

const queryFn = async (title?: string) => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos${title ? `?title=${title}` : ""}`,
		);
		if (response.ok === false) {
			const text = await response.text();
			throw new Error(text);
		}
		const json = await response.json();
		return json as Todo[];
	} catch (reason) {
		throw new Error(reason as string);
	}
};

export default (title?: string) =>
	queryOptions({
		queryKey: ["todo", "list", title],
		queryFn: () => queryFn(title),
	});
