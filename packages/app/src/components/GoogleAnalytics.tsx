// ---------------------------------------------------------------------
// Components > Cursor
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import Script from 'next/script'
// --------------------------------------------------------------------- 

// --------------------------------------------------------------------- 
import { GOOGLE_ANALYTICS_ID } from '@/app/constants'
// --------------------------------------------------------------------- 

const GoogleAnalytics = () => {
  return (
    <>
      <Script id="ga-consent" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics;