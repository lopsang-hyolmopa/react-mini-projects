import { Route } from "react-router-dom";

import Layout from "./Layout.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import User from "./components/User.tsx";
import Github, { fetchGithubProfile } from "./components/Github.tsx";

export const App = (
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user">
      <Route path=":userId" element={<User />} />
    </Route>
    <Route path="github" element={<Github />} loader={fetchGithubProfile} />
  </Route>
);
