import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize=6;
  
  render() {
    return (  
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color="#f11946"
        progress={100}
        height={3}

      />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
