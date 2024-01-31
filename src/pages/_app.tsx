import type { AppProps } from "next/app";
import "@/styles/base.scss";
import NiceModal from "@ebay/nice-modal-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NiceModal.Provider>
      <Component {...pageProps} />
    </NiceModal.Provider>
  );
}
