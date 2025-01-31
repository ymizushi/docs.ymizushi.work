import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  const defaultKeywords = ['react', 'typescript'];

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>ymizushiのブログ</title>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  keywords: [],
  description: `ymizushiの技術徒然`,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
