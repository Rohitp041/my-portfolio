import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/rp2.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
  <p>
    <FormattedMessage
      id='about-info-1'
      defaultMessage="Hello, I'm Rohit Patel, a dedicated IT professional with over 9 years of extensive experience in web application development. My expertise spans system architecture, design, development, and maintenance of enterprise-level applications. A passionate technologist skilled in Java and J2EE technologies, I thrive in developing client/server applications and delivering complex projects that adhere to the highest standards of cross-browser compatibility."
    />
  </p>
  <div className="hide parrafo-active">
    <p>
      <FormattedMessage
        id='about-info-2'
        defaultMessage="Known for excellent communication, leadership, and interpersonal skills, I am a self-motivated and proactive team player. My approach is marked by a constant quest for learning, allowing me to embrace new technologies and methodologies like Agile, Waterfall, and SCRUM to ensure meticulous and efficient web application development."
      />
      </p>

<p>
  <FormattedMessage
    id='about-info-3'
    defaultMessage="With a strong focus on modern web design and a comprehensive understanding of W3C Web Standards, my toolkit is rich with proficiencies in HTML5, CSS3, JavaScript, React, Redux, and AngularJS. I'm adept at creating responsive, user-friendly interfaces and ensuring seamless integration across various platforms, including extensive experience with cloud services such as AWS and Azure."
  />
</p>

<p>
  <FormattedMessage
    id='about-info-4'
    defaultMessage="Throughout my career, I have successfully managed and tracked large-scale production environments, utilized cutting-edge technologies like Spring Boot for microservices, and handled end-to-end deployments on cloud infrastructures. I am always ready to tackle challenges in backend and frontend development, database management, and agile project management."
  />
