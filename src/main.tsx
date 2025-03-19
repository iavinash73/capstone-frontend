import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.tsx";
import "./index.css";
import {
  AuthCaptainContextProvider,
  AuthUserContextProvider,
  SocketContextProvider,
} from "./providers/index.ts";
import "mapbox-gl/dist/mapbox-gl.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SocketContextProvider>
      <BrowserRouter>
        <AuthCaptainContextProvider>
          <AuthUserContextProvider>
            <ToastContainer
              hideProgressBar={false}
              position="top-right"
              newestOnTop={false}
              pauseOnFocusLoss
              autoClose={3000}
              theme="light"
              closeOnClick
              pauseOnHover
              rtl={false}
              draggable
            />
            <App />
          </AuthUserContextProvider>
        </AuthCaptainContextProvider>
      </BrowserRouter>
    </SocketContextProvider>
  </StrictMode>
);
