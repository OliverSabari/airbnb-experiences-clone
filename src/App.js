
import './App.css';

import Header from './Components/Header';
import Imagegrid from './Components/Imagegrid';


import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Components/Description';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Imagegrid />
      <Description/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
