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

        <Analytics />

      </div>

      <Link href="/" shallow={true} legacyBehavior>
        <a className="auxNav arrowback">←</a>
      </Link>

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
