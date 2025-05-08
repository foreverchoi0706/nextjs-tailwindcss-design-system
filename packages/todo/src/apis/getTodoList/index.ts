import { queryOptions } from "@tanstack/react-query";
import type { Todo } from "@/apis/getTodo/index.d";

const queryFn = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const json = await response.json();
	return json as Todo[];
};

export default () =>
	queryOptions({
		queryKey: ["todo", "list"],
		queryFn,
	});
