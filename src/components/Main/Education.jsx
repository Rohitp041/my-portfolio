import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FormattedMessage } from 'react-intl';
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";
import React from 'react';
import "../../App.css"

export default function Education ()  {
  const items = [
    {
      date: "2019 - 2020",
      cardTitle: "California Baptist University",
      cardSubtitle: "Master of Science in Information Technology",
    },
    {
      cardTitle: "MIT (Pune University )",
      cardSubtitle: "Bachelor of Computer Application",
      date: "2014 - 2018",
    },
  ];

  return (
    <section id="education" class="education">
      <div class="container" data-aos="fade-up">

        <h2 className="heading">
            <FormattedMessage
                id='Education'
                defaultMessage='Education'
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
                    icon={<SchoolIcon />}
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
                
       
                </div>
                  </VerticalTimelineElement>
                );
              })}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};


