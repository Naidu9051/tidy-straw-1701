import React from "react";
import { Image, Text } from "@chakra-ui/react";
function HomeCarts() {
  return (
    <div style={{ display: "flex", gap: "30px", marginTop: "100px" }}>
      <div style={{ marginTop: "30px", marginLeft: "10px", cursor: "pointer" }}>
        <Image src="" />
        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          HUGO
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          Express yourself
        </Text>
      </div>
      <div style={{ cursor: "pointer" }}>
        <Image
          height="650px"
          src=""
        />

        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          MONTEBLANK
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          It's gifting season
        </Text>
      </div>
      <div
        style={{ marginTop: "30px", marginRight: "10px", cursor: "pointer" }}
      >
        <Image src="" />
        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          FULRA
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          Autumn/Winter 2022 Collection
        </Text>
      </div>
    </div>
  );
}
export default HomeCarts;
