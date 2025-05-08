import { type ChangeEventHandler, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getTodo from "@/apis/getTodo";
import getTodoList from "@/apis/getTodoList";

function App() {
	const queryClient = useQueryClient();
	const [todoId, setTodoId] = useState<number | null>(null);

	const { data: todo } = useQuery({
		...getTodo(todoId as number),
		enabled: todoId !== null,
	});

	const { data: todoList } = useQuery(getTodoList());

	const onTodoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const { checked, id } = e.target;
		queryClient.setQueryData(getTodoList().queryKey, (old) => {
			if (old === undefined) return old;
			return old.map((todo) => {
				if (todo.id === Number(id)) {
					return { ...todo, completed: checked };
				}
				return todo;
			});
		});
	};

	return (
		<main className="mx-auto my-0 max-w-2xl border-gray-200 border-x">
			{JSON.stringify(todo)}
			<ul className="flex flex-col justify-center gap-2">
				{todoList?.map(({ id, completed, title }) => (
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
						<button className="rounded bg-blue-500 px-2 text-white" onClick={() => setTodoId(id)}>
							View
						</button>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
