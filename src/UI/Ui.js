import React from 'react';

import './Ui.css';
import Navbar from '../components/Navbar';
import TextFaceook from '../components/TextFacebook';
import SecondaryText from '../components/SecondaryText';
import CreateEventButton from '../components/CreateEventButton';
import SocialMedia from '../components/SocialMedia';
import ProductImgLeft from '../components/productIMG/ProductImgLeft';
import ProductImgMiddle from '../components/productIMG/ProductImgMiddle';
import ProductImgRight from '../components/productIMG/ProductImgRight';

const Ui = () => {
  return (
    <div>
      <Navbar />
      <TextFaceook />
      <SecondaryText />
      <CreateEventButton />
      <SocialMedia />
      <ProductImgLeft />
      <ProductImgMiddle />
      <ProductImgRight />
    </div>
  );
};

export default Ui;
