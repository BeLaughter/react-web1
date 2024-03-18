import "./App.css";
import Card from "./Card";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Card
        img="./pic01.jpg"
        name="Benson Iremide"
        email="Iremide23@gmail.com"
      />

      <Card img="./pic02.jpg" name="Benson Isaac" email="Isaac123@gmail.com" />

      <Card
        img="./pic03.jpg"
        name="Benson ayomide"
        email="Ayomide423@gmail.com"
      />

      <Footer text="I AM A FOOTER" />
    </div>
  );
}

export default App;
