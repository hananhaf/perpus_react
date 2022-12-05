import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.homeScrollView}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
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
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Text style={styles.enjoyYourRead}>Enjoy your read</Text>
      <Image
        style={styles.lOGOUDB4Icon}
        resizeMode="cover"
        source={require("../assets/logoudb-3.png")}
      />
      <Text style={styles.readYourBook}>
        <Text style={styles.readText}>{`Read `}</Text>
        <Text style={styles.yourBookText}>Your Book</Text>
      </Text>
      <View style={styles.frameView2}>
        <View style={styles.iklanBarisView}>
          <Image
            style={styles.iklanLayananMasyarakatPendiIcon}
            resizeMode="cover"
            source={require("../assets/iklanlayananmasyarakatpendidikan-1.png")}
          />
          <Image
            style={styles.contohIklanPendidikan1Icon}
            resizeMode="cover"
            source={require("../assets/contohiklanpendidikan-1.png")}
          />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/1456457461-1.png")}
          />
        </View>
      </View>
      <Text style={styles.popularText}>Popular</Text>
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
        <View style={styles.tagsView}>
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <Text style={styles.tagsSmartCitiesSmartCity}>
            Tags : Smart Cities Smart City
          </Text>
        </View>
        <Image
          style={styles.books1Icon}
          resizeMode="cover"
          source={require("../assets/books-12.png")}
        />
      </Pressable>
      <View style={styles.popular2View}>
        <View style={styles.rectangleView3} />
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
          source={require("../assets/book-22.png")}
        />
        <View style={styles.tagsView1}>
          <View style={styles.rectangleView4} />
          <Text style={styles.tagsSmartCities}>{`Tags : Smart Cities `}</Text>
        </View>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1630371014614-1.png")}
      />
      <View style={styles.popular3View}>
        <View style={styles.rectangleView5} />
        <View style={styles.tagsView2}>
          <View style={styles.rectangleView6} />
          <Text style={styles.tagsSmartCities1}>{`Tags : Smart Cities `}</Text>
        </View>
        <Text style={styles.bukuPemrogramanDasarPASCAL}>
          <Text style={styles.bukuPemrogramanDasar}>
            Buku Pemrograman Dasar
          </Text>
          <Text style={styles.pASCALText}>PASCAL</Text>
        </Text>
      </View>
      <View style={styles.popular4View}>
        <View style={styles.rectangleView7} />
        <View style={styles.tagsView3}>
          <View style={styles.rectangleView8} />
          <Text style={styles.tagsSmartCities2}>{`Tags : Smart Cities `}</Text>
        </View>
        <Text style={styles.teknikMikrotikJaringanDasa}>
          <Text style={styles.teknikMikrotikJaringan}>
            Teknik Mikrotik Jaringan  Dasar
          </Text>
        </Text>
        <Image
          style={styles.jaringanKomputerBerbasisMikIcon}
          resizeMode="cover"
          source={require("../assets/jaringankomputerberbasismikrotik300x472-1.png")}
        />
      </View>
      <View style={styles.popular5View}>
        <View style={styles.rectangleView9} />
        <View style={styles.tagsView4}>
          <View style={styles.rectangleView10} />
          <Text style={styles.tagsSmartCities3}>{`Tags : Smart Cities `}</Text>
        </View>
        <Text style={styles.teknikMikrotikJaringanDasa1}>
          <Text style={styles.teknikMikrotikJaringan1}>
            Teknik Mikrotik Jaringan  Dasar
          </Text>
        </Text>
        <Image
          style={styles.jaringanKomputerBerbasisMikIcon1}
          resizeMode="cover"
          source={require("../assets/jaringankomputerberbasismikrotik300x472-1.png")}
        />
      </View>
      <View style={styles.popular6View}>
        <View style={styles.rectangleView11} />
        <View style={styles.tagsView5}>
          <View style={styles.rectangleView12} />
          <Text style={styles.tagsSmartCities4}>{`Tags : Smart Cities `}</Text>
        </View>
        <Text
          style={styles.designPhotoshopCS6}
        >{`Design Photoshop CS 6 `}</Text>
      </View>
      <Image
        style={styles.f1Icon}
        resizeMode="cover"
        source={require("../assets/113262-f-1.png")}
      />
      <Pressable
        style={styles.user1Pressable}
        onPress={() => navigation.navigate("User")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/user-2.png")}
        />
      </Pressable>
      <Pressable style={styles.homePressable} accessible="true">
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={styles.home1Icon}
          resizeMode="cover"
          source={require("../assets/home-13.png")}
        />
      </Pressable>
      <Image
        style={styles.message1Icon}
        resizeMode="cover"
        source={require("../assets/message-1.png")}
      />
      <Image
        style={styles.icon3}
        resizeMode="cover"
        source={require("../assets/3916837-1.png")}
      />
      <Image
        style={styles.shoppingCart3Icon}
        resizeMode="cover"
        source={require("../assets/shoppingcart-2.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScrollViewContent: {
    flexDirection: "column",
  },
  rectangleIcon: {
    position: "relative",
    width: 375,
    height: 16,
    flexShrink: 0,
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
    position: "relative",
    width: 375,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  liBRARYUDBText: {
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#010101",
    textAlign: "left",
  },
  menuIcon: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  enjoyYourRead: {
    position: "relative",
    fontSize: 7,
    fontFamily: "Fenix",
    color: "#151515",
    textAlign: "left",
  },
  lOGOUDB4Icon: {
    position: "relative",
    width: 34,
    height: 47,
    flexShrink: 0,
  },
  readText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourBookText: {
    margin: 0,
  },
  readYourBook: {
    position: "relative",
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "rgba(255, 251, 251, 0.9)",
    textAlign: "left",
  },
  iklanLayananMasyarakatPendiIcon: {
    position: "absolute",
    top: 22,
    left: 380,
    width: 342,
    height: 169,
  },
  contohIklanPendidikan1Icon: {
    position: "absolute",
    top: 13,
    left: 0,
    width: 343,
    height: 175,
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 738,
    width: 342,
    height: 193,
  },
  iklanBarisView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1080,
    height: 193,
  },
  frameView2: {
    position: "relative",
    width: 349,
    height: 193,
    flexShrink: 0,
  },
  popularText: {
    position: "relative",
    fontSize: 24,
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
    width: 343,
    height: 138,
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
    top: 12,
    left: 144,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 97,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 56,
    height: 14,
  },
  tagsSmartCitiesSmartCity: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView: {
    position: "absolute",
    top: 109,
    left: 144,
    width: 153,
    height: 14,
  },
  books1Icon: {
    position: "absolute",
    top: 6,
    left: 8,
    borderRadius: 11,
    width: 127,
    height: 127,
  },
  popular1Pressable: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  rectangleView3: {
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
    width: 343,
    height: 138,
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
    top: 13,
    left: 144,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  book2Icon: {
    position: "absolute",
    top: 6,
    left: 8,
    borderRadius: 11,
    width: 127,
    height: 127,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  tagsSmartCities: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView1: {
    position: "absolute",
    top: 103,
    left: 144,
    width: 92,
    height: 14,
  },
  popular2View: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  icon1: {
    position: "relative",
    width: 107,
    height: 112,
    flexShrink: 0,
  },
  rectangleView5: {
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
    width: 343,
    height: 138,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  tagsSmartCities1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView2: {
    position: "absolute",
    top: 69,
    left: 133,
    width: 92,
    height: 14,
  },
  bukuPemrogramanDasar: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pASCALText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bukuPemrogramanDasarPASCAL: {
    position: "absolute",
    top: 20,
    left: 133,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  popular3View: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  rectangleView7: {
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
    width: 343,
    height: 138,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  tagsSmartCities2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView3: {
    position: "absolute",
    top: 69,
    left: 133,
    width: 92,
    height: 14,
  },
  teknikMikrotikJaringan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  teknikMikrotikJaringanDasa: {
    position: "absolute",
    top: 20,
    left: 133,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  jaringanKomputerBerbasisMikIcon: {
    position: "absolute",
    top: 8,
    left: 13,
    width: 92,
    height: 118,
  },
  popular4View: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  rectangleView9: {
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
    width: 343,
    height: 138,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  tagsSmartCities3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView4: {
    position: "absolute",
    top: 69,
    left: 133,
    width: 92,
    height: 14,
  },
  teknikMikrotikJaringan1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  teknikMikrotikJaringanDasa1: {
    position: "absolute",
    top: 20,
    left: 133,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  jaringanKomputerBerbasisMikIcon1: {
    position: "absolute",
    top: 8,
    left: 13,
    width: 92,
    height: 118,
  },
  popular5View: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  rectangleView11: {
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
    width: 343,
    height: 138,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 29,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 63,
    height: 14,
  },
  tagsSmartCities4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    opacity: 0.8,
  },
  tagsView5: {
    position: "absolute",
    top: 69,
    left: 133,
    width: 92,
    height: 14,
  },
  designPhotoshopCS6: {
    position: "absolute",
    top: 20,
    left: 133,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  popular6View: {
    position: "relative",
    width: 343,
    height: 138,
    flexShrink: 0,
  },
  f1Icon: {
    position: "relative",
    width: 97,
    height: 118,
    flexShrink: 0,
  },
  icon2: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  user1Pressable: {
    position: "relative",
    width: 28,
    height: 28,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: -4,
    width: 75,
    height: 75,
  },
  home1Icon: {
    position: "absolute",
    top: 3,
    left: 7,
    width: 53,
    height: 53,
  },
  homePressable: {
    position: "relative",
    width: 67,
    height: 67,
    flexShrink: 0,
  },
  message1Icon: {
    position: "relative",
    width: 29,
    height: 29,
    flexShrink: 0,
  },
  icon3: {
    position: "relative",
    width: 46,
    height: 46,
    flexShrink: 0,
  },
  shoppingCart3Icon: {
    position: "relative",
    width: 37.45,
    height: 38,
    flexShrink: 0,
  },
  homeScrollView: {
    position: "relative",
    backgroundColor: "#fffdfd",
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
});

export default Home;
