import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { 
  Paragraph, 
  Heading, 
  ThemeConsumer,
  Icon,
} from 'evergreen-ui'
import Section from '../components/section';
import Experise from '../components/expertise';
import ResultFocus from '../components/resultFocus';
import References from "../components/references";
import Contact from "../components/contact";
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
              phone
              what_do_i_do
              website
            }
          }
        `}
        render={data => 
          (
          <ThemeConsumer>
          {theme => 
            <Layout>
              <SEO title="Home" keywords={[`vibhor`, `vibhormungee`, `gatsby`, `application`, `react`, `resume`, `portfolio`]} />
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-lg-6 col-sm-12 p-5 text-lg-left text-center">
                  <Heading size={800} marginBottom={20}>Hey there</Heading>
                  <Paragraph>{data.personalDetailsJson.about_me}</Paragraph>
                </div>
                <div className="col-lg-6 col-sm-12 p-5 text-center">
                  <Icon icon="console" color='#47B881' size={200} />
                </div>
              </div>
              <Experise theme={theme}/>
              <Section
                heading="What do I do?"
                paragraph={data.personalDetailsJson.what_do_i_do}
                theme={theme}
              />          
              <ResultFocus theme={theme}/>
              <Projects theme={theme}/>
              <References theme={theme}/>
              {typeof window !== 'undefined' && 
              <div className="d-none d-lg-block">
                <Contact /> 
              </div>
              }
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
