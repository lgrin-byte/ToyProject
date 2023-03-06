import React from 'react';
import PropTypes from 'prop-types';

const initAd = () => {
  window.onload = function () {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
    
  }
  // (window.adsbygoogle = window.adsbygoogle || []).push({});
};

class GoogleAd extends React.Component {
  componentDidMount() {
    initAd();
  }

  shouldComponentUpdate(nextProps) {
    const { props: { path } } = this;
    return nextProps.path !== path;
  }

  componentDidUpdate() {
    initAd();
  }

  render() {
    const { children, className, path } = this.props;
    return (
      <div key={path} className={`adsense ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="123456"
          data-ad-slot="123456"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

GoogleAd.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GoogleAd.defaultProps = {
  className: '',
};

export default GoogleAd;