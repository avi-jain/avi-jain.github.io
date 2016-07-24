var React = require("react");
var ReactDom = require("react-dom");

var HomePage = require('./components/home.components.jsx');
var Footer   = require('./components/footer.components.jsx');
var About    = require('./components/about.components.jsx');

var Container = React.createClass({
	render : function(){
		return(
				<div>
				<HomePage/>
				<About/>
				<Footer/>
				</div>
			);
	}
});
ReactDom.render(<Container />,document.getElementById('content'));