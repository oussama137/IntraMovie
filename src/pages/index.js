import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Wrapper,
  Image,
  Movie
} from "../pageStyles/pageStyles"

const IndexPage = () => {
  const {
      wpcontent: {
        page: {
          homeMeta: {
          kleineBeschrijving,
          title,
          bannerFoto,
          featuredProducts
          },
        },
      },
        
  } = useStaticQuery(graphql`
  query{
    wpcontent {
      page(id: "home", idType: URI) {
        homeMeta {
          fieldGroupName
          kleineBeschrijving
          title
          bannerFoto {
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
          featuredProducts {
            ... on WPGraphql_Movie {
              slug
              film {
                titleOfTheMovie
                releaseDatum
                korteBeschrijving
                fieldGroupName
                duurtijd
                fotoVanDeFilm {
                  altText
                  sourceUrl
                    imageFile {
                      childImageSharp {
                        fluid(quality: 50, grayscale: true) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                  }
                }
              }
            }
          }
        }
      }
    }
  }    
 `) 
 console.log(featuredProducts);
  return(
    <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="banner">
      <Image
            fluid={bannerFoto.imageFile.childImageSharp.fluid}
            alt={bannerFoto.altText}
          />
          <div className="inner-div">
            <p className="header-title">{title}</p>
            <p className="header-description">{kleineBeschrijving}</p>
          </div>
      </div>  
      <div className="description">
          <h2>IntraMovies</h2>
          <p>{kleineBeschrijving}</p>
        </div>
      <div className="Movie">
        <h2>Featured Movies</h2>
       <div className="Movie-items">
      {featuredProducts.map(({ film, slug }) => (
        <Movie key={slug} to={`/${slug}`}>
        <Image
          fluid={film.fotoVanDeFilm.imageFile.childImageSharp.fluid}
          alt={film.fotoVanDeFilm.altText}
        />
        <div className="Movie-info">
          <p>
            {film.titleOfTheMovie}<br></br>
            {"release: "} {film.releaseDatum}<br></br>
            {"duurtijd: "} {film.duurtijd} {"min"}
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

export default IndexPage
