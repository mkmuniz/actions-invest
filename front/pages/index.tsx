import React from 'react';
import SearchAppBar from '../components/navbar/index';
import Footer from '../components/footer';
import HomeContent from '../components/homeContent';

export default function Home() {
  return (
    <div>
      <SearchAppBar />
      <HomeContent />
      <Footer />
    </div>
  )
}
