var React = require('react');
var TypeWriter = require('react-typewriter');

var About = React.createClass({
    
    render : function(){

        var aboutStyle={
          background : '#5C978F' ,
          height: ' 100vh'
        };
        var textStyle={
          fontSize:'2.5em',
          color:'#393939',
          fontFamily:'Bungee Shade',
          fontWeight:'bold',
          marginTop:'10px'
        };
        var anotherTextStyle={
          fontSize:'3.5em',
          color:'#393939',
          fontFamily:'Bungee Shade',
          fontWeight:'bold',
          marginTop:'30px'
        };
        var yetAnotherTextStyle={
          fontSize:'2.5em',
          color:'#393939',
          fontFamily:'Bungee Shade',
          fontWeight:'bold',
          marginTop:'60px'
        };
        var socialStyle={
          width:'40px',
          height:'40px',
          margin:'5px'
        }
        var logoStyle={
          width:'100px',
          height:'100px',
          margin:'6px'
        }
        var spanStyle={
          float:'none', 
          display:'block',
          marginLeft:'auto',
          marginRight:'auto'
        }
        return(
           <div  id="about" style={aboutStyle}>
            <div className='about container'>
                <p className='text-center' style={textStyle}>I happen to know a bit about</p>
                {/*Center this shit. Have to specify .png for logos.*/}
                <span style={spanStyle}>
                {/*Add links to the logos.Add tooltips and accessibility options*/}
                <img src="./../public/img/HTML5_Logo.png" style={logoStyle} />
                <img src="./../public/img/css3logo.png" style={logoStyle} />
                <img src="./../public/img/js_logo.png" style={logoStyle} />
                <img src="./../public/img/bootstrap_logo.png" style={logoStyle} />
                <img src="./../public/img/react-logo.png" style={logoStyle} />
                <img src="./../public/img/nodejs-logo.png" style={logoStyle} />
                </span>  
                <p className='text-center' style={anotherTextStyle}> Building something with React? I could help.</p>
                <p className='text-center' style={yetAnotherTextStyle}> Reach out to me on </p>
                <span className=''>{/*Center this shit.Providing cdns(links) will reduce load time.*/}
                <a href><img src="./../public/img/Tinder-Flame.png" style={socialStyle} className="tinder" onMouseOver={this.src="./../public/img/facebook-icon.png"} onMouseOut={this.src="./../public/img/Tinder-Flame.png"}/></a>
                <a href><img src="./../public/img/trulymadly-logo.png" style={socialStyle} className="hinge" onMouseOver={this.src="./../public/img/Twitter-logo2.png"} onMouseOut={this.src="./../public/img/trulymadly-logo.png"} /></a>
                <a href><img src="./../public/img/hitch_logo.png" style={socialStyle} className="hitch" onMouseOver={this.src="./../public/img/github-256.png"}  /></a>
                </span>  
            </div>
           </div>
       );
   } 
});

module.exports = About;