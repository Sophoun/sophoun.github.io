import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../layout/layout'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const Resume = () => (
  <Layout>
    <div style={{ marginTop: '50px' }} className="d-flex justify-content-between">
      <div>
        <h1 className="content-title">Resume</h1>
        <hr className="break-line" />
      </div>
      <div className>
        <a href="file/SophounNheum-CV.pdf" target="blank" className="button btn">Download</a>
      </div>
    </div>
    <div style={{ marginTop: "50px" }}>
      <div className="d-flex justify-content-center">
        <div>
          <StaticImage
            className="profile-image"
            src="../images/profile.png"
            alt="Profile"
            placeholder="blurred"
          />
        </div>
        <div className="ml-5">
          <h1 className="content-title">Sophoun NHEUM</h1>
          <p className="paragraph3">Professional mobile and backend developer with 7 years experience that already solve many problems for customers over the world.</p>
        </div>
      </div>
    </div>
    <div style={{ marginTop: '50px' }}>
      <h1>Personal Information</h1>
      <hr className="break-line" />
      <p>
        Analytical and detail oriented Android app developer professional with stellar communication skills. Adept at bringing all team members together to reach a common goal on time. Conceptualizing app solutions with the latest technology, design theory, and a large dose of creativity. Committed to viable and easily functional app solutions for clients.
      </p>
    </div>
    <div>
      <h1>
        Experiences
      </h1>
      <hr className="break-line" />
    </div>
    <div>
      <Timeline
        lineColor={'#ddd'}
        className="timeline-custom">
        <TimelineItem
          key="001"
          dateText="08/2020 – Present"
          style={{ color: '#e86971' }}
        >
          <h3 style={{ color: '#e86971' }}>Assistant Manager, Prince Bank</h3>
          <h4>Android Development</h4>
          <ul>
            <li>Manage CI/CD, Code review</li>
            <li>Lead a development cross-platform application using flutter</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2018 – 08/2020"
          dateInnerStyle={{ background: '#61b8ff', color: '#fff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>Android Developer, Beniten</h3>
          <p>
            <ul>
              <li>Develop utility tools for other developer uses</li>
              <li>Independent developer that handles 3 or 4 projects at the same time</li>
            </ul>
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="06/2017 – 03/2018"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3 style={{ color: '#76bb7f' }}>Web Developer, CamWP Dev</h3>
          <h4>WordPress Developer</h4>
          <p>
            <ul>
              <li>Develop and maintenance WordPress website for</li>
            </ul>
          </p>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="08/2011 – 06/2017"
          dateInnerStyle={{ background: '#bb007f' }}
        >
          <h3 style={{ color: '#bb007f' }}>IT Support, Blue Technology</h3>
          <p>
            <ul>
              <li>Provided onside support to customer who had trouble with their POS system and also redesign their report using Crystal Report</li>
              <li>Training POS System to new customer</li>
            </ul>
          </p>
        </TimelineItem>
      </Timeline>
    </div>
    <div>
      <h1>
        Educations
      </h1>
      <hr className="break-line" />
    </div>
    <div>
      <Timeline
        lineColor={'#ddd'}
        className="timeline-custom">
        <TimelineItem
          key="001"
          dateText="08/2014 – 03-2018"
          style={{ color: '#e86971' }}
        >
          <h3 style={{ color: '#e86971' }}>Royal University of Phnom Penh, RUPP  </h3>
          <p>
            Bachelor of Science in Computer Science
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="06/2017 – 12/2017"
          dateInnerStyle={{ background: '#61b8ff', color: '#fff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>Cambodia Korean Cooperation Center, CKCC</h3>
          <p>
            Certified Associate Android Development
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2011 – 08/2013"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3 style={{ color: '#76bb7f' }}>Don Bosco Technical School, DBTS</h3>
          <p>
            Certified associate web development
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  </Layout >
)

export default Resume