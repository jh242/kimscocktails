import './App.scss';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Menu } from './views';

import Divider from './assets/divider.png';

function Home() {
  return (
    <div className="container">
      <motion.div
        className="logo"
        animate={{
          opacity: 1,
          y: 20,
          transition: { ease: 'easeOut', duration: 2 },
        }}
      >
        <h1>KIM XIE</h1>
      </motion.div>
      <motion.img
        animate={{
          opacity: 1,
          y: 15,
          transition: { delay: 0.6, ease: 'easeOut', duration: 1.2 },
        }}
        src={Divider}
        alt="divider"
        className="divider"
      />

      <div className="nav">
        <motion.div
          href="#"
          animate={{ opacity: 1, y: 15 }}
          transition={{ delay: 1.2, ease: 'easeOut', duration: 0.6 }}
        >
          <Link to="/menu">Menu</Link>
        </motion.div>
        <motion.div
          href="#"
          animate={{ opacity: 1, y: 15 }}
          transition={{ delay: 1.5, ease: 'easeOut', duration: 0.6 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.div>
        <motion.div
          href="#"
          animate={{ opacity: 1, y: 15 }}
          transition={{ delay: 1.8, ease: 'easeOut', duration: 0.6 }}
        >
          <Link to="/about">About</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}
