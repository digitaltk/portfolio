import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Skills</h2>
            <p style={{ fontSize: "170%" }}>
              Where innovation meets excellence.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
              <div
                class="icon-box mt-5 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i class="fas fa-code fa-2x" />
                <h4>HTML5 &amp; CSS3 &amp; Javascript</h4>
                <p>
                  Using libraries like Bootstrap &amp; Material-UI to design web
                  applications. My goal as a developer would be to expand and
                  learn more libraries within the standard languages
                </p>
              </div>

              <div
                class="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i class="fab fa-react fa-2x" />
                <h4>Reactjs</h4>
                <p>
                  Expanding my skillset to use Reactjs &amp; Redux with GraphQL
                  invovled to fetch data from the backend
                </p>
              </div>

              <div
                class="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="fab fa-wordpress fa-2x" />
                <h4>Wordpress Knowledge</h4>
                <p>
                  Using Elemantor, Astra, WooCommerce as well as M/WAMP to
                  develop full stack web applications
                </p>
              </div>

              <div
                class="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="fas fa-ad fa-2x" />
                <h4>Database Knowledge</h4>
                <p>
                  Using MySQL &amp; PhP to store data, my goal as developer is
                  to grow into the knowledge
                </p>
              </div>
            </div>
            <div
              class="image col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src="assets/img/developer.jpg"
                alt="Tatenda Makandigona Vision"
                class="img-fluid animated"
                style={{
                  animation:
                    "up-down 2s ease-in-out infinite alternate-reverse both",
                }}
              />

              <div
                class="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="fas fa-american-sign-language-interpreting fa-2x" />
                <h4>Problem Solving Skill</h4>
                <p>Data Structure &amp; Algorithm </p>
              </div>

              <div
                class="icon-box mt-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="fas fa-balance-scale fa-2x" />
                <h4>Digital Marketing</h4>
                <p>
                  Google Digital Marketing &amp; Google Analytics skillset that
                  would work at your advantage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
