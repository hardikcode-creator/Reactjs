import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Display from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
function App() {



  return (
      <center class="px-4 py-5 my-5 text-center">
      <Container>
      <Header></Header>
    <div class="col-lg-6 mx-auto">
      <Display/>
    <Controls></Controls>
    </div>
    </Container>
  </center>
 
);
}

export default App;
