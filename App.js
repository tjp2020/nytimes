import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 


var queryURL = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys/";

$.getJSON(queryURL, function (data) {
  
  var results = data.query.results
  var firstResult = results.channel.item.condition
  console.log(firstResult);
  
  var location = 'Unknown' // not returned in response
  var temp = firstResult.temp
  var text = firstResult.text
  
  $('#output').append(temp+"℉");
  
})




var objToday = new Date(),
  weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
  dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth + ", " + curYear;


document.getElementById("date").innerHTML=today;


class App extends Component {
  constructor (props){
    super(props);
    this.state={shown:false};
  }
  highlight(){
    if(this.state.shown){
      this.setState({'shown': false});
    }
    else {
      this.setState({'shown': true});
    }
    
  }

  render() {
    let dropdown = null;
    if(this.state.shown){
      console.log(this.state.shown);
      dropdown =
    <div id="myDropdown" class="dropdown-content, shown">
            <a href="#about">Homepage</a>
            <a href="#base">World</a>
            <a href="#blog">U.S.</a>
            <a href="#contact">Politics</a>
            <a href="#custom">N.Y.</a>
            <a href="#support">Business</a>
            <a href="#tools">Opinion</a>
            <a>Tech</a>
            <a>Science</a>
            <a>Health</a>
            <a>Sports</a>
          </div>;
        }
    return (
      <div>
        <button onClick={(e)=>this.highlight(e)} class="sections-button">SECTIONS</button>
          {dropdown}
        </div>
    );
  }
}



 export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);