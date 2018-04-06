import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body-one">
          <div className="header">
            <h1 className="title">ENGINEERS WEEK 2018</h1>
          </div>
          <div> 
            <h3 className="desc">April 9 - April 13, 2018</h3>
          </div>
          <div>
            <h3 className="desc">Powered by Engineering Society of UCLA</h3>
          </div>
        </div>
        <div className="calendar">
          <h3>Calendar</h3>
        </div>
        <div className="dates">
          <div className="monday">
            <h4>Monday</h4>
            <div className="events">
              <div className="testevent">
                <p className="event-title">Event: Kick-off Social</p>
                <p>Location: Ackerman Grand Ballroom
                <br />Time: 12 - 3 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: #ILookLikeAnEngineer hosted by SWE</p>
                <p>Location: Court of Sciences
                <br />Time: 2 - 3 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: BruinSpace</p>
                <p>Location: Ackerman Grand Ballroom
                <br />Time: 3 - 4 pm</p>
              </div>
            </div>
          </div>
          <div className="tuesday">
            <h4>Tuesday</h4>
            <div className="events">
              <div className="testevent">
                <p className="event-title">Event: Crossword Puzzle Hosted by AIChE</p>
                <p>Location: ESUC Lounge (Boelter 5800)
                <br />Time: 11 am - 12 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: The Suspension is Killing Me: Bridge Building
                with ASCE</p>
                <p>Location: Boelter Hall 2745
                <br />Time: 12 - 1 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: Diversity in Engineering Panel</p>
                <p>Location: Bruin Reception Room
                <br />Time: 7 - 9 pm</p>
              </div>
            </div>
          </div>
          <div className="wednesday">
            <h4>Wednesday</h4>
            <div className="events">
              <div className="testevent">
                <p className="event-title">Event: Boat Race Hosted by Tau Beta Pi</p>
                <p>Time: 11 am - 12 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: Bruins and the Oobleck hosted by Beam</p>
                <p>Time: 12 - 1 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: Coding Challenge hosted by UPE</p>
                <p>Time: 1 - 2 pm</p>
              </div>
            </div>
          </div>
          <div className="thursday">
            <h4>Thursday</h4>
            <div className="events">
              <div className="testevent">
                <p className="event-title">Event: Kid's Day</p>
                <p>Location: Bruin Reception Room
                <br />Time: 9 am - 12 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: Engineers Ball
                with ASCE</p>
                <p>Location: Pavillion Clubhouse
                <br />Time: 6:30 - 9:30 pm</p>
              </div>
            </div>
          </div>
          <div className="friday">
            <h4>Friday</h4>
            <div className="events">
              <div className="testevent">
                <p className="event-title">Event: Book Sale</p>
                <p>Location: ESUC Lounge (Boelter 5800)
                <br />Time: 9 am - 3 pm</p>
              </div>
              <div className="testevent">
                <p className="event-title">Event: Talent Show</p>
                <p>Location: Bruin Reception Room
                <br />Time: 7 - 9 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
