import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout
      title={pageProps.title}
      description={pageProps.description}
      keywords={pageProps.keywords}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

