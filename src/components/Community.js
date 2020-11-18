import React, { Component } from "react";

class Community extends Component {
  render() {
    return (
      <section id="tabs" class="tabs">
        <div className="Community"></div>

        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Community Projects</h2>
            <p style={{ fontSize: "170%" }}>
              Listening to you, and answering with software
            </p>
          </div>

          <div class="container" data-aos="fade-up">
            <ul class="nav nav-tabs row d-flex">
              <li class="nav-item col-3">
                <a class="nav-link active show" data-toggle="tab" href="#tab-1">
                  <i class="fas fa-handshake fa-lg"></i>
                  <h4 class="d-none d-lg-block">Young Professional : Africa</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a class="nav-link" data-toggle="tab" href="#tab-2">
                  <i class="fas fa-hand-holding-heart fa-lg"></i>
                  <h4 class="d-none d-lg-block">Enactus CUT</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a class="nav-link" data-toggle="tab" href="#tab-3">
                  <i class="fas fa-ribbon fa-lg"></i>
                  <h4 class="d-none d-lg-block">IDEA Trust</h4>
                </a>
              </li>
              <li class="nav-item col-3">
                <a class="nav-link" data-toggle="tab" href="#tab-4">
                  <i class="far fa-handshake fa-lg"></i>
                  <h4 class="d-none d-lg-block">Key Remedy</h4>
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div
                    class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 pt-3"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h6>Young Professional: African Edition</h6>
                    <p class="font-italic">
                      is a podcast series for students and young professionals
                      that aims to present relevant information regarding the
                      African job market to listeners, to help create a more
                      informed future work force on the continent.
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i> Democracy of
                        information means a bigger pie for all
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Collaborative:
                        Leveraging collective genius
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Innovation:
                        improving on the way things ought to be done
                      </li>
                    </ul>
                    <p>
                      “Success in Africa is viewed as a zero sum game. But we
                      believe that success is a public good. Much like how a
                      street lamp does not lose its light when more people stand
                      beneath it, we believe that as Africans we can succeed
                      without limiting the opportunities of others. Shared
                      victory is more impactful than single monetary success.”
                    </p>
                    <a
                      href="https://yp-africa.com/"
                      class="btn btn-outline-primary"
                      role="button"
                      aria-pressed="true"
                    >
                      Visit Website
                    </a>
                  </div>
                  <div
                    class="col-lg-6 order-1 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img src="assets/img/tab-1.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h6>Enactus Chinhoyi University of Technology</h6>
                    <p>
                      We are a group of young aspiring leaders determined to use
                      the power of entrepreneurial action to change the lives of
                      different community members,to better our economy and
                      creating a more sustainable world.
                    </p>
                    <p class="font-italic">
                      ENACTUS Worldwide was build some 40years ago with the
                      drive of building student leaders who appreciate the
                      positive power of business to better the lives of
                      communities that circumference these students
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i>Our Mission: To
                        change the lives of those, who have no hope!
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Our Vision: Leaping
                        beyond boundaries, uplifiting and empowering lives as
                        agents of change.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Our team is made up
                        of 3 sperate but inter-dependent organizations namely
                        ENACTUS Worldwide, The Boost Fellowship and ENACTUS
                        Chinhoyi University of Technology.
                      </li>
                    </ul>
                    <a
                      href="http://enactuscut.co.zw/index.html"
                      class="btn btn-outline-primary"
                      role="button"
                      aria-pressed="true"
                    >
                      Visit Website
                    </a>
                  </div>

                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/tabs-2.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h6>
                      Innovation, Development, and Empowerment of Africa (IDEA)
                      Trust
                    </h6>
                    <p>
                      is a youth organization which aimed at addressing the
                      development of African youths.
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i> Innovations Wing
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Charity Wing
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Young people
                        personal development programs
                      </li>
                    </ul>
                    <p class="font-italic">
                      As the name suggests, the focus is on promoting
                      Innovation, promoting youth development programs and
                      empowering young people with soft skills. These are
                      administered separately but all under IDEA Trust. Members
                      can only be affiliated to a maximum of 2 (two) thematic
                      groups.
                    </p>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/tabs-3.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
                <a
                  href="http://ideatrust.org.zw/"
                  class="btn btn-outline-primary"
                  role="button"
                  aria-pressed="true"
                >
                  Visit Website
                </a>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h6>Key Remedy Training Consultants</h6>
                    <p>
                      is a South African based skills development consultancy,
                      mainly focused on equipping unskilled labours throughout
                      the nation and abroad to ensure staff retention and
                      increase productivity.
                    </p>
                    <p class="font-italic">
                      Key Remedy Training Consultants strong believes in leaving
                      a legacy with that our vision is to always be able to
                      develop and assist in career planning
                    </p>
                    <ul>
                      <li>
                        <i class="ri-check-double-line"></i> Prioritizing
                        teaching and learning in different spheres to
                        accommodate all types of participants, we pride
                        ourselves in being ahead of the 4th industrial
                        revolution.
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> Providing SDF
                        service dealing with all the administration of
                        registering companies with relevant SETA’s and deriving
                        different training reports (Training need analysis ,
                        WSP, ATR, )
                      </li>
                      <li>
                        <i class="ri-check-double-line"></i> We pride ourselves
                        in excellent training interventions facilitated by our
                        qualified team of expert who all believe and have been
                        called to invest in human capital, priding ourselves in
                        delivering of unmatched quality training interventions.
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="assets/img/tabs-4.jpg" alt="" class="img-fluid" />
                  </div>
                </div>
                <a
                  href="#"
                  class="btn btn-outline-primary"
                  role="button"
                  aria-pressed="true"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Community;
