import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Button from 'components/ui/Button';
import * as Styled from './styles';

const ConctactInfo = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  // const contacts = allMarkdownRemark.edges;

  return (

    <Container section>

      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      {/* <div style={{ marginLeft: "auto", marginRight: "auto" }}> */}
      {/* {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, icon, content }
        } = item.node;

        return (



          <Styled.ContactInfoItem key={id}>
            <InfoBlock icon={icon} title={title} content={content} center />
          </Styled.ContactInfoItem>


        );
      })} */}
      {/* </div> */}


      <Styled.Form name="Contact_Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact_Form" action="/thank-you" />
        <Styled.Input type="text" placeholder="Name" />
        <Styled.Input type="email" placeholder="Email" />
        <Styled.Textarea placeholder="Message" />
        <Button primary block>
          Submit
        </Button>
      </Styled.Form>
    </Container>

  );
};

export default ConctactInfo;
