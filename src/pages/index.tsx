import styled, { css } from "styled-components";
import { useState } from "react";
import Image from "next/image";

// components
import Footer from "../components/Footer";
import { TeaserCard } from "../components/TeaserCard";
import AppShell from "../components/AppShell";

import portfolioData from "../data/portfolio.json";
import socialData from "../data/social.json";

//css
import { MEDIA_QUERIES } from "../constants";
import { theme } from "../styles/globals.styles";

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
    h2,
    h3,
    h4 {
      font-weight: 500;
    }
    h3 {
      margin-top: 1rem;
    }

    ${MEDIA_QUERIES.M} {
      p {
        width: 70%;
      }
    }
    ${MEDIA_QUERIES.XL} {
      p {
        width: 100%;
      }
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

  ul {
    li {
      margin-bottom: 1rem;
    }
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
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const ProjectGridDIV = styled.div``;

const ProfilePicDIV = styled.div`
  margin: 20px 0 30px 0;
  position: relative;
  img {
    border-radius: 50%;
    object-fit: cover;
    width: 150px;
    height: 150px;
    margin: 0 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
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
            <h3 className="secondary-text-color">Front-end Developer</h3>

            <ProfilePicDIV>
              <Image
                src="/images/jpgs/alex-profile-pic-2020-yellow-bg.jpg"
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
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </p>

            <p className="secondary-text-color">📍 Located in Ithaca, NY</p>
            <Footer />
          </div>
        </SidebarASIDE>

        <MainAreaDIV>
          {/* INTRO SECTION */}
          <Section bgInner="white" id="intro">
            <SectionHeader>Front-End Developer</SectionHeader>

            <TextBlock>
              <p>
                I’m a creative Front-end Developer with over a decade of
                experience. I build beautiful, user-friendly, and accessible web
                components that meet brand guidelines and look good on all
                devices.
              </p>

              <p>
                Outside of work, I am pursuing a second B.S. in Mathematics
                part-time.
              </p>
              <p>
                <a href="#portfolio">Jump to the projects!</a>
              </p>

              <h3>What I do</h3>
              <ul>
                <li>
                  Work closely with Brand Marketing, Brand Design, Content, and
                  SEO teams to build interactive websites and web components
                </li>
                <li>
                  Enhance and maintain custom internal component libraries
                </li>
              </ul>

              <h3>Where I've Worked</h3>
              <ul>
                <li>
                  <strong>Help Scout</strong> | Senior Front-End Developer |
                  <em> June 2021 - Oct 2023</em>
                </li>
                <li>
                  <strong>Undertone</strong> | Senior Creative Developer |
                  <em> Feb 2017 - June 2020</em>
                </li>
                <li>
                  <strong>LivePerson</strong> | Web Developer |
                  <em> June 2013 - June 2016</em>
                </li>
              </ul>

              <h3>My Skills</h3>
              <ul>
                <li>
                  Extensive experience in HTML, CSS, JavaScript, TypeScript, and
                  modern front-end JavaScript frameworks (React.js)
                </li>
                <li>
                  Give me a Figma design and I'll give you a pixel-perfect
                  TypeScript component/landing page/website
                </li>
                <li>Strong mathematical skill and attention to detail</li>
              </ul>

              <div className="horizontal-rule" />

              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Indiana University East</strong> | B.S. Mathematics |
                  <em> expected May 2025</em>
                </li>
                <li>
                  <strong>New York University</strong> | B.A. French Literature,
                  Web Programming Minor | <em>May 2013</em>
                </li>
              </ul>

              <div className="horizontal-rule" />

              <h3> Outside of work</h3>
              <p>
                I like to hike, explore the forests and gorges of the Finger
                Lakes where I live 🌲, play banjo 🪕, practice movement arts
                like dance, yoga, and Tai Chi, make color pencil drawings, learn
                new things, and work on my meditation practice. I've taken
                classes in carpentry (we built an entire Tiny House from the
                ground up) and natural basketry (we stripped and processed elm
                bark for weaving).
                <br />
                <br />I enjoy tea (particularly wild mountain oolongs) 🍵 and
                tea brewing.
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
      </PageStyle>
    </AppShell>
  );
};

export default Home;
