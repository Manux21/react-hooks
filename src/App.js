import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-4">
        <Home/>
      </div>
    </>
  );
}

export default App;
