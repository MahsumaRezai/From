import { Fragment } from "react";
import Form from './Componet/Form/Form';
import ErroModal from "./Componet/UI/ErrorModal";

function App() {

  return (
    <Fragment>
      <ErroModal />
      <Form />
    </Fragment>
  )
}

export default App;
