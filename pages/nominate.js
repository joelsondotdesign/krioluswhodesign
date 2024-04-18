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

      <Link href="/" shallow={true} legacyBehavior>
        <a className="auxNav arrowback">←</a>
      </Link>
      <iframe 
        className="airtable-embed" 
        src="https://airtable.com/embed/appbCYV4xmMm8P3gP/pago7HkjvD8cNmr7s/form" frameborder="0" onmousewheel="" width="100%" height="640" 
        style={{
          background: '#0D56F6',
          border: '1px solid #ccc',
          marginTop: '5rem'
        }}
      />

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
      `}</style>
    </div>
  );
}
