import React from "react";
// import { Link as ReachRouterLink } from "react";

export default function About() {
  return (
    <div>
      <div className="about--div">
        <h4 className="abouth">Vigneshwar M</h4>
        <p className="aboutp">System Analyst IT</p>
      </div>

      <div className="aboutButtons">
        {/* <button class="btn" href="mailto:mvigneshwar1404@gmail.com">
          <i class="fa fa-google"></i> Mail
        </button>
        <button class="btn">
          <i class="fa fa-linkedin-square"></i> LinkedIn
        </button> */}
        <form action="mailto:mvigneshwar1404@gmail.com">
          <button className="btn mail">
            <i class="fa fa-google maili"></i> Mail
          </button>
        </form>
        <form action="https://linkedin.com/in/vigneshwar-m-22a3231b8">
          <button className="btn linkedin">
            <i class="fa fa-linkedin-square"></i> LinkedIn
          </button>
        </form>
      </div>
      <div className="intro">
        <h3>About</h3>
        <p>
          I am working in flex as system analyst for last 3 years, having good
          knowledge in RDMS Oracle and SQL server and am always looking for new
          things to learn.
        </p>
        <h3>Interests</h3>
        <p>UI Development, Photography, Movies, Cricket</p>
      </div>
      <div className="footer--div">
        <form action="#">
          <button className="footerbtn">
            <i class="fa fa-twitter"></i>
          </button>
        </form>
        <form action="https://www.facebook.com/vigneshwar.magudeeswaran">
          <button className="footerbtn">
            <i class="fa fa-facebook-square"></i>
          </button>
        </form>
        <form action="https://www.instagram.com/vigneshwar_viki">
          <button className="footerbtn">
            <i class="fa fa-instagram"></i>
          </button>
        </form>
        <form action="https://github.com/igneshwar">
          <button className="footerbtn">
            <i class="fa fa-github"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
