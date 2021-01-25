import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Carousel, img } from 'react-bootstrap';

import {
  Wrapper,
  Image, 
  Movie
} from "../pageStyles/pageStyles"
import Annabelle from "../images/Annabelle.jpg"
import OldGuard from "../images/OldGuard.jpg"
import ElHoyo from "../images/ElHoyo.jpg"
import Patser from "../images/Patser.jpg"
import wwz from "../images/wwz.jpg"

import { COLORS } from "../constants"

const MoviePage = () => {
    const {
        wpcontent: {
          page: {
            filmMeta: {kleineBeschrijving, bannerFoto},
        },
        movies: {edges: movies },
    },
    } = useStaticQuery(graphql`
    query{
        wpcontent {
            page(id: "films", idType: URI) {
              filmMeta {
                kleineBeschrijving
                bannerFoto {
                   sourceUrl
                   imageFile {
                   childImageSharp {
                   fluid(quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              altText
                }
              }
            }
            movies {
              edges {
                node {
                  film {
                    titleOfTheMovie
                    releaseDatum
                    korteBeschrijving
                    duurtijd
                    fotoVanDeFilm {
                      altText
                      sourceUrl
                      imageFile {
                      childImageSharp {
                      fluid(quality: 75, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                           }
                         }
                       }
                     }
                   }
                  slug
                }
              }
            }
          }
        }
   `)
return (
    <Layout>
      <SEO title="Movies" />
      <Wrapper artistsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
        <div className="carousel">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Annabelle} fluid
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={OldGuard}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ElHoyo}
      alt="4 slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Patser}
      alt="5 slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wwz}
      alt="6 slide"
    />
  </Carousel.Item>
</Carousel>
</div>
        <div className="Movie">
          <h2>Onze Films </h2>
          <div className="Movie-items">
            {movies.map(({ node: { film, slug } }) => (
              <Movie to={`/${slug}`} key={slug}>
                <Image
                  fluid={film.fotoVanDeFilm.imageFile.childImageSharp.fluid}
                  alt={film.fotoVanDeFilm.altText}
                />
                <div className="Movie-info">
                  <p>
                    {film.titleOfTheMovie}
                  </p>
                </div>
              </Movie>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default MoviePage