import Head from "next/head";
import Link from "next/link";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

export default function Nominate({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Kriolus Who Design | Nominate</title>
        <link rel="icon" href="/favicon.png" />
        <MetaTags />
      </Head>

      <div style={{ width: "100%", position: "relative", height: "100vh" }}>

        <div data-tf-live="01HHPM2BST8FF8NZ3CZSC1VBPC"></div><script src="//embed.typeform.com/next/embed.js"></script>
        
        {/* <iframe
          id="typeform-full"
          width="100%"
          height="100%"
          border="0"
          allow="camera; microphone; autoplay; encrypted-media;"
          src="https://form.typeform.com/to/bbrPUqMe"
        ></iframe>{" "} */}

        {/* <script
          type="text/javascript"
          src="https://embed.typeform.com/embed.js"
        ></script> */}

        <Analytics />

      </div>

      <Link href="/" shallow={true} legacyBehavior>
        <a className="auxNav arrowback">←</a>
      </Link>
     
     {/* <iframe 
        className="airtable-embed" 
        src="https://airtable.com/embed/appbCYV4xmMm8P3gP/pago7HkjvD8cNmr7s/form" frameborder="0" onmousewheel="" width="100%" height="640" 
        style={{
          background: '#0D56F6',
          border: '1px solid #ccc',
          marginTop: '5rem'
        }}
      /> */}

      <style jsx global>{`
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        .container {
          min-height: 100vh;
        }
        iframe {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>
    </div>
  );
}