</p>

              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
  <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
    <img alt="Java" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-plain.svg" title="Java" />
    <h2 className="skill-name">Java</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-java'
        defaultMessage='With over 9 years of experience, I have deep expertise in Java, encompassing object-oriented programming, multithreading, and the use of various J2EE technologies.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
    <img alt="Spring" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original.svg" title="Spring" />
    <h2 className="skill-name">Spring / Spring Boot</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-spring'
        defaultMessage='Skilled in Spring Framework, I specialize in building robust backend services with Spring Boot, emphasizing microservices and cloud deployment.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
  <div className="skills-img" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <img alt="DevOps" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/docker/docker-original-wordmark.svg" title="Docker" />
        <img alt="DevOps" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jenkins/jenkins-original.svg" title="Jenkins" />
    </div>
    {/* <img alt="Cloud Services" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="Cloud Services" />
    <img alt="Cloud Services" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/azure/azure-original-wordmark.svg" title="Cloud Services" /> */}
    <h2 className="skill-name">Cloud Technologies</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-cloud'
        defaultMessage='Proficient in AWS and Azure, I manage cloud deployments, ensuring scalable and resilient infrastructure for applications.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
    <img alt="HTML5" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
    <h2 className="skill-name">HTML5</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-html5'
        defaultMessage='Deep proficiency in HTML5, crafting semantic and SEO-friendly structures for diverse web applications.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
    <img alt="CSS3" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
    <h2 className="skill-name">CSS3</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-css3'
        defaultMessage='Expertise in CSS3 for responsive and visually compelling web designs, including animations and transitions.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
    <img alt="JavaScript" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" title="JavaScript" />
    <h2 className="skill-name">JavaScript (ES5/ES6)</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-javascript'
        defaultMessage='Advanced JavaScript skills for dynamic and interactive web experiences, utilizing both ES5 and ES6 features.'
      />
    </p>
  </div>
    {/* <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
    <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="React" />
    <h2 className="skill-name">Node</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-node'
        defaultMessage='Proficient in React for building scalable and maintainable user interfaces, complemented with Redux for state management.'
      />
    </p>
  </div> */}
  <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
    <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
    <h2 className="skill-name">React</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-react'
        defaultMessage='Proficient in React for building scalable and maintainable user interfaces, complemented with Redux for state management.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
    <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
    <h2 className="skill-name">Bootstrap</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-bootstrap'
        defaultMessage='Skilled in Bootstrap for fast-paced responsive design, ensuring mobile-first and cross-browser compatibility.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
    <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
    <h2 className="skill-name">Sass/SCSS</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-sass'
        defaultMessage='Experienced in using Sass/SCSS for writing clean, efficient, and nested CSS.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
    <img alt="Angular" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/angular/angular-original.svg" title="Angular" />
    <h2 className="skill-name">Angular</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-angular'
        defaultMessage='In-depth knowledge of Angular for building structured, modular, and robust front-end architectures.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
    <img alt="TypeScript" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="TypeScript" />
    <h2 className="skill-name">TypeScript</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-typescript'
        defaultMessage='Adept in TypeScript, enhancing JavaScript code with type safety and advanced object-oriented features.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <div className="skills-img" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <img alt="Databases" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title="Databases" />
    <img alt="Databases" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" title="Databases" />
    <img alt="SQL" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original-wordmark.svg" title="Databases" />
    </div>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-databases'
        defaultMessage='Competent in relational and NoSQL databases, I design and optimize data persistence using technologies like Postgres, MySQL, and MongoDB.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
  <div className="skills-img" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <img alt="DevOps" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/docker/docker-original-wordmark.svg" title="DevOps" />
    <img alt="DevOps" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jenkins/jenkins-original.svg" title="DevOps" />
    <img alt="DevOps" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/kubernetes/kubernetes-original.svg" title="DevOps" />
    </div>
    <h2 className="skill-name">DevOps</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-devops'
        defaultMessage='Experienced in DevOps practices, I leverage tools like Docker, Jenkins, and Kubernetes to streamline development and operations.'
      />
    </p>
  </div>
  <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
    <img alt="Hibernate" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/hibernate/hibernate-original-wordmark.svg" title="Hibernate" />
    <h2 className="skill-name">Hibernate</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-hibernate'
        defaultMessage='Highly skilled in Hibernate for ORM, enabling efficient database management and complex query optimization in enterprise applications.'
      />
    </p>
  </div>
  {/* <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
    <img alt="Microservices" className="skills-img" src="microservices-icon-path" title="Microservices" />
    <h2 className="skill-name">Microservices</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-microservices'
        defaultMessage='Proficient in designing and implementing microservice architecture, ensuring scalable, independent deployment and flexibility in technologies.'
      />
    </p>
  </div> */}
  {/* <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
    <img alt="CI/CD" className="skills-img" src="cicd-icon-path" title="CI/CD" />
    <h2 className="skill-name">CI/CD</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-cicd'
        defaultMessage='Experienced in Continuous Integration/Continuous Deployment, employing strategies for efficient, reliable, and automated workflows.'
      />
    </p>
  </div> */}
  {/* <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
    <img alt="SQL" className="skills-img" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original-wordmark.svg" title="SQL" />
    <h2 className="skill-name">SQL</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-sql'
        defaultMessage='Expert in SQL with extensive knowledge in creating complex queries, stored procedures, and optimizing database operations for high-load environments.'
      />
    </p>
  </div> */}
  {/* <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
    <img alt="Security" className="skills-img" src="security-icon-path" title="Security" />
    <h2 className="skill-name">Security</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-security'
        defaultMessage='Knowledgeable in application security best practices, including OAuth2.0, JWTs, and secure RESTful services.'
      />
    </p>
  </div> */}
  <div className="skill-card" data-aos="fade-up" data-aos-delay="300">
  <img alt="Git" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" />
  <h2 className="skill-name">Version Control: Git</h2>
  <p className="skill-info">
    <FormattedMessage
      id='about-skills-version-control'
      defaultMessage='Proficient in Git for version control, enabling me to manage code changes, collaborate with teams globally, and maintain the integrity and history of codebases across projects.'
    />
  </p>
</div>
{/* <div className="skill-card" data-aos="fade-right" data-aos-delay="300">
  <img alt="Webpack" className="skills-img" src="webpack-icon-path" title="Webpack" />
  <h2 className="skill-name">Build Tool: Webpack</h2>
  <p className="skill-info">
    <FormattedMessage
      id='about-skills-webpack'
      defaultMessage='Skilled in Webpack for bundling modules and assets, which streamlines the build process for development and production, ensuring optimal application performance and efficient delivery of resources.'
    />
  </p>
</div>
  <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
    <img alt="Testing" className="skills-img" src="testing-icon-path" title="Testing" />
    <h2 className="skill-name">Testing</h2>
    <p className="skill-info">
      <FormattedMessage
        id='about-skills-testing'
        defaultMessage='Proficient in testing frameworks like JUnit, Mockito, Selenium, ensuring robust and error-free application delivery.'
      />
    </p>
  </div> */}
</div>

          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;