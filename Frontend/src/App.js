import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Blogs from "./components/Blogs"
import Art from "./components/Art"
import Postmaster from "./components/Posts/Post"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/Art' component={Art} />
          <Route exact path='/post' component={Postmaster} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
