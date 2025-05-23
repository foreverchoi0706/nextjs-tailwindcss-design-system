import { type ChangeEventHandler, useState, useEffect, useRef, type ChangeEvent } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getTodo from "@/apis/getTodo";
import getTodoList from "@/apis/getTodoList";
import { QueryCase } from "query-case";
import { debounceTime, fromEvent, map, distinctUntilChanged } from "rxjs";

const App = () => {
	const refInput = useRef<HTMLInputElement>(null);
	const queryClient = useQueryClient();
	const [todoId, setTodoId] = useState<number | null>(null);
	const [title, setTitle] = useState<string>("");

	const onTodoChange: ChangeEventHandler<HTMLInputElement> = ({ target: { checked, id } }) => {
		queryClient.setQueryData(getTodoList().queryKey, (old) => {
			if (old === undefined) return old;
			return old.map((todo) => ({
				...todo,
				completed: todo.id === Number(id) ? checked : todo.completed,
			}));
		});
	};

	const todoListQuery = useQuery(getTodoList(title));

	const todoQuery = useQuery({ ...getTodo(todoId as number), enabled: todoId !== null });

	useEffect(() => {
		if (refInput.current === null) return;
		const subscription = fromEvent<ChangeEvent<HTMLInputElement>>(refInput.current, "input")
			.pipe(
				map((event) => event.target.value),
				distinctUntilChanged(),
				debounceTime(1000),
			)
			.subscribe((value) => setTitle(value));

		return () => subscription.unsubscribe();
	}, []);

	return (
		<main className="mx-auto my-0 flex h-screen max-w-2xl flex-col gap-2 border-gray-200 border-x">
			<input ref={refInput} type="text" className="w-full p-4" />
			<QueryCase
				className="flex grow items-center justify-center"
				query={todoListQuery}
				emptyCase={<p>검색 결과가 없습니다</p>}
				render={(todoList) => (
					<ul className="flex flex-col justify-center gap-2">
						{todoList.map(({ id, completed, title }) => (
							<li
								className="flex items-center justify-between gap-2 border-gray-200 border-b p-4"
								key={id}
							>
								<label htmlFor={id.toString()}>
									<input
										className="mr-2"
										id={id.toString()}
										onChange={onTodoChange}
										type="checkbox"
										checked={completed}
									/>
									{title}
								</label>
								<button
									className="rounded bg-blue-500 px-2 text-white"
									onClick={() => setTodoId(id)}
								>
									View
								</button>
							</li>
						))}
					</ul>
				)}
			/>
			<QueryCase
				query={todoQuery}
				emptyCase={null}
				render={(todo) => (
					<div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-white p-4">
						<div className="flex flex-col gap-2">
							<div>{JSON.stringify(todo)}</div>
							<button
								onClick={() => {
									queryClient.removeQueries(getTodo(todoId as number));
									setTodoId(null);
								}}
								className="rounded bg-blue-500 px-2 text-white"
							>
								Close
							</button>
						</div>
					</div>
				)}
			/>
		</main>
	);
};

export default App;
