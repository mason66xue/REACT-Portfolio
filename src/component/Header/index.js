import React from "react";
import Nav from "../Nav";

function Header(props) {


  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Ruochen Liu's Portfolio</h1>
          </div>
          
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

        </div>
      </section>
    </div>
  );
}

export default Header;
