import React from "react";
import PropTypes from "prop-types";

const initAd = () => {
    window.onload = function () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
};

class GoogleAd extends React.Component {
    componentDidMount() {
        initAd();
    }

    shouldComponentUpdate(nextProps) {
        const {
            props: { path },
        } = this;
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
                    class="adsbygoogle"
                    style={{
                        display: "inline-block",
                        width: "320px",
                        height: "100px",
                    }}
                    data-ad-client="ca-pub-1919598055512436"
                    data-ad-slot="2044520891"
                ></ins>
            </div>
        );
    }
}

GoogleAd.propTypes = {
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
};

GoogleAd.defaultProps = {
    className: "",
};

export default GoogleAd;
