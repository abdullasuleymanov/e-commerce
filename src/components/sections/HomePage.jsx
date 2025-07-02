import "./HomePage.css";


export const HomePage = () => {
  return (
    <>
      <div className="main-section">
        <div className="scooter-img">
            {/* flex */}
            <div className="container-section">
                {/* uc dene */}
                <div className="section-text">
                    <div className="price-text">$395.70</div>
                    <div className="header-text">B6 Electric Scooter</div>
                    <div className="scooter-about-text">Powerful Motor $ Long Battery Life - The 500w powerful <br /> electric brushless hub motor allows for speeds up to 19mph </div>
                </div>
                {/* properties */}
                <div className="scooter-properties">
                    <div className="property">WIRELESS CONNECT</div>
                    <div className="property">POWERFUL BATTERY</div>
                    <div className="property">LONG RANGE</div>
                    
                </div>
                {/* button */}
                <div>
                <button className="shopping-now">Shopping Now</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};