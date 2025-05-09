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
      

      <div data-tf-live="01HHPM2BST8FF8NZ3CZSC1VBPC" style={{ width: "100%", height: "100vh" }}></div><script src="//embed.typeform.com/next/embed.js"></script>


      <Analytics />

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
      `}</style>
    </div>
  );
}
