import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashPressable}
      onPress={() => navigation.navigate("UserLogin")}
    >
      <View style={styles.rectangleView} />
      <View style={styles.barsStatusWhite}>
        <Image
          style={styles.lOGOUDB1Icon}
          resizeMode="cover"
          source={require("../assets/logoudb-1.png")}
        />
        <View style={styles.actionView}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
      <Text style={styles.aPPLIBRARYDUTABANGSAUNIVER}>
        <Text style={styles.aPPLIBRARY}>{`APP LIBRARY `}</Text>
        <Text style={styles.dUTABANGSAUNIVERSITY}>DUTA BANGSA UNIVERSITY</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 812,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 812,
  },
  lOGOUDB1Icon: {
    position: "absolute",
    top: 182,
    left: 73,
    width: 228,
    height: 279,
  },
  timeText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: -0.17,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "center",
    width: 54,
  },
  actionView: {
    position: "absolute",
    marginTop: -8.07,
    top: "50%",
    left: 19.89,
    width: 54,
    height: 18,
  },
  containerIcon: {
    position: "absolute",
    marginTop: -4.91,
    top: "50%",
    right: 14.5,
    width: 67,
    height: 11.5,
  },
  barsStatusWhite: {
    position: "absolute",
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
  },
  aPPLIBRARY: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  dUTABANGSAUNIVERSITY: {
    margin: 0,
  },
  aPPLIBRARYDUTABANGSAUNIVER: {
    position: "absolute",
    top: 494,
    left: 96,
    fontSize: 15,
    letterSpacing: -0.17,
    lineHeight: 18,
    fontFamily: "Josefin Sans",
    color: "#000",
    textAlign: "center",
  },
  splashPressable: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Splash;
