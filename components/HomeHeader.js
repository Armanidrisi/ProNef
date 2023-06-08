import { View, Text, TextInput, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, John 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}
        >
          eu labore labore cupidatat aliquip qui adipisicing ullamco elit sit
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.font - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            onChangeText={onSearch}
            style={{
              flex: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;