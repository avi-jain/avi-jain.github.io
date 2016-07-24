var React = require('react');
var TypeWriter = require('react-typewriter');

var HomePage = React.createClass({
    showNextPage : function(){
      var element = document.getElementByID("about");
      element.scrollIntoView();
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
        }
        return(
           <div style={homeStyle}>
            <div className='container'>
              <h1 className='hello text-center' style={headingStyle}>hello</h1>
              <TypeWriter typing={1} onTypingEnd={this.showSkills}>
                <p style={contentStyle}>Welcome to my github portfolio.<br />
                When I'm not busy binge watching shows, gaming, reading, copying college assignments
                or simply whiling time away on the internet...
                <br/>
                I code :)</p>
              </TypeWriter>
            </div>
           </div>
       );
   } 
});

module.exports = HomePage;