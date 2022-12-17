import { Image, Text, Link } from "@chakra-ui/react";
const FooterCards = () => {
  return (
    <div>
      <div style={{ display: "flex", marginTop: "100px" }}>
        <div>
          <Image src="" />
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
        <div>
          <Image src="" />
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "13%",
              fontSize: "200px",
              width: "400px",
              height: "180px",
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
              SMELL'S LIKE TEEN SPIRIT
            </Text>
            <Text
              display="block"
              fontSize=" 16px"
              fontWeight="300"
              fontFamily="PlayfairDisplay,sansSerif"
              marginLeft="20px"
            >
              90s grunge and punk rocl details
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
              <div style={{ display: "flex", gap: "200px" }}>
                <div>
                  <Link>EXPLORE</Link>
                </div>

                <div>
                  <Link>SHOP NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCards;
