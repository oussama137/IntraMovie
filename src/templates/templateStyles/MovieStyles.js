import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants"

export const Wrapper = styled.div`
  background-color: ${COLORS.BLACK};
  margin-top: 100px;

  .Movie-container {
    display: flex;
    margin: 3rem auto;
    width: 90%;
    background-color: ${COLORS.GREY};

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .Movie-image {
      position: relative;
      width: 40vw;
      height: 40vw;
      

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        height: 90vw;
        width: 90vw;
        border-bottom: solid 15px ${COLORS.PRIMARY};
      }

      .roles {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: ${COLORS.WHITE};
        font-family: ${FONT_FAMILIES.TITLE};
        text-transform: uppercase;
        background-color: ${COLORS.BLACK + "c0"};
        border-right: solid 15px ${COLORS.DARKGREY + "c0"};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          color: ${COLORS.PRIMARY};
          border-right: solid 5px ${COLORS.PRIMARY};
        }

        .role {
          padding: 1rem 1.5rem;
        }
      }
    }

    .Movie-info {
      text-align: center;
      width: 60vw;
      padding: 1.5rem 2rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      h2 {
        font-family: ${FONT_FAMILIES.TITLE};
        text-transform: uppercase;
        font-size: 4rem;
        border-bottom: ${COLORS.WHITE} solid 6px;
        padding-bottom: 1rem;
        margin-left: auto;
        margin-bottom: 0.5rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          margin-right: auto;
          margin-left: 0;
          font-size: 2.5rem;
        }
      }

      h3 {
        font-family: ${FONT_FAMILIES.TITLE};
        color: ${COLORS.SECONDARY};
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-left: auto;
        margin-bottom: auto;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.3rem;
          margin-right: auto;
          margin-left: 0;
          margin-bottom: 1rem;
        }

        span:first-child {
          color: ${COLORS.TERTIARY};
        }
      }

      .description {
    font-size: 20px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${COLORS.DARKGREY + "c0"};
    transition: all 0.3s ease-in-out;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .info {
        font-family: 2rem;
        text-transform: uppercase;
      }
    }
  }

  .Movie-pictures {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .artist-picture {
      width: 28.5vw;
      height: 57vw;
      margin: 0 1vw;
      

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90vw;
        height: 160vw;
        margin: 2vw auto;
      }
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
