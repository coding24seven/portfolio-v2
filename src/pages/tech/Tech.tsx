import styled from 'styled-components';
// import Page from 'page-transition/Page';
import colors from '@/helpers/colors.ts';
import config from '@/helpers/config.ts';

const em = config.em.bind(config);

const StyledPage = styled.div`
  min-height: 100vh;
  padding: 8rem 10rem 1rem 22rem;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: Roboto;
  color: ${colors.rgbBlackFont};
  & ::selection {
    background-color: ${colors.rgbBlue};
  }

  @media (max-width: ${em(1100)}em) {
    padding: 10.7rem 3rem 3rem 3rem;
  }
  @media (max-width: ${em(650)}em) {
    padding: 10.7rem 3rem;
  }
  @media (max-width: ${em(500)}em) {
    padding: 8.2rem 1rem;
  }
  @media (max-width: ${em(400)}em) {
    padding-top: 7.2rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  caption-side: bottom;
  background-color: white;

  & caption {
    margin-top: 1.4rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  thead {
    & > tr > th:first-child {
      border-top-left-radius: 1rem;
      border: none;
    }
    & > tr > th:last-child {
      border-top-right-radius: 1rem;
      border: none;
    }
  }

  thead th {
    letter-spacing: 0.1rem;
    background-color: #5e5e5e;
    color: white;
  }

  --gradient-dark: #f6f6f6;
  --gradient-light: #fdfdfd;

  tr {
    &:nth-child(even) {
      background-image: linear-gradient(
        var(--gradient-light),
        var(--gradient-dark)
      );
    }
    &:nth-child(odd) {
      background-image: linear-gradient(
        var(--gradient-dark),
        var(--gradient-light)
      );
    }
    &:hover {
      background-image: linear-gradient(white, white);
    }
  }

  & td,
  & th {
    padding: 0.9rem 1.3rem;
    border: 0.1rem solid #ddd;
    text-align: left;
  }
`;

export default function Tech(props) {
  const { pageTitle } = props;

  const TechPage = (
    <StyledPage>
      <StyledTable>
        <caption>Table 1.0 of Technologies</caption>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Case</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Azure Devops, Jira</td>
            <td>is where I can locate all work items and create new ones</td>
          </tr>

          <tr>
            <td>Git</td>
            <td>is a version control system I rely on for every project</td>
          </tr>

          <tr>
            <td>English</td>
            <td>
              is a language I speak and write at native level, just like Polish
            </td>
          </tr>

          <tr>
            <td>TypeScript</td>
            <td>is what keeps all kinds of types in check</td>
          </tr>

          <tr>
            <td>JavaScript</td>
            <td>is part of every project of mine</td>
          </tr>

          <tr>
            <td>Vue.js</td>
            <td>
              is a library I've worked with on e-commerce store and accounting
              systems
            </td>
          </tr>

          <tr>
            <td>React.js</td>
            <td>
              is a library that is good for building single-page sites like this
              one
            </td>
          </tr>

          <tr>
            <td>Node.js</td>
            <td>
              is a runtime I've used to implement the backend for many sites
            </td>
          </tr>

          <tr>
            <td>Express.js</td>
            <td>is my go-to framework for setting up servers in Node.js</td>
          </tr>

          <tr>
            <td>AWS, Google Cloud</td>
            <td>is where I've deployed apps</td>
          </tr>

          <tr>
            <td>Github Actions</td>
            <td>is how continuous integration/delivery can be done</td>
          </tr>

          <tr>
            <td>Postgres</td>
            <td>is a relational database management system I use</td>
          </tr>

          <tr>
            <td>Docker containers</td>
            <td>is how services can be developed, tested, and deployed</td>
          </tr>

          <tr>
            <td>Jest</td>
            <td>is what I use for unit and integration testing</td>
          </tr>

          <tr>
            <td>HTML</td>
            <td>is useful for creating tables such as this one</td>
          </tr>

          <tr>
            <td>CSS</td>
            <td>is a language I use to style HTML documents</td>
          </tr>

          <tr>
            <td>SCSS</td>
            <td>is CSS on steroids</td>
          </tr>

          <tr>
            <td>Webpack</td>
            <td>is a module bundler I could live without</td>
          </tr>

          <tr>
            <td>ESLint</td>
            <td>
              is a tool that flags a custom range of programming and stylistic
              errors
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledPage>
  );

  return TechPage;
  // return <Page>{TechPage}</Page>;
}
