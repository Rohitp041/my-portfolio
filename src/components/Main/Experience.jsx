import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import React from 'react';
import { FormattedMessage } from 'react-intl';
import "../../App.css"
export default function Experience() {
  const items = [
    {
      date: "December 2023 - Present",
      cardTitle: "Grainger",
      cardSubtitle: "Senior Software Engineer",
      cardDetailedText: [
"Developed and maintained software applications, including frontend, API, and backend components.",
"Proficient in AWS for scalable and secure deployment, emphasizing PostgreSQL Aurora for database management.",
"Utilized React and Next.js for dynamic UIs, and Java for backend API development.",
"Maintained SAP Portal and SAP Solr System, ensuring seamless integration and optimal functionality.",
"Collaborated closely with product managers, designers, and engineering teams for high-quality software solutions.",
"Responsible for writing clean, maintainable code, peer code reviews, and providing constructive feedback.",
"Debugged and resolved issues across the full technology stack promptly.",
"Kept up-to-date with emerging trends and technologies in software development, with a focus on AWS and PostgreSQL Aurora advancements.",
      ]
    },
    {
      date: "October 2020 – December 2023",
      cardTitle: "Eficens System LLC",
      cardClients:"(Cvs, Fedex, UHG, Prime Therapeutics)",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Over 6 years of experience in Java/J2EE web application architecture, design, and deployment.",
 "Demonstrated leadership, communication, and teamwork skills.",
 "Solid grasp of Core Java and object-oriented principles, including multi-threading and exception handling.",
"Skilled in HTML5, CSS3, JavaScript, React, Redux, and AngularJS, emphasizing cross-browser compatibility.",
" Experienced in Spring Boot microservices and cloud deployments on AWS, Azure, and PCF.",
"Proficient in SQL/PLSQL and NoSQL databases, focusing on optimization and complex queries.",
"Capable in both frontend and backend development using modern frameworks and technologies.",
"Knowledgeable in Agile and SCRUM methodologies for streamlined development processes.",
"Competent in cloud services and containerization with Docker for application deployment.",
"Experienced in using Maven, Gradle, and Jenkins for automated builds and deployments.",
      ]
    },
    {
      date: " 2018 – May 2019",
      cardTitle: "Capita India Pvt",
      cardClients:"(Debenhams)",
      cardSubtitle: "Content Developer",
      cardDetailedText: [
        "Implemented and managed microservices using Spring Boot and RESTful endpoints.",
        "Created market components with Spring Boot for microservices architecture.",
        "Developed dynamic UI components and services using React JS, JSX, and AJAX.",
        "Crafted cross-browser compatible web pages with HTML5, CSS3, JavaScript, and React JS.",
        "Actively participated in all stages of the product development lifecycle.",
        "Developed single-page applications (SPAs) leveraging Angular JS for dynamic data linking.",
      ]
    },
  ];

  return (
    
    <section className="experienceos" id="experienceos">
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
                {data.cardClients && (
          <h3>
            <FormattedMessage
              id='job clients'
              defaultMessage={`Clients: ${data.cardClients}`}
            />
          </h3>
        )}
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
      

    </section>
  );
}
