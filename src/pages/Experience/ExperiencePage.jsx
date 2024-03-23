
  import "react-vertical-timeline-component/style.min.css";

  import React from 'react';

  import "../../App.css"
  import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Education from '../../components/Main/Education';
import Experienceos from '../../components/Main/Experience'; 
export const Experience= () => {
    

  
    return (
    <div>
    <HeaderPage/>

        <ParticleBackground />

        <main className="experience-page">
        
        <Experienceos/>
      {/* <section className="experienceos" id="experienceos">

      <div class="container" data-aos="fade-up">
      <h2 className="heading">
            <FormattedMessage
                id='Experienceos'
                defaultMessage='Experience'
            />
            </h2>
       
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
         
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: "#343a40" }}
                    style={{ background: "none", padding: "none" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "20px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                <div className="columns" data-aos="fade-up" data-aos-delay="200">
                    <h3>
                    <FormattedMessage
                        id='job'
                        defaultMessage= {data.cardTitle}
                    />
                </h3>
                <h3>
                    <FormattedMessage
                        id='job info'
                        defaultMessage= {data.cardSubtitle}
                    />
                </h3>
                <ul>
                      {data.cardDetailedText.map((text, index) => (
                        <li key={index}>
                          <FormattedMessage
                            id='job text'
                            defaultMessage={text}
                          />
                        </li>
                      ))}
                    </ul>
                
       
                </div>
                  </VerticalTimelineElement>
                );
              })}
              
            </VerticalTimeline>
          </div>
        </div>
        </div>
        <div class="container"> */}
        <Education />

{/* <div class="section-title">
  <h2>Skills</h2>
  <p>Here's some set of skills of my work basis. I used updated tools and methods to get the job done perfectly.
    Modern Technology and terminology is applied through all this platforms. ALso, I'm very much skilled
    using <strong>cPanel</strong>, <strong>Filezilla</strong> as well as Version control <strong>git</strong>.
  </p>
</div>

<div class="row skills-content">

  <div class="col-lg-6" data-aos="fade-up">

    <div class="progress">
      <span class="skill">HTML <i class="val">100%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">CSS <i class="val">90%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">JavaScript <i class="val">75%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">PHP <i class="val">80%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

  </div>

  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

    <div class="progress">
      <span class="skill">Python<i class="val">80%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">Django<i class="val">60%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">Postgresql / Mysql<i class="val">85%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

    <div class="progress">
      <span class="skill">MongoDB<i class="val">55%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>

  </div>

</div>

<div class="row skills-content">

  <div class="col-lg-6" data-aos="fade-up">

    <div class="progress">
      <span class="skill">Wordpress / CMS<i class="val">90%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

    <div class="progress">
      <span class="skill">Shopify / eCommerce<i class="val">90%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6" data-aos="fade-up">

    <div class="progress">
      <span class="skill">Docker<i class="val">80%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

    <div class="progress">
      <span class="skill">Amazon Web Service (AWS)<i class="val">90%</i></span>
      <div class="progress-bar-wrap">
        <div class="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>

</div>

</div>
  
      </section>*/}
      </main> 
    
      <ScrollToTop />

<Footer />

      </div>
    );
  }
  export default Experience;