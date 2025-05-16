import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Moment Motor Co. Auto Wrap Campaign</title>
      <meta name="description" content="Join Moment Motor Co.'s Auto Wrap Campaign and earn $350 weekly by simply driving with our decal on your vehicle." />
      <meta property="og:title" content="Moment Motor Co. Auto Wrap Campaign" />
      <meta property="og:description" content="Earn $350 weekly by advertising with our car decals. Apply now!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://momentmotorco.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </Helmet>
    <App />
  </HelmetProvider>
);
