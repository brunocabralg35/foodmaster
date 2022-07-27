import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { MyProvider } from "./MyContext";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
