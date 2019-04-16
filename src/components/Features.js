import React from 'react';

class Features extends React.Component {
  render() {
    return (
      <div>
  			<article id="first" className="container box style1 right">
  				<a href="#" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
  				<div className="inner">
  					<header>
  						<h2>Lorem ipsum<br />
  						dolor sit amet</h2>
  					</header>
  					<p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
  				</div>
  			</article>

  			<article className="container box style1 left">
  				<a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
  				<div className="inner">
  					<header>
  						<h2>Mollis posuere<br />
  						lectus lacus</h2>
  					</header>
  					<p>Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper. Etiam egestas scelerisque ac duis magna lorem ipsum dolor.</p>
  				</div>
  			</article>
      </div>
    );
  }
}

export default Features;
