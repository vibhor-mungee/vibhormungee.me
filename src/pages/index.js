import React from "react"
import { StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { 
  Pane, 
  Paragraph, 
  Heading, 
  ThemeConsumer,
  Icon,
} from 'evergreen-ui'
import Section from '../components/section';
import Experise from '../components/expertise';
import ResultFocus from '../components/resultFocus';
import Projects from "../components/projects";
import References from "../components/references";
import Contact from "../components/contact";
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
              <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
              <Pane 
                clearfix
                display="flex"
                flexDirection="row"
                paddingTop={100}
                paddingBottom={50}
              >
                <Pane
                  clearfix
                  height={180}
                  width={480}
                  display="flex"
                  alignItems="left"
                  justifyContent="center"
                  flexDirection="column"
                  padding={20}
                >
                  <Heading size={800} marginBottom={20}>Hey there</Heading>
                  <Paragraph>{data.personalDetailsJson.about_me}</Paragraph>
                </Pane>
                <Pane
                  height={200}
                  width={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  marginLeft={140}
                >
                  <Icon icon="console" color='#47B881' size={200} />
                </Pane>
              </Pane>
              <Experise theme={theme}/>
              <Section
                heading="What do I do?"
                paragraph={data.personalDetailsJson.what_do_i_do}
                theme={theme}
              />          
              <ResultFocus theme={theme}/>
              <Projects theme={theme}/>
              <References theme={theme}/>
              <Contact />
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
