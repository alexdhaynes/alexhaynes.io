import styled, { css } from "styled-components";
import { useState } from "react";
import Image from "next/image";

// components
import Footer from "../components/Footer";
import { TeaserCard } from "../components/TeaserCard";
import AppShell from "../components/AppShell";
import useScrollPosition from "../hooks/useScrollPosition";

import portfolioData from "../data/portfolio.json";
import socialData from "../data/social.json";

//css
import { MEDIA_QUERIES } from "../constants";
import { theme } from "../styles/globals.styles";
import { useEffect } from "react";
import CurrentYear from "../components/Footer";

const defaultTextLinkStyle = css`
  text-decoration: underline;
  color: ${theme.colors.link};
  position: relative;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.linkHover};
  }
`;

const PageStyle = styled.div`
  .secondary-text-color {
    color: ${theme.colors.text2};
  }

  .spacious-line-height {
    line-height: 2rem;
  }

  .horizontal-rule {
    border: 0;
    height: 1px; 
    margin: 50px 0; 
    width: 100%;
    background: ${theme.colors.text2}; 
    position: relative;
}


  ${MEDIA_QUERIES.XL} {
    display: grid;
    grid-template-columns: 560px auto;
    grid-template-areas: "sidebar main";
  }

  p a {
    ${defaultTextLinkStyle}
  }
`;

const SidebarASIDE = styled.aside`
  background: ${theme.colors.sidebarBackground};
  color: ${theme.colors.text1};
  grid-area: sidebar;
  height: 100%;
  padding: 30px 40px;
  ${MEDIA_QUERIES.L} {
    padding: 74px 110px;
  }

  .sidebar-content {
    ${MEDIA_QUERIES.XL} {
      position: fixed;
      width: 400px;
    }

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
      margin-bottom: 0;
    }
    h2, h3, h4 {
      font-weight: 500;
    }
    h4 {
      margin-top: 1rem;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
`;



const MainAreaDIV = styled.div`
  background: ${theme.colors.mainBackground};
  color: ${theme.colors.text1};
  grid-area: main;
  overflow-x: hidden;
  padding: 30px 40px;

  ${MEDIA_QUERIES.L} {
    padding: 80px 80px;
  }

  ${MEDIA_QUERIES.XL} {
    padding-left: 120px;
  }
`;

const TextBlock = styled.article`
  max-width: 680px;
  width: 100%;
  line-height: 2rem;
`;

const Section = styled.section`
  position: relative;
  margin: 0 auto 80px auto;
`;

const SectionHeader = styled.h2`
  /* section header */
  font-family: ${theme.fonts.serif};
  padding-bottom: 2rem;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const ProjectGridDIV = styled.div`
`;

const ProfilePicDIV = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px 0 30px 0;
  position: relative;
  img {
    border-radius: 50%;
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
`;



