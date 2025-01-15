import { createRoot } from "react-dom/client";
import "@app/styles/index.scss";
import App from "@app/App";
import { StoreProvider } from "@app/providers";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
