var React = require('react');

var Footer = React.createClass({
	render : function(){
		var footerStyle={
          background : '#212121',
          bottom: '0',
          width: '100%',
    	    height: '40px'
        };
        var footerText={
        	color:'white',
        	fontFamily:'Pacifico',
        	fontSize:'16px'
        }
		return(
				<div className="footer" style={footerStyle}>
        
					<p className="text-center" style={footerText}>Made with &hearts; , &
		      <img src="./../public/img/react-logo.png" className="logo" style={{width:'20px',height:'20px',marginLeft:'4px'}}/>
          </p>
				</div>
			);
	}
});

module.exports = Footer;