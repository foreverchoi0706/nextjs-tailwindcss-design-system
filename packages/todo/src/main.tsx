import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import { QueryCaseProvider } from "query-case";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<QueryCaseProvider>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryCaseProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
