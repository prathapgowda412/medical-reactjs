import React from 'react';
import BannerCarousel from '../../components/home-components/banner/banner-carousel';
import BannerCTA from '../../components/home-components/banner/banner-cta';
import ContactusSection from '../../components/home-components/contactus-sections';
import FeaturedSection from '../../components/home-components/featured-section';
import HeroSection from '../../components/home-components/hero-section/hero-section';
import SectionTwo from '../../components/home-components/section-two';
import Layout from '../../components/layout/layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <SectionTwo />
      <ContactusSection />
      <BannerCTA />
    </Layout>
  );
};

export default HomePage;
