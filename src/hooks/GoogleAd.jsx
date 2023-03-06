
import { useEffect } from 'react';

// declare global {
//   interface Window {
//     adsbygoogle: any;
//   }
// }

const GoogleAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, []);

  return (
    <div className="googleAd-container">
      <ins class="adsbygoogle"
          style="display:inline-block;width:320px;height:100px"
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="2044520891"></ins>
    </div>
  );
};

export default GoogleAd;