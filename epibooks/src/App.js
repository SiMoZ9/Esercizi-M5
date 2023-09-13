import MyNav from "./components/MyNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="App">
        <MyNav />
        <Welcome />
        <Main />
        <MyFooter />
    </div>
  );
}

export default App;
