import { QueryClient, QueryClientProvider } from "react-query";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Login from './Login';
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Header />
      <Login />
      <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
