import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";
import { QueryClient,QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <InjectTailwind>
      <App />
    </InjectTailwind>
     </QueryClientProvider>
   
  </React.StrictMode>
);
