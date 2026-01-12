import React from 'react';
import './Collections.css';

const Collections = () => {
  return (
    <section className="section collection">
      <div className="container">
        <ul className="collection-list has-scrollbar">
          <li>
            <div className="collection-card" style={{ backgroundImage: "url('./assets/images/collection-1.jpg')" }}>
              <h3 className="h4 card-title">Men Collections</h3>

              <a href="#" className="btn btn-secondary">
                <span>Explore All</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="collection-card" style={{ backgroundImage: "url('./assets/images/collection-2.jpg')" }}>
              <h3 className="h4 card-title">Women Collections</h3>

              <a href="#" className="btn btn-secondary">
                <span>Explore All</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="collection-card" style={{ backgroundImage: "url('./assets/images/collection-3.jpg')" }}>
              <h3 className="h4 card-title">Sports Collections</h3>

              <a href="#" className="btn btn-secondary">
                <span>Explore All</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collections;