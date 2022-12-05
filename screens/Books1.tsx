import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Books1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.books1View}>
      <Image
        style={styles.thumbnailIcon}
        resizeMode="cover"
        source={require("../assets/thumbnail.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={styles.enjoyYourRead}>Enjoy your read</Text>
      <Pressable
        style={styles.menuPressable}
        onPress={() => navigation.navigate("User")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/menu3.png")}
        />
      </Pressable>
      <View style={styles.statusBarView}>
        <View style={styles.frameView}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={styles.adhiText}>Adhi-</Text>
        </View>
        <View style={styles.frameView1}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <Text style={styles.text}>46%</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
        </View>
        <Text style={styles.aMText}>9:42 AM</Text>
      </View>
      <Text style={styles.smartCitiesIntroducingDig}>
        <Text style={styles.smartCities1}>
          <Text style={styles.smartCities}>Smart Cities :</Text>
        </Text>
        <Text style={styles.introducingDigitalInnovation1}>
          <Text style={styles.introducingDigitalInnovation}>
            Introducing Digital Innovation to Cities
          </Text>
        </Text>
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.aBigPartOfThisICTFramewo}>
        <Text
          style={styles.aBigPart}
        >{`A big part of this ICT framework is an intelligent network of connected `}</Text>
        <Text
          style={styles.objectsAndMachines}
        >{`objects and machines (also known as a digital city) transmitting data `}</Text>
        <Text style={styles.usingWirelessTechnology}>
          using wireless technology and the cloud.
        </Text>
        <Text style={styles.text1}></Text>
        <Text
          style={styles.cloudBasedIoTApplications}
        >{`Cloud-based IoT applications receive, analyze, and manage data in `}</Text>
        <Text style={styles.realTimeToHelp}>
          real-time to help municipalities, enterprises, and citizens make
          better
        </Text>
        <Text style={styles.decisionsThatImprove}>
          decisions that improve quality of life.
        </Text>
        <Text style={styles.text2}></Text>
        <Text
          style={styles.citizensEngageWith}
        >{`Citizens engage with smart city ecosystems in various ways using `}</Text>
        <Text style={styles.smartphonesAndMobile}>
          smartphones and mobile devices and connected cars and homes.
        </Text>
        <Text style={styles.pairingDevicesAnd}>
          Pairing devices and data with a city’s physical infrastructure and
        </Text>
        <Text style={styles.servicesCanCut}>
          services can cut costs and improve sustainability.
        </Text>
        <Text style={styles.text3}></Text>
        <Text style={styles.communitiesCanImprove}>
          Communities can improve energy distribution, streamline trash
        </Text>
        <Text style={styles.collectionDecreaseTraffic}>
          collection, decrease traffic congestion, and improve air quality
        </Text>
        <Text style={styles.withHelpFrom}>with help from the IoT.</Text>
      </Text>
      <View style={styles.buttonView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.fullReadText}>Full Read</Text>
      </View>
      <Image
        style={styles.lOGOUDB2Icon}
        resizeMode="cover"
        source={require("../assets/logoudb-3.png")}
      />
      <Text style={styles.liBRARYUDBText}>LiBRARY UDB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnailIcon: {
    position: "absolute",
    top: 140,
    left: 13,
    borderRadius: 9,
    width: 349,
    height: 266,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 16,
  },
  enjoyYourRead: {
    position: "absolute",
    top: 48,
    left: 72,
    fontSize: 7,
    fontFamily: "Fenix",
    color: "#151515",
    textAlign: "left",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  menuPressable: {
    position: "absolute",
    left: 326,
    top: 30,
    width: 18,
    height: 18,
  },
  groupIcon: {
    position: "absolute",
    top: 3,
    left: 81.36,
    width: 12,
    height: 9,
  },
  groupIcon1: {
    position: "absolute",
    top: 5,
    left: 3.36,
    width: 33.5,
    height: 5.5,
  },
  adhiText: {
    position: "absolute",
    top: 0.5,
    left: 39.86,
    fontSize: 12,
    fontFamily: "ABeeZee",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 35,
    height: 15,
  },
  frameView: {
    position: "absolute",
    top: 4,
    left: 2.64,
    width: 120,
    height: 16,
    overflow: "hidden",
  },
  groupIcon2: {
    position: "absolute",
    top: 4.5,
    left: 59.86,
    width: 24.5,
    height: 10,
  },
  text: {
    position: "absolute",
    top: 2.5,
    left: 29.86,
    fontSize: 11,
    fontFamily: "ABeeZee",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 25,
    height: 15,
  },
  vectorIcon: {
    position: "absolute",
    top: 4.5,
    left: 19.86,
    width: 5,
    height: 10,
  },
  frameView1: {
    position: "absolute",
    top: 2,
    right: 2.36,
    width: 88,
    height: 18,
    overflow: "hidden",
  },
  aMText: {
    position: "absolute",
    marginLeft: -24,
    top: 4.5,
    left: "50%",
    fontSize: 12,
    fontFamily: "ABeeZee",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 50,
    height: 15,
  },
  statusBarView: {
    position: "absolute",
    top: -3,
    right: 0,
    left: 0,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  smartCities: {
    fontSize: 20,
  },
  smartCities1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  introducingDigitalInnovation: {
    fontSize: 16,
  },
  introducingDigitalInnovation1: {
    margin: 0,
  },
  smartCitiesIntroducingDig: {
    position: "absolute",
    top: 86,
    left: 26,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 410,
    left: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 338,
    height: 207,
  },
  aBigPart: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  objectsAndMachines: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  usingWirelessTechnology: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  cloudBasedIoTApplications: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  realTimeToHelp: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  decisionsThatImprove: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  citizensEngageWith: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  smartphonesAndMobile: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pairingDevicesAnd: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  servicesCanCut: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  communitiesCanImprove: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  collectionDecreaseTraffic: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  withHelpFrom: {
    margin: 0,
  },
  aBigPartOfThisICTFramewo: {
    position: "absolute",
    top: 418,
    left: 38,
    fontSize: 9,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 9,
    backgroundColor: "#64cfbc",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 77,
    height: 24.25,
  },
  fullReadText: {
    position: "absolute",
    top: 4.25,
    left: 11,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fffbfb",
    textAlign: "left",
    width: 64,
    height: 11,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  buttonView: {
    position: "absolute",
    top: 368,
    left: 272,
    width: 77,
    height: 24.25,
  },
  lOGOUDB2Icon: {
    position: "absolute",
    top: 25,
    left: 19,
    width: 34,
    height: 47,
  },
  liBRARYUDBText: {
    position: "absolute",
    top: 30,
    left: 68,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#010101",
    textAlign: "left",
  },
  books1View: {
    position: "relative",
    backgroundColor: "#fffdfd",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Books1;
