import './App.css'
import './styles/variables.sass'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes/appRouter';
import Template from './components/layout/template';

function App() {
  return (
    <div className="App">
      <Router>
        <Template>
          <Routes>
            {appRoutes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>
        </Template>
      </Router>
    </div>
  );
}

export default App;