import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Banner from '../components/Home/Banner';
import Footer from '../components/Footer';
import config from '../config';
import { BlogHeaderData } from '../types';
import { getSortedBlogHeadersData } from '../lib/blogs';
import Blogs from '../components/Home/Blogs';

interface Props {
  blogHeaders: BlogHeaderData[];
}

const getStaticProps: GetStaticProps = async () => {
  const blogHeaders: BlogHeaderData[] = await getSortedBlogHeadersData();
  return {
    props: { blogHeaders },
  };
};

const Home: NextPage<Props> = ({ blogHeaders }) => {
  return (
    <div>
      <Head>
        <title>{config.homePage.title}</title>
        <meta name="description" content={config.homePage.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Nav />
      </nav>
      <main>
        <Banner />
        <Blogs blogHeaders={blogHeaders} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export { getStaticProps };
export default Home;
