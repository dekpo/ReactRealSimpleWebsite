import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PagePorfolio from './pages/PagePorfolio';
import PageAbout from './pages/PageAbout';
import PageContact from './pages/PageContact';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/contact" component={PageContact} /> 
        <Route path="/about" component={PageAbout} />
        <Route path="/portfolio" component={PagePorfolio} />
        <Route path="/" component={PageHome} />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
