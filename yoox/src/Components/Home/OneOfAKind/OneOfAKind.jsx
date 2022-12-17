import axios from "axios";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OneOfAKind.css";
import { Text, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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

function OneOfAKind() {
  const [data, setData] = React.useState([]);
  axios
    .get("https://mock-server-app-fx5c.onrender.com/oneofakind")
    .then((res) => setData(res.data));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="oneofakind">
      <div>
        <Text
          letterSpacing=".5px"
          fontFamily="Montserrat,sansSerif"
          fontSize="28px"
          lineHeight="28px"
          marginBottom="23px"
        >
          {" "}
          ONE OF A KIND
        </Text>
      </div>
      <br />
      <Link>VIEW ALL</Link>
      <Slider style={{ marginTop: "100px" }} {...settings}>
        {data?.map((el, id) => (
          <NavLink style={{ textDecoration: "none" }} to={`/products/${el.id}`}>
            <div key={data.id} className="card">
              <div className="card-top">
                <img src={el.url} alt="product-image" />
                <Text
                  marginTop="20px"
                  fontFamily="Montserrat,sansSerif"
                  fontSize="15px"
                  lineHeight="15px"
                  fontWeight="bold"
                >
                  {el.brand}
                </Text>
                <Text
                  fontSize="13px"
                  marginTop="15px"
                  fontFamily="Montserrat,sansSerif"
                >
                  {el.title}
                </Text>

                <Text
                  fontSize="15px"
                  marginTop="15px"
                  fontFamily="Montserrat,sansSerif"
                >
                  {el.offer}
                </Text>
                <Text
                  marginTop="5px"
                  fontFamily="Montserrat,sansSerif"
                  fontSize="15px"
                  lineHeight="15px"
                  fontWeight="bold"
                >
                  $ {el.price}
                </Text>
                {/* <div key={el.id}><Button>View Products</Button></div> */}
              </div>
            </div>{" "}
          </NavLink>
        ))}
      </Slider>
    </div>
  );
}
export default OneOfAKind;
