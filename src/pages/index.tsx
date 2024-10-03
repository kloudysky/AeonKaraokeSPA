import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Features />
      <CTA />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
