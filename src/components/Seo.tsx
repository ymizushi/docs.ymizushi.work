import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  const defaultKeywords = ['react', 'typescript'];

  const metaDescription = description || 'ymizushiの技術徒然';

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
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
