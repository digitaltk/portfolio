import React, { Component } from "react";

class Facts extends Component {
  render() {
    return (
      <section id="facts" class="facts">
        <div class="container">
          <div class="section-title">
            <h2>Facts</h2>
            <p style={{ fontSize: "170%" }}>
              Providing the simplest solution for the most complex problem
            </p>
          </div>

          <div class="row no-gutters">
            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div class="count-box">
                <i class="icofont-simple-smile"></i>
                <span data-toggle="counter-up">7+</span>
                <p>
                  <strong>Happy Clients</strong> Freelancer
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="count-box">
                <i class="icofont-document-folder"></i>
                <span data-toggle="counter-up">10+</span>
                <p>
                  <strong>Projects</strong>
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="count-box">
                <i class="icofont-live-support"></i>
                <span data-toggle="counter-up">48</span>
                <p>
                  <strong>Hours</strong> Turnover time for project
                </p>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="count-box">
                <i class="icofont-users-alt-5"></i>
                <span data-toggle="counter-up">5+</span>
                <p>
                  <strong>Community-based projects</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Facts;
