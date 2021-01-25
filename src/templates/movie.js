import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Wrapper, Image } from "./templateStyles/MovieStyles"


const MovieTemplate = ({
  data: {
    wpcontent: {
      movie: {
        film,
        genres: { edges: genres },
      },
    },
  },
}) => {
    return(
       <Layout>
           <SEO title="Movie" />
           <Wrapper>
        <div className="Movie-container">
          <div className="Movie-image">
            <Image
              fluid={film.fotoVanDeFilm.imageFile.childImageSharp.fluid}
              alt={film.fotoVanDeFilm.altText}
            />
            <div className="roles">
              {genres.map(({ node: genres }) => (
                <div key={genres.name} className="role">
                  {genres.name}
                </div>
              ))}
            </div>
          </div>
          <div className="Movie-info">
            <h2>
              {film.titleOfTheMovie}
            </h2>
          
            <p className="description">{film.korteBeschrijving}</p>
            <p className="description">
              <strong>Duurtijd: </strong> <b>{film.duurtijd}</b> minuten
            </p>
            <p className="description">
              <strong>Releasedatum: </strong> <b>{film.releaseDatum}</b>
            </p>
          </div>
        </div>
      </Wrapper>
       </Layout>
    )
} 

export default MovieTemplate

export const pageQuery = graphql`
query ($id: ID!) {
  wpcontent {
    movie(id: $id, idType: ID) {
      genres {
        edges {
          node {
            name

          }
        }
      }
      film {
        duurtijd
        fieldGroupName
        korteBeschrijving
        releaseDatum
        titleOfTheMovie
        fotoVanDeFilm {
          altText
          sourceUrl
        imageFile {
          childImageSharp {
            fluid(quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        }
      }
    }
  }
}
`
