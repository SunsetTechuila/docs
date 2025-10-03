import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import HomepageFeatures from '../components/HomepageFeatures';
import SwiperCarousel from '../components/SwiperCarousel';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <div className={styles.heroCarousel}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => <SwiperCarousel />}
        </BrowserOnly>
      </div>

      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/getting-started"
        >
          Install Now!
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Powerful CLI tool to take control of the Spotify client."
        />
      </Head>
      <div className={styles.sponsor}>
        Find Cheap Discord Nitro & Server Boosts in{' '}
        <a href="https://boostmania.gg?ref=spicetify">boostmania.gg</a>
      </div>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
