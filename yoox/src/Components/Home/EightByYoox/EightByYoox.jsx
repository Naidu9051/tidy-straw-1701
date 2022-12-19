import React from "react";
import { Image, Text, Link } from "@chakra-ui/react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EightByYoox.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function EightByYoox() {
  const [data, setData] = React.useState([]);
  axios
    .get("https://mock-server-app-fx5c.onrender.com/eightbyyoox")
    .then((res) => setData(res.data));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Image
          marginLeft="50px"
          width="80%"
          height="600px"
          src="https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png?634485886601286852#width=930&height=660"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "7%",
          fontSize: "200px",
          width: "400px",
          height: "150px",
          backgroundColor: "white",
          textAlign: "left",
        }}
      >
        <Text
          display="block"
          fontSize=" 24px"
          fontWeight="700"
          marginBottom="12px"
          fontFamily="MontSerrat,sansSerif"
          marginLeft="20px"
          marginTop="15px"
        >
          IT'S PARTY TIME!
        </Text>
        <Text
          display="block"
          fontSize=" 16px"
          fontWeight="300"
          fontFamily="PlayfairDisplay,sansSerif"
          marginLeft="20px"
        >
          8 by YOOX: Select this season's perfect party looks.
        </Text>

        <div
          style={{
            display: "flex",
            fontSize: "15px",
            marginTop: "17px",
            gap: "30px",
            marginLeft: "20px",
            fontFamily: "Montserrat,sansSerif",
            fontWeight: "600",
          }}
        >
          <div>
            <Link>SHOP NOW</Link>
          </div>
          <div>
            <Link>DISCOVER MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EightByYoox;
