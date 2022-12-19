import { Image, Text, Link } from "@chakra-ui/react";
const FooterCards = () => {
  return (
    <div>
      <div style={{ display: "flex", marginTop: "100px" }}>
        <div>
          <Image src="https://www.yoox.com/images/yoox80/banners/6824_1_XmasGift_WM_Bottom.jpg?634485886601286852&impolicy=cropDefault&width=1450&height=610" />
          <div
            style={{
              position: "absolute",
              bottom: "13%",
              left: "10px",
              fontSize: "200px",
              width: "400px",
              height: "180px",
              backgroundColor: "white",
              textAlign: "left",
              marginBottom: "80px",
            }}
          >
            <Text
              display="block"
              fontSize=" 24px"
              fontWeight="700"
              marginBottom="12px"
              fontFamily="MontSerrat,sansSerif"
              marginLeft="20px"
              marginTop="25px"
            >
              THERE'S NO PLACE LIKE HOME
            </Text>
            <Text
              display="block"
              fontSize=" 16px"
              fontWeight="300"
              fontFamily="PlayfairDisplay,sansSerif"
              marginLeft="20px"
            >
              Discover the new selection of interior design
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCards;
