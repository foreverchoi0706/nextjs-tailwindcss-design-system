import { queryOptions } from "@tanstack/react-query";
import type { Todo } from "./index.d";

const queryFn = async (todoId: number) => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
		if (response.ok === false) {
			const text = await response.text();
			throw new Error(text);
		}
		const json = await response.json();
		return json as Todo;
	} catch (reason) {
		throw new Error(reason as string);
	}
};

export default (todoId: number) =>
	queryOptions({
		queryKey: ["todo", todoId],
		queryFn: () => queryFn(todoId),
	});
