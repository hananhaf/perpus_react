import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjangView}>
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
      <View style={styles.popular1View}>
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
          source={require("../assets/books-1.png")}
        />
      </View>
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
          source={require("../assets/book-2.png")}
        />
      </View>
      <View style={styles.popular3View}>
        <View style={styles.rectangleView2} />
        <Text style={styles.bukuPemrogramanPython}>
          <Text style={styles.bukuPemrograman}>{`Buku Pemrograman `}</Text>
          <Text style={styles.pythonText}>{`Python `}</Text>
        </Text>
      </View>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/1630371014614-2.png")}
      />
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
      <View style={styles.rectangleView3} />
      <Pressable
        style={styles.home1Pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/home-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.message1Pressable}
        onPress={() => navigation.navigate("Inbox")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/message-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/3916837-1.png")}
        />
      </Pressable>
      <View style={styles.rectangleView4} />
      <Pressable style={styles.rectanglePressable} accessible="true" />
      <Text style={styles.checkoutText}>Checkout</Text>
      <Text style={styles.formPeminjamanBuku}>Form Peminjaman Buku</Text>
      <Text style={styles.keranjangBukuText}>Keranjang Buku</Text>
      <Image
        style={styles.lOGOUDB3Icon}
        resizeMode="cover"
        source={require("../assets/logoudb-3.png")}
      />
      <Pressable
        style={styles.user2Pressable}
        onPress={() => navigation.navigate("User")}
      >
        <Image
          style={styles.icon4}
          resizeMode="cover"
          source={require("../assets/user-2.png")}
        />
      </Pressable>
      <Image
        style={styles.shoppingCart1Icon}
        resizeMode="cover"
        source={require("../assets/shoppingcart-1.png")}
      />
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
    top: 205,
    left: 19,
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
    width: 284,
    height: 81,
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
    top: 7.04,
    left: 119.23,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 153.18,
    height: 17.02,
  },
  books1Icon: {
    position: "absolute",
    top: 3.52,
    left: 6.62,
    borderRadius: 11,
    width: 105.15,
    height: 74.54,
  },
  popular1View: {
    position: "absolute",
    top: 239,
    left: 42,
    width: 284,
    height: 81,
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
    width: 287,
    height: 88,
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
    top: 8.29,
    left: 120.49,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 143.08,
    height: 18.49,
  },
  book2Icon: {
    position: "absolute",
    top: 3.83,
    left: 6.69,
    borderRadius: 11,
    width: 106.27,
    height: 80.99,
  },
  popular2View: {
    position: "absolute",
    top: 338,
    left: 39,
    width: 287,
    height: 88,
  },
  rectangleView2: {
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
    width: 287,
    height: 95,
  },
  bukuPemrograman: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pythonText: {
    margin: 0,
  },
  bukuPemrogramanPython: {
    position: "absolute",
    top: 12,
    left: 120,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 143.08,
    height: 19.96,
  },
  popular3View: {
    position: "absolute",
    top: 451,
    left: 39,
    width: 287,
    height: 95,
  },
  icon: {
    position: "absolute",
    top: 463,
    left: 56,
    width: 72,
    height: 75,
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
  rectangleView3: {
    position: "absolute",
    top: 615,
    left: 0,
    backgroundColor: "#e9e2df",
    width: 375,
    height: 52,
  },
  icon1: {
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
  icon2: {
    width: "100%",
    height: "100%",
  },
  message1Pressable: {
    position: "absolute",
    left: 251,
    top: 626,
    width: 29,
    height: 29,
  },
  icon3: {
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
  rectangleView4: {
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
    width: 337,
    height: 57,
  },
  rectanglePressable: {
    position: "absolute",
    top: 560,
    left: 120,
    borderRadius: 9,
    backgroundColor: "#ffe605",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 133,
    height: 37,
  },
  checkoutText: {
    position: "absolute",
    top: 570,
    left: 154,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  formPeminjamanBuku: {
    position: "absolute",
    top: 148,
    left: 101,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  keranjangBukuText: {
    position: "absolute",
    top: 87,
    left: 33,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  lOGOUDB3Icon: {
    position: "absolute",
    top: 30,
    left: 22,
    width: 34,
    height: 47,
  },
  icon4: {
    width: "100%",
    height: "100%",
  },
  user2Pressable: {
    position: "absolute",
    left: 28,
    top: 626,
    width: 28,
    height: 28,
  },
  shoppingCart1Icon: {
    position: "absolute",
    top: 623,
    left: 85,
    width: 35.17,
    height: 35,
  },
  keranjangView: {
    position: "relative",
    backgroundColor: "#fffdfd",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Keranjang;