const Home = () => {
  return (
    <AppShell title="Alex Haynes: Front-End Developer">
      <PageStyle>
        {/* SIDEBAR SECTION */}
        <SidebarASIDE>
          <div className="sidebar-content">
            <h1>Alex Haynes</h1>
            <h4 className="secondary-text-color">Front-end Developer</h4>

            <ProfilePicDIV>
              <Image
                src="/images/jpgs/profile.jpg"
                alt="Alexandra Haynes: Profile Picture"
                width={200}
                height={161}
              />
            </ProfilePicDIV>
            <p>
              {socialData.map((item, i) => (
                <a
                  key={`social-${i}`}
                  className="underline hover:no-underline"
                  style={{ paddingRight: "16px" }}
                  href={item.href}
                  title={item.name}
                  target="_blank"
                  rel="noreferrer">
                  {item.name}
                </a>
              ))}
            </p>

            <ul>
              <li className="spacious-line-height">
                also a part-time <strong>Post-Bacc Mathematics</strong> student at Indiana University East
              </li>
            </ul>
            <p className="secondary-text-color">📍 Ithaca, NY</p>
            <Footer />
          </div>
        </SidebarASIDE>

        <MainAreaDIV>
          {/* INTRO SECTION */}
          <Section bgInner="white" id="intro">
            <SectionHeader>Front-End Developer</SectionHeader>

            <TextBlock>
              <p>
                I’m a creative Front-end Developer with over a decade of experience. I create beautiful, user-friendly, and accessible websites that meet brand guidelines and look good on all devices. Outside of work, I am pursuing a second B.S. in Mathematics part-time.
              </p>

              <h3>What I do</h3>
              <ul>
                <li>Work closely with Brand Marketing, Brand Design, Content, and SEO teams to translate marketing strategies and campaigns into dynamic web experiences.</li>
                <li>Build, maintain, and optimize websites and landing pages which are visually appealing, user-friendly, responsive, and reflect brand identity</li>
                <li>Implement best practices in SEO, page speed optimization, and responsive design to improve website performance metrics.
                </li>
                <li>Ensure that all web assets are compatible across various devices and browsers, delivering a consistent user experience</li>
                <li>Stay up to date with the latest web development tools</li>
              </ul>

              <h3>My skills</h3>
              <ul>
                <li>Proficiency in HTML, CSS, JavaScript, TypeScript, and modern front-end frameworks (React.js)</li>
                <li>Experience with back-end languages (Node.js, PHP, Python) and databases (MySQL, PostgreSQL, MongoDB)</li>
                <li>Familiarity with CMS platforms (Contentful, WordPress, Drupal)</li>
                <li>Knowledge of SEO best practices</li>
                <li>Experience with version control systems (Git)</li>
                <li>Understanding of UX/UI design principles and ability to collaborate effectively with designers</li>
                <li>Strong analytical and problem-solving skills with attention to detail</li>
                <li>Excellent verbal and written communication skills and the ability to convey technical information to non-technical stakeholders</li>
          
              </ul>

              <div className="horizontal-rule" />

              <h3>My studies</h3>
              <p>
                I'm currently pursuing a B.S. in Mathematics, part-time, at Indiana University East. I recieved my first B.A.  in French Literature from New York University in 2013.
              </p>
              
                <strong>My coursework includes:</strong>
                <ul>
                  <li>Linear Algebra</li>
                  <li>Number Theory</li>
                  <li>Abstract Algebra</li>
                  <li>Mathematical Logic</li>
                </ul>
              
                <div className="horizontal-rule" />

    
              <h3> Outside of work</h3>
              <p>
                I like to hike, explore the forests and gorges of the Finger Lakes where I live 🌲, play banjo 🪕, practice movement arts like dance, yoga, and Tai Chi, make color pencil drawings, learn new things, and work
                on my meditation practice. I've taken classes in carpentry (we built an entire Tiny House from the ground up) and natural basketry (we stripped and processed elm bark for weaving). 
                <br /><br />
                I am <strong>obsessed</strong> with tea (particularly wild mountain oolongs) 🍵 and tea brewing (I have one clay pot, one gaiwan, and two kyusus!). 
              </p>

              <h3> What I care about</h3>
              <p>
                I’m passionate about living in a way that does no harm to beings
                or the environment. I care deeply about living in harmony and
                communion with the land and local ecosystems. My guiding forces are compassion and harmlessness to all sentient beings.
              </p>
            </TextBlock>
          </Section>

          {/* PORTFOLIO SECTION */}
          <Section id="portfolio">
            <SectionHeader>Featured work</SectionHeader>
            <ProjectGridDIV>
              {portfolioData.map((node) => {
                return (
                  <TeaserCard
                    key={`Project-${node.name}`}
                    name={node.name}
                    description={node.description}
                    stack={node.stack}
                    href={node.href}
                    image={node.image}
                    tags={node.tags}
                  />
                );
              })}
            </ProjectGridDIV>
          </Section>
        </MainAreaDIV>

        {/* <DelightDIV scrolled={scrolled}>
          <p>focus on the breath.</p>
        </DelightDIV> */}
      </PageStyle>
    </AppShell>
  );
};

export default Home;
