import React from "react";
import { Link } from "gatsby";

// node modules
import "normalize.css/normalize.css";
import "prismjs/themes/prism.css";

// custom
import "../../src/styles/global.css";

const Layout = ({ location, title, pageContext, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  let footer;
  const { previous, next } = pageContext;

  if (location.pathname === rootPath) {
    header = (
      <div className="header --top">
        <h1 className="title">思考</h1>
      </div>
    );
    footer = (
      <div className="footer">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Kotaro Chiba
        </span>
      </div>
    );
  } else {
    header = (
      <div className="header">
        <div className="logo">
          <Link to={rootPath}>
            <img src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <p className="title">
          思考 / <span>{title}</span>
        </p>
      </div>
    );
    footer = (
      <div className="footer --article">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Kotaro Chiba
        </span>
        <nav>
          <ul className="article-navi">
            <li className="archive --next">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  &lt; {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="archive --before">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} &gt;
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="basic-skelton">
      <div className="header-skelton">
        <header>{header}</header>
      </div>
      <div className="main-skelton">
        <main>
          <div className="document-skelton">
            <div className="document">{children}</div>
          </div>
        </main>
      </div>
      <div className="footer-skelton">
        <footer>{footer}</footer>
      </div>
    </div>
  );
};

export default Layout;
