import React from "react";

import Header from "../components/Header";
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import forums from '../data/forums.json';

function Resources() {
  return (
    <div className="resources">
      <div className="bg-light-green black bb b--light-green">
        <div className="mw8 center">
          <Header />
          <div className="pt5 bt bw2 b--black mb5 ph3 ph2-l">
            <h1 className='f2 lh-title b mv0'>Resources</h1>
            <h2 className='f3 f4-ns lh-title mv0 normal'>A list of resources to help you get involved.</h2>
          </div>
        </div>
      </div>
      <div className="mw8 center pv5">
        <div className="flex justify-between items-end pb2 bb">
          <h3 className="f3 ma0">Meetups</h3>
          <span className="f5 green b">{forums.length} meetups</span>
        </div>
        {forums.map((item, key) => (
          <a
            href={item.link}
            key={key} target="_blank"
            rel="noopener noreferrer"
            className="dark-gray hover-bg-washed-green bg-animate hover-dark-gray pv4 bb ph3 flex items-center"
          >
            <img src={`https://icotar.com/avatar/${item.title}?s=75`} alt="avatar" height={75} width={75}/>
            <div className="ml4">
              <h4 className="f4 b ma0">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
