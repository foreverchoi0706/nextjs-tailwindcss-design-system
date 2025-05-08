import { queryOptions } from "@tanstack/react-query";
import type { Todo } from "./index.d";

const queryFn = async (todoId: number) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
	const json = await response.json();
	return json as Todo;
};

export default (todoId: number) =>
	queryOptions({
		queryKey: ["todo", todoId],
		queryFn: () => queryFn(todoId),
	});
