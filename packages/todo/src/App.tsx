import { type ChangeEvent, useEffect, useRef, useState, type MouseEvent } from 'react';

import { debounceTime, fromEvent, map, distinctUntilChanged, tap, scan } from 'rxjs';

const App = () => {
	const refButton = useRef<HTMLButtonElement>(null);
	const refInput = useRef<HTMLInputElement>(null);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (refButton.current === null) return;
		const subscription = fromEvent<MouseEvent<HTMLButtonElement>>(
			refButton.current,
			'click'
		).subscribe();

		return () => subscription.unsubscribe();
	}, []);

	useEffect(() => {
		if (refInput.current === null) return;
		const subscription = fromEvent<ChangeEvent<HTMLInputElement>>(refInput.current, 'input')
			.pipe(map((event) => event.target.value))
			.subscribe(console.log);

		return () => subscription.unsubscribe();
	}, []);

	return (
		<main className="mx-auto my-0 flex h-screen max-w-2xl flex-col gap-2 border-gray-200">
			<input className="rounded-md border border-gray-200 p-2" type="text" ref={refInput} />
			<button className="rounded-md bg-blue-500 p-2 text-white" type="button" ref={refButton}>
				전송
			</button>
		</main>
	);
};

export default App;
