import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../constants"

export const Wrapper = styled.div`
  .moviebanner{
    display: flex;
    position: relative;
    width: 100%;
    height: 400px;
  }
  .banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 980px;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      height: 355px;
    }

    .inner-div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      padding: 1rem;
      border-radius: 15px 50px; 
      animation-name: color-change;
      animation-duration: 2s;
      background-color: ${COLORS.GREY + "d0"};
      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        top: 120px;
        margin-top: 30px;
        width: 100%;
      }
      @keyframes color-change {
       0% {background-color: ${COLORS.DARKGREY + "d0"}; top:0px;}
       100% {background-color: ${COLORS.DARKGREY + "d0"}; right:0px;}
      }

      p {
        color: white;
        font-size: 1.3rem;
        text-align: center;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 0.9rem;
        }
      }

      .header-title {
        font-family: ${FONT_FAMILIES.TITLE};
        font-size: 3rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        margin: auto;
        border-bottom: solid 5px white;
        margin-bottom: 1rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.0rem;
        }
      }
    }
  }
.carousel{
  width: 100%;

}
  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border: groove;
    border-width: 7px;
    border-color: #3b403a;
    padding: 3rem 0 10rem;
    background-color: ${COLORS.DARKGREY };

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 1.5rem;
        
      }
    }

    p {
      width: 70%;
      font-size: 1.3rem;
      color: ${COLORS.TERTIARY};
      text-align: center;
      line-height: 2rem;
      margin: auto;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90%;
        font-size: 1rem;
      }
    }
  }

  .contact-info {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    div {
      width: 33.33%;
      padding: 1em;
      color: ${COLORS.TERTIARY};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      p {
        margin-top: 1rem;
        color: white;

        a {
          color: ${COLORS.SECONDARY};
        }
      }
    }
  }
  
  .Movie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    width: 100%;
    padding: 2rem 5%;
    background-color: ${({ artistsColor = COLORS.TERTIARY }) =>
      `${artistsColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .Movie-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
      border-radius: 5%;
    }
  }
`

export const Movie = styled(Link)`
  display: flex;
  position: relative;
  width: 22vw;
  height: 22vw;
  margin: 2vw;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
    width: 90vw;
    height: 90vw;
    margin: 2vw 0;
  }

  &:hover {
    transform: scale(1.05);

    .Movie-info {
      height: 100%;
      background-color: ${COLORS.DARKGREY + "c0"};

      p {
        color: ${COLORS.BLACK};
      }
    }
  }

  .Movie-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${COLORS.BLACK + "c0"};
    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      text-align: center;
      font-weight: 600;
      color: white;
      margin: 0;
    }

    p:nth-child(2) {
      color: ${COLORS.DARKGREY};

      margin-top: 0.3rem;
    }
  }
`

export const BottomEdgeDown = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 130px solid ${COLORS.TERTIARY};
  border-right: 100vw solid transparent;

  &:before {
    content: "";
    display: block;
    border-bottom: ${({ color }) => `100px solid ${color}`};
    border-right: 100vw solid transparent;
    transform: translateY(130px) scale(1.05);
  }
`

export const BottomEdgeUp = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 140px solid ${COLORS.TERTIARY};
  border-right: 100vw solid transparent;

  &:after {
    content: "";
    display: block;
    border-bottom: ${({ color }) => `100px solid ${color}`};
    border-left: 100vw solid transparent;

    transform: translateY(140px) scale(1.05);
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 2%;
`
