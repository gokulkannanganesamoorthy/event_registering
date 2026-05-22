import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'EventSphere | Where Moments Become Movements',
  description = 'Discover extraordinary events or host your own. EventSphere connects event creators with passionate audiences across every city.',
  ogImage = 'https://eventsphere.app/og-image.png',
  ogUrl = 'https://eventsphere.app/',
  ogType = 'website',
}) {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="EventSphere" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@EventSphere" />

      {/* Canonical */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
}
