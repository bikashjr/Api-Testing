import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Routing, } from './Routing/routes';

import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routing />
    </>
  );
}

export default App;
