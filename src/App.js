import React from 'react';
import Row from "./Row";
import './App.css';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

// npm i react-youtube
// npm i movie-trailer

function App() {
  return (
    <div className="app">
      <Nav />
    <Banner />
    <Row title="DUGOAFRICA ORIGINALS" fetchUrl={requests.fetchDugoafricaOriginals} isLargeRow/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rates" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   
    </div>
  );
}

export default App;
