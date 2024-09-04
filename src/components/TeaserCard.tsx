import Image from "next/image";
//css
import styled, { css } from "styled-components";
import { MEDIA_QUERIES } from "../constants";
import { theme } from "../styles/globals.styles";

const TeaserCardDIV = styled.div`
  position: relative;
  width: 95%;
  color: ${theme.colors.text1};

  ${MEDIA_QUERIES.L} {
    max-width: 800px;
  }

  a {
    text-decoration: none;
    position: relative;
    display: block;
    color: ${theme.colors.accentBright};
    &:hover {
      cursor: pointer;
      color: ${theme.colors.accentDark};
    }
  }
`;


const TeaserCardInnerDIV = styled.div`
  position: relative;
  margin-bottom: 80px;

  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "image"
    "image"
    "name "
    "description"
    "tags"
    "stack";

  .teaser-card-image {
    filter: brightness(85%);
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    grid-area: image;
    margin-bottom: 40px;
    border-radius: 5px;

    &:hover {
      filter: brightness(100%);
      transition: filter 0.25s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle drop shadow */
    }

    ${MEDIA_QUERIES.XL} {
      width: 300px;
      height: 168px;
      margin-bottom: 0;
    }
  }

  ${MEDIA_QUERIES.XL} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    grid-template-areas:
      "image name"
      "image description"
      "image tags"
      "image stack";

    grid-column-gap: 40px;
  }

  .teaser-card-name {
    grid-area: name;
    position: relative;
    margin: 0;
    ${MEDIA_QUERIES.L} {
      margin-top: 0;
    }

    h3 {
      margin: 0;
      color: ${theme.colors.text1};
    }
  }

  .teaser-card-description {
    grid-area: description;
    color: ${theme.colors.text2};
    line-height: 2rem;
  }


  .teaser-card-tags {
    grid-area: tags;
    margin-top: 1rem;

    ${MEDIA_QUERIES.L} {
      margin-top: 0;
    }

    span {
      padding: 0.25rem 0.75rem;
      margin: 0 0.5rem 0 0;
      border-radius: 8px;
      background: ${theme.colors.accentDark};
    }
  }

  .teaser-card-stack {
    grid-area: stack;
    align-self: flex-start;
    max-width: 75%;
    margin-top: 1rem;
    color: ${theme.colors.text3};

    span {
      padding-right: 1rem;
      display: block;
      &:before {
        color: ${theme.colors.accentBright};
        content: "•";
        position: relative;
        padding-right: 0.5rem;
      }
      ${MEDIA_QUERIES.L} {
        display: inline;
        &:before {
          display: none;
        }
        &:after {
          color: ${theme.colors.accentBright};
          content: "•";
          padding-left: 1rem;
        }
        &:last-of-type {
          &:after {
            content: "";
          }
        } /* end last-of-type */
      }
    } /* end span */
  } /* end .teaser-card-stack */

  .teaser-card-tags,
  .teaser-card-stack {
    width: 100%;
    span {
      font-size: 1.15rem;
    }
  }
`;

const TeaserCard = ({ name, description, href, image, tags, stack }) => {
  return (
    <TeaserCardDIV>
        <TeaserCardInnerDIV>
          <a
          href={href}
          target="blank">
          <Image
            className="teaser-card-image"
            src={image}
            alt={name}
            width={360}
            height={203}
          />
           </a>
           <div className="teaser-card-contents">
            <div className="teaser-card-name">
              <h3>{name}</h3>
            </div>
            <div className="teaser-card-description">
              <p>{description}</p>
            </div>
            <div className="teaser-card-tags">
              {tags.map((tag, i) => (
                <span key={`teaser-card-tag-${i}`}>{tag}</span>
              ))}
            </div>
            <div className="teaser-card-stack">
              {stack.map((tech, i) => (
                <span key={`teaser-card-stack-${i}`}>{tech}</span>
              ))}
            </div>
           </div>
          
        </TeaserCardInnerDIV>
        
    </TeaserCardDIV>
  );
};

export { TeaserCard };
