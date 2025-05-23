import { createContext, useContext, type ReactNode, type PropsWithChildren } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export interface QueryCaseContext {
	readonly className?: string;
	readonly errorCase?: ReactNode;
	readonly errorClassName?: string;
	readonly emptyCase?: ReactNode;
	readonly emptyClassName?: string;
	readonly loadingCase?: ReactNode;
}

const QueryCaseContext = createContext<QueryCaseContext>({});

export const QueryCaseProvider = ({
	children,
	className,
	errorCase,
	errorClassName,
	emptyCase,
	emptyClassName,
	loadingCase,
}: PropsWithChildren<QueryCaseContext>) => {
	return (
		<QueryCaseContext.Provider
			value={{ className, errorCase, errorClassName, emptyCase, emptyClassName, loadingCase }}
		>
			{children}
		</QueryCaseContext.Provider>
	);
};

export const QueryCase = <T,>({
	className,
	emptyCase,
	emptyClassName,
	errorCase,
	errorClassName,
	loadingCase,
	query,
	render,
}: {
	query: UseQueryResult<T, Error>;
	render: (data: NonNullable<T>) => ReactNode;
} & QueryCaseContext) => {
	const queryCaseContext = useContext(QueryCaseContext);

	const isDataFalsy =
		query.data === null ||
		query.data === undefined ||
		(Array.isArray(query.data) && query.data.length === 0);

	const appliedLoadingCase = loadingCase ?? queryCaseContext.loadingCase;
	const appliedLoadingClassName = className ?? queryCaseContext.className;

	const appliedErrorCase = errorCase ?? queryCaseContext.errorCase;
	const appliedErrorClassName =
		errorClassName ?? queryCaseContext.errorClassName ?? appliedLoadingClassName;

	const appliedEmptyCase = emptyCase ?? queryCaseContext.emptyCase;
	const appliedEmptyClassName =
		emptyClassName ?? queryCaseContext.emptyClassName ?? appliedLoadingClassName;

	/** Loading Case */
	if (query.isLoading)
		return (
			<div className={appliedLoadingClassName}>
				{appliedLoadingCase ?? (
					<svg
						data-testid="loading-svg"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						width={32}
						height={32}
						color="oklch(62.3% 0.214 259.815)"
						style={{ animation: "spin 1s linear infinite" }}
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				)}
			</div>
		);

	/** Error Case */
	if (query.isError)
		return (
			<div className={appliedErrorClassName}>
				{appliedErrorCase ?? (
					<svg
						data-testid="error-svg"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						width={32}
						height={32}
						color="oklch(62.3% 0.214 30)"
					>
						<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
						<path
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							d="M8 8l8 8M16 8l-8 8"
						/>
					</svg>
				)}
			</div>
		);

	/** Empty Case */
	if (isDataFalsy && query.isFetched)
		return <div className={appliedEmptyClassName}>{appliedEmptyCase}</div>;

	/** Render Case */
	if (!query.data) return null;
	return render(query.data);
};
