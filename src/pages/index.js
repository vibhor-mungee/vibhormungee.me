import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { 
  Paragraph, 
  Heading, 
  ThemeConsumer,
  Avatar,
} from 'evergreen-ui'
import Section from '../components/section';
import Experise from '../components/expertise';
import ResultFocus from '../components/resultFocus';
// import References from "../components/references";
import Projects from "../components/projects";
import ContactCard from "../components/contactCard";


class IndexPage extends React.PureComponent{
  render() {
    return  (
      <StaticQuery
        query={graphql`
          {
            personalDetailsJson {
              id
              name
              email
              about_me
              what_do_i_do
              website
            }
            placeholderImage: file(relativePath: { eq: "vibhormungee2.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => 
          (
          <ThemeConsumer>
          {theme => 
            <Layout>
              <SEO title="Vibhor Mungee — Full‑Stack Lead Engineer" keywords={[
                `vibhor`, `vibhormungee`, `full stack engineer`, `software architect`, `react`, `react native`, `vue`, `next.js`, `node.js`, `express`, `nest.js`, `graphql`, `serverless`, `aws`, `gcp`, `ci/cd`, `microservices`, `stockholm`
              ]} />
              <div className="row flex-column-reverse flex-md-row">
                <div className="offset-lg-1 col-lg-5 col-sm-12 p-5 text-lg-left text-center">
                  <Heading size={800} marginBottom={20}>Hey there</Heading>
                  <Paragraph>{data.personalDetailsJson.about_me}</Paragraph>
                </div>
                <div className="offset-lg-1 col-lg-4 col-sm-12 p-5 text-center">
                  <Avatar
                    src={data.placeholderImage.childImageSharp.fluid.src}
                    isSolid
                    name="Vibhor Mungee"
                    color="blue"
                    size={250}
                  />
                </div>
              </div>
              <Experise theme={theme}/>
              <Section
                heading="What I do"
                paragraph={data.personalDetailsJson.what_do_i_do}
                theme={theme}
              />          
              <ResultFocus theme={theme}/>
              <Projects theme={theme}/>
              {/* <References theme={theme}/> */}
              <ContactCard theme={theme} />
            </Layout>
          }
        </ThemeConsumer>
      )}
      />
    )
  }
}

export default IndexPage
