var React = require('react');
var TypeWriter = require('react-typewriter');

var About = React.createClass({
    getInitialState(){
      return{
        tinder:"./../public/img/Tinder-Flame.png",
        hitch:"./../public/img/hitch_logo.png",
        twitter:"./../public/img/Twitter-logo2.png",
        facebook:"./../public/img/facebook-icon.png",
        github:"./../public/img/github-256.png",
        trulymadly:"./../public/img/trulymadly-logo.png",

        hover:false
      }
    },
    onMouseOver: function(){
      this.setState({hover:true});
    },
    onMouseOut:function(){
      this.setState({hover:false});
    },
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
                <div className='text-center skills'>
                <span style={spanStyle}>
                {/*Add links to the logos.Add tooltips and accessibility options*/}
                <img src="./../public/img/HTML5_Logo.png" style={logoStyle} />
                <img src="./../public/img/css3logo.png" style={logoStyle} />
                <img src="./../public/img/js_logo.png" style={logoStyle} />
                <img src="./../public/img/bootstrap_logo.png" style={logoStyle} />
                <img src="./../public/img/react-logo.png" style={logoStyle} />
                <img src="./../public/img/nodejs-logo.png" style={logoStyle} />
                </span>
                </div>  
                <p className='text-center' style={anotherTextStyle}> Building something with React? I could help.</p>
                <p className='text-center' style={yetAnotherTextStyle}> Reach out to me on </p>
                <div className='text-center socials'>
                <span className=''>{/*Center this shit.Providing cdns(links) will reduce load time.*/}
                {/*As soon as any icon is hovered upon, they all change :)*/}
                <a href="https://github.com/avi-jain"><img src={this.state.hover? this.state.github:this.state.tinder} 
                style={socialStyle} className="tinder" 
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}/></a>
                
                <a href="https://www.facebook.com/avi.jain.524596"><img src={this.state.hover? this.state.facebook:this.state.trulymadly} 
                style={socialStyle} className="trulymadly" 
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} /></a>
                
                <a href="https://twitter.com/"><img src={this.state.hover? this.state.twitter:this.state.hitch} 
                style={socialStyle} className="hitch" 
                onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} /></a>
                </span>
                </div>  
            </div>
           </div>
       );
   } 
});

module.exports = About;