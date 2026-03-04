import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./providers/AppProviders";


function App() {
  return (
    <>
      <BrowserRouter>
       <AppProvider>
          <AppRoutes />
       </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
