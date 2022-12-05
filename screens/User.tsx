import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userView1}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={styles.enjoyYourRead}>Enjoy your read</Text>
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={styles.recentReadText}>Recent Read</Text>
      <Pressable
        style={styles.popular1Pressable}
        onPress={() => navigation.navigate("Books1")}
      >
        <View style={styles.rectangleView} />
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
        <Image
          style={styles.books1Icon}
          resizeMode="cover"
          source={require("../assets/books-11.png")}
        />
      </Pressable>
      <View style={styles.popular2View}>
        <View style={styles.rectangleView1} />
        <Text style={styles.buildingSmartCitiesAnalyt}>
          <Text style={styles.buildingSmartCities1}>
            <Text style={styles.buildingSmartCities}>
              Building Smart Cities :
            </Text>
          </Text>
          <Text style={styles.analyticsICTAndDesignThi}>
            <Text style={styles.analyticsICTAnd}>
              Analytics, ICT, and Design Thinking
            </Text>
          </Text>
        </Text>
        <Image
          style={styles.book2Icon}
          resizeMode="cover"
          source={require("../assets/book-21.png")}
        />
      </View>
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
      <Text style={styles.liBRARYUDBText}>LiBRARY UDB</Text>
      <View style={styles.rectangleView2} />
      <View style={styles.userView}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.user1Icon}
          resizeMode="cover"
          source={require("../assets/user-1.png")}
        />
      </View>
      <Pressable
        style={styles.home1Pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/home-1.png")}
        />
      </Pressable>
      <Image
        style={styles.message1Icon}
        resizeMode="cover"
        source={require("../assets/message-1.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3916837-1.png")}
        />
      </Pressable>
      <View style={styles.rectangleView3} />
      <Text style={styles.userAccountText}>User Account</Text>
      <Text style={styles.text1}>27</Text>
      <Text style={styles.text2}>26</Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.lOGOUDB3Icon}
        resizeMode="cover"
        source={require("../assets/logoudb-3.png")}
      />
      <Text style={styles.namaHafizhHananSNIM19}>
        <Text style={styles.namaHafizh}>Nama : Hafizh Hanan S</Text>
        <Text style={styles.blankLineText}> </Text>
        <Text style={styles.blankLineText1}> </Text>
        <Text style={styles.nIM190103080}>NIM : 190103080</Text>
        <Text style={styles.blankLineText2}> </Text>
        <Text style={styles.blankLineText3}> </Text>
        <Text style={styles.jurusanTeknik}>Jurusan : Teknik Informatika</Text>
      </Text>
      <Pressable
        style={styles.shoppingCart2Pressable}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/shoppingcart-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  menuIcon: {
    position: "absolute",
    top: 30,
    left: 326,
    width: 18,
    height: 18,
  },
  recentReadText: {
    position: "absolute",
    top: 333,
    left: 22,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 9,
    backgroundColor: "#f6f2f2",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 251,
    height: 100.99,
  },
  smartCities: {
    fontSize: 15,
  },
  smartCities1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  introducingDigitalInnovation: {
    fontSize: 10,
  },
  introducingDigitalInnovation1: {
    margin: 0,
  },
  smartCitiesIntroducingDig: {
    position: "absolute",
    top: 8.78,
    left: 105.38,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 135.38,
    height: 21.22,
  },
  books1Icon: {
    position: "absolute",
    top: 4.39,
    left: 5.85,
    borderRadius: 11,
    width: 92.94,
    height: 92.94,
  },
  popular1Pressable: {
    position: "absolute",
    top: 375,
    left: 105,
    width: 251,
    height: 100.99,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 9,
    backgroundColor: "#f6f2f2",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 251,
    height: 100.99,
  },
  buildingSmartCities: {
    fontSize: 15,
  },
  buildingSmartCities1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  analyticsICTAnd: {
    fontSize: 10,
  },
  analyticsICTAndDesignThi: {
    margin: 0,
  },
  buildingSmartCitiesAnalyt: {
    position: "absolute",
    top: 9.51,
    left: 105.38,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 125.13,
    height: 21.22,
  },
  book2Icon: {
    position: "absolute",
    top: 4.39,
    left: 5.85,
    borderRadius: 11,
    width: 92.94,
    height: 92.94,
  },
  popular2View: {
    position: "absolute",
    top: 495.01,
    left: 105,
    width: 251,
    height: 100.99,
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
  liBRARYUDBText: {
    position: "absolute",
    top: 30,
    left: 64,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#010101",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 615,
    left: 0,
    backgroundColor: "#e9e2df",
    width: 375,
    height: 52,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: -4,
    width: 75,
    height: 71,
  },
  user1Icon: {
    position: "absolute",
    top: 13,
    left: 12,
    width: 43,
    height: 43,
  },
  userView: {
    position: "absolute",
    top: 596,
    left: 16,
    width: 67,
    height: 67,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  home1Pressable: {
    position: "absolute",
    left: 174,
    top: 626,
    width: 31,
    height: 31,
  },
  message1Icon: {
    position: "absolute",
    top: 626,
    left: 251,
    width: 29,
    height: 29,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "absolute",
    left: 310,
    top: 617,
    width: 46,
    height: 46,
  },
  rectangleView3: {
    position: "absolute",
    top: 130,
    left: 19,
    borderRadius: 9,
    backgroundColor: "#faf1f1",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 334,
    height: 186,
  },
  userAccountText: {
    position: "absolute",
    top: 87,
    left: 33,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 394,
    left: 22,
    fontSize: 48,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.2,
  },
  text2: {
    position: "absolute",
    top: 526,
    left: 22,
    fontSize: 48,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.2,
  },
  lineIcon: {
    position: "absolute",
    top: 356,
    left: 24.99,
    width: 331.01,
    height: 3,
  },
  lOGOUDB3Icon: {
    position: "absolute",
    top: 30,
    left: 22,
    width: 34,
    height: 47,
  },
  namaHafizh: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nIM190103080: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  jurusanTeknik: {
    margin: 0,
  },
  namaHafizhHananSNIM19: {
    position: "absolute",
    top: 152,
    left: 28,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 363,
    height: 141,
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  shoppingCart2Pressable: {
    position: "absolute",
    left: 105,
    top: 621,
    width: 37.45,
    height: 38,
  },
  userView1: {
    position: "relative",
    backgroundColor: "#fffdfd",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default User;
