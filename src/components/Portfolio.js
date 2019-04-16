import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <article className="container box style2">
  				<header>
  					<h2>Magnis parturient</h2>
  					<p>Justo phasellus et aenean dignissim<br />
  					placerat cubilia purus lectus.</p>
  				</header>
  				<div className="inner gallery">
  					<div className="row gtr-0">
  						<div className="col-3 col-12-mobile"><a href="images/fulls/01.jpg" className="image fit"><img src="images/thumbs/01.jpg" alt="" title="Ad infinitum" /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" alt="" title="Dressed in Clarity" /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" alt="" title="Raven" /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" alt="" title="I'll have a cup of Disneyland, please" /></a></div>
  					</div>
  					<div className="row gtr-0">
  						<div className="col-3 col-12-mobile"><a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" alt="" title="Cherish" /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" alt="" title="Different." /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/07.jpg" className="image fit"><img src="images/thumbs/07.jpg" alt="" title="History was made here" /></a></div>
  						<div className="col-3 col-12-mobile"><a href="images/fulls/08.jpg" className="image fit"><img src="images/thumbs/08.jpg" alt="" title="People come and go and walk away" /></a></div>
  					</div>
  				</div>
  			</article>
      </div>
    );
  }
}

export default Portfolio;
