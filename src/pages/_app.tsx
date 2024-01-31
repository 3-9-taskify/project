import type { AppProps } from "next/app";
import React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/base.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NiceModal.Provider>
        <Component {...pageProps} />
      </NiceModal.Provider>
    </QueryClientProvider>
  );
}
