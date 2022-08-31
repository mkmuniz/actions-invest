import React from 'react';
import { Container } from '@mui/material';
import SearchAppBar from '../components/navbar/index';
import Footer from '../components/footer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
