import React from "react";
import { Image, Text } from "@chakra-ui/react";
function HomeCarts() {
  return (
    <div style={{ display: "flex", gap: "30px", marginTop: "100px" }}>
      <div style={{ marginTop: "30px", marginLeft: "10px", cursor: "pointer" }}>
        <Image src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png?634485886601286852#width=473&height=660" />
        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          BAUME & MERCIER
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          The New Riviera Collecation 
        </Text>
      </div>
      <div style={{ cursor: "pointer" }}>
        <Image
          height="550px"
          src="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_W_Tris.jpg?634485886601286852#width=473&height=560"
        />

        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          BOSS
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          Be your own BOSS
        </Text>
      </div>
      <div
        style={{ marginTop: "30px", marginRight: "10px", cursor: "pointer" }}
      >
        <Image src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886601286852#width=473&height=560" />
        <Text
          display="block"
          fontFamily="PlayfairDisplay,sansSerif"
          fontSize="24px"
          fontWeight="700"
          marginBottom="12px"
          marginTop="10px"
        >
          MONTBLANC
        </Text>
        <Text
          display=" block"
          fontSize="16px"
          fontWeight="300"
          lineHeight="19px"
        >
          The New Gift Generation
        </Text>
      </div>
    </div>
  );
}
export default HomeCarts;
