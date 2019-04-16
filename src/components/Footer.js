import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
  			<ul className="icons">
  				<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
  				<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
  				<li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
  				<li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
  				<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
  				<li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
  			</ul>
  			<div className="copyright">
  				<ul className="menu">
  					<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
  				</ul>
  			</div>
  		</section>
    );
  }
}

export default Footer;
