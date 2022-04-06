import { AuthProvider } from "context/auth-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./styles/main.scss";
import { BrowserRouter as Router } from 'react-router-dom'

export default function AppProviders({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (error.status === 404) return false;
          else if (failureCount < 2) return true;
          else return false;
        }
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          {children}
          <ReactQueryDevtools />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}
