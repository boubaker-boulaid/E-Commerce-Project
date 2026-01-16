import { Link } from "react-router-dom";
import Collections from "../../components/Collections/Collections";
import InstaPosts from "../../components/InstaPosts/InstaPosts";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <section
        className="section hero"
        style={{ backgroundImage: "url('./assets/images/hero-banner.png')" }}
      >
        <div className="container">
          <h2 className="h1 hero-title">
            New Summer <strong>Shoes Collection</strong>
          </h2>

          <p className="hero-text">
            Competently expedite alternative benefits whereas leading-edge
            catalysts for change. Globally leverage existing an expanded array
            of leadership.
          </p>

          <Link to="/products" className="btn btn-primary">
            <span>Shop Now</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </Link>
        </div>
      </section>
      <Collections />
      <InstaPosts />
    </>
  );
};

export default Landing;
