import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Ticketing Events | Find Your Ticket",
  desccription: "Find Ticketing Event You Want",
  keywords: "ticket, ticketing, events",
};
