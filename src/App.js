import './css/App.css';
import Navigation from './navigation';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import Home from './components/home';
import Shop from './components/shop';
import About from './components/about';
import ArticlesView from './components/ArticlesView';
import ErrorNotFound from './components/ErrorNotFound';

import Footer from './components/footer';

function App() {
  if(window.location.pathname === '/') {
    window.location = '/home';
  }

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />

          {/* add a find articles (this will be dynamic) */}
          <Route path='/find-articles' component={ArticlesView} />
          
          {/* implement 404 Not Found */}
          <Route path='*' component={ErrorNotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
