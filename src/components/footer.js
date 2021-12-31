import React from "react";
export default function Footer() {
  return (
    <div className="footer--div">
      <form action="#">
        <button className="footerbtn">
          <i class="fa fa-twitter"></i>
        </button>
      </form>
      <form action="#">
        <button className="footerbtn">
          <i class="fa fa-facebook-square"></i>
        </button>
      </form>
      <form action="#">
        <button className="footerbtn">
          <i class="fa fa-instagram"></i>
        </button>
      </form>
      <form action="#">
        <button className="footerbtn">
          <i class="fa fa-github"></i>
        </button>
      </form>
    </div>
  );
}
