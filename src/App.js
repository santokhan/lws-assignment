import { Provider } from 'react-redux';
// 
import store from './redux/store';
// 
import Header from './component/header/Header';
import Main from './component/main/Main';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header></Header>
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
