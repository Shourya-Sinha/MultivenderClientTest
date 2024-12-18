import React from "react";
import Header2 from "../../components/Chat/Header2";
import { Box } from "@mui/material";
import SliderHomeComp from "../../components/homeComp/SliderHomeComp";
import Services from "../../components/homeComp/Services";
import MiddleBoxAll from "../../components/homeComp/MiddleBoxAll";
import MoreAll from "../../components/homeComp/MoreAll";
import SpecialProduct from "../../components/homeComp/SpecialProduct";
import FooterHome from "../../components/homeComp/FooterHome";

const GeneralApp = () => {

  return (
    <>
      <Box sx={{width:'100%'}}>
      <Header2 />
      <SliderHomeComp />
      <Services />
      <MiddleBoxAll />
      <MoreAll />
      <SpecialProduct />
      {/* Home all component here below*/}

      </Box>
    </>
  );
};

export default GeneralApp;
