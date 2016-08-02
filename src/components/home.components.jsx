var React = require('react');
var TypeWriter = require('react-typewriter');
var SmoothScroll = require('smoothscroll');

var HomePage = React.createClass({
    /*showNextPage : function(){
      var element = document.getElementById("about");
      element.scrollIntoView({behavior: "smooth"});
    },*/                                                //Not supported in Chrome :/ Implemented smoothscroll library
    showNextPage : function(){
      var element = document.getElementById("about");
      SmoothScroll(element);
    },
    render : function(){
        var homeStyle={
          background : '#DE8642',
          height: '100vh'
        };
        var headingStyle={
          color: '#4B4D52',
          fontSize:'750%',
          fontFamily:'Pacifico' 
        };
        var contentStyle={
          color:'#393939',
          fontSize:'40px',
          fontFamily:'Pacifico'
        };
        var delays = [
        {
          // At ..., increase the delay.
          at: '...',
          delay: 400
        },
        {
          // Add a 100ms delay following every period character.
          at: '.',
          delay: 100
        }];
        return(
           <div style={homeStyle}>
            <div className='container'>
              <h1 className='hello text-center' style={headingStyle}>hello</h1>
              <TypeWriter typing={1} onTypingEnd={this.showNextPage} delayMap={this.delays}>
                <p style={contentStyle}>Welcome to my github portfolio.<br />
                When I'm not busy binge watching shows, gaming, reading, copying college assignments
                or simply whiling time away on the internet...
                <br/>
                I &lt;code&gt; :)</p>
              </TypeWriter>

              {/*<ReactCSSTransitionGroup transitionName="tv" transitionEnterTimeout={500} transitionLeaveTimeout={false}>
                {items}
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={false}>
                {items}
              </ReactCSSTransitionGroup>*/}

            </div>
           </div>
       );
   } 
});

module.exports = HomePage;