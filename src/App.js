import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHome from './pages/PageHome';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PageHome} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
