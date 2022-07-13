
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './reduxstore/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <HooksCakeContainer></HooksCakeContainer>
     <CakeContainer></CakeContainer>
     <IceCreamContainer></IceCreamContainer>
    </div>
    </Provider>
  );
}

export default App;
