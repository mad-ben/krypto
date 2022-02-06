import { useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

import deximg from "../../images/dex2.png";
import nftimg from "../../images/nft2.png";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services2">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white sm:text-3xl py-2">Roadmap...</h1>
          <h3 className="text-white py-2 mx-30">diving deeper into web 3.0</h3>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-start items-center">
        <Card sx={{ maxWidth: 345 }} variant="outlined">
          <CardHeader title="Create Basic DEX" subheader="March, 2022" />
          <CardMedia component="img" height="194" image={deximg} alt="deximg" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Add decentrilized exchange. Add ability to swap and exchange
              different cryptos.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} variant="outlined">
          <CardHeader title="NFT marketplace" subheader="August, 2022" />
          <CardMedia component="img" height="194" image={nftimg} alt="nftimg" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Add NFT support and trading. Create NFT trading platform for
              everyone.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
