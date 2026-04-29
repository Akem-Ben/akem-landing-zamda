import RootRouter from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "./styles/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;