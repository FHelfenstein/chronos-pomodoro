import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router';
import { Home } from '../../pages/Home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { useEffect } from 'react';
import { History } from '../../pages/History';
import { Settings } from '../../pages/Settings';

function ScrollToTop() {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // lógica para voltar ao topo da página toda vez que eu alterar o caminho
  }, [pathName]);

  return null;
}

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='/history/' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}
