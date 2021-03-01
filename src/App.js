import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import HomeContent from "./content/homeContent"
import GalleryContent from "./content/aboutContent"
import ContactContent from "./content/contentContent"

function App() {
  return (
    <Router>
      <div>
        <nav className="navigationBox">
          <ul>
            <li>
              <Link to="/" className="navLink">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="navLink">Gallery</Link>
            </li>
            <li>
              <Link to="/users" className="navLink">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/users">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <HomeContent />;
}

function Gallery() {
  return <GalleryContent />;
}

function Contacts() {
  return <ContactContent />;
}

export default App;