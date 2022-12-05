import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Inbox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inboxView}>
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
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.home1Pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
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
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <View style={styles.rectangleView5} />
      <View style={styles.rectangleView6} />
      <View style={styles.rectangleView7} />
      <Text style={styles.reihanText}>Reihan</Text>
      <Text style={styles.adminPerpustakaanText}>Admin Perpustakaan</Text>
      <Text style={styles.bobiText}>Bobi</Text>
      <Text style={styles.nopalText}>Nopal</Text>
      <Text style={styles.jojoText}>Jojo</Text>
      <Text style={styles.mikaText}>Mika</Text>
      <Text style={styles.nikoText}>Niko</Text>
      <Text style={styles.pinjamBukuIniDong}>Pinjam buku ini dong !</Text>
      <Text style={styles.mengingatkanDeadlinePengemba}>
        Mengingatkan deadline pengembalian buku..
      </Text>
      <Text style={styles.kePerpusJam8}>Ke perpus jam 8 !</Text>
      <Text style={styles.bukuMuKemarenGuaPinjem}>
        Buku mu kemaren gua pinjem
      </Text>
      <Text style={styles.nantiDiPerpusAjaSekalianB}>
        Nanti di perpus aja sekalian bahas tugas
      </Text>
      <Text style={styles.mabarNantiHabisDariPerpus}>
        Mabar nanti habis dari perpus
      </Text>
      <Text style={styles.kemasjidYukText}>Kemasjid yuk</Text>
      <Text style={styles.pesanAnggotaPerpus}>Pesan Anggota Perpus</Text>
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
          style={styles.icon2}
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
  rectangleView: {
    position: "absolute",
    top: 615,
    left: 0,
    backgroundColor: "#e9e2df",
    width: 375,
    height: 52,
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
  rectangleView1: {
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
  rectangleView2: {
    position: "absolute",
    top: 201,
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
  rectangleView3: {
    position: "absolute",
    top: 272,
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
  rectangleView4: {
    position: "absolute",
    top: 343,
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
  rectangleView5: {
    position: "absolute",
    top: 414,
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
  rectangleView6: {
    position: "absolute",
    top: 485,
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
  rectangleView7: {
    position: "absolute",
    top: 556,
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
  reihanText: {
    position: "absolute",
    top: 140,
    left: 35,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  adminPerpustakaanText: {
    position: "absolute",
    top: 211,
    left: 33,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  bobiText: {
    position: "absolute",
    top: 279,
    left: 28,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  nopalText: {
    position: "absolute",
    top: 350,
    left: 28,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  jojoText: {
    position: "absolute",
    top: 421,
    left: 28,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mikaText: {
    position: "absolute",
    top: 492,
    left: 30,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  nikoText: {
    position: "absolute",
    top: 563,
    left: 29,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  pinjamBukuIniDong: {
    position: "absolute",
    top: 158,
    left: 35,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mengingatkanDeadlinePengemba: {
    position: "absolute",
    top: 229,
    left: 33,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  kePerpusJam8: {
    position: "absolute",
    top: 300,
    left: 28,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  bukuMuKemarenGuaPinjem: {
    position: "absolute",
    top: 372,
    left: 28,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  nantiDiPerpusAjaSekalianB: {
    position: "absolute",
    top: 443,
    left: 28,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mabarNantiHabisDariPerpus: {
    position: "absolute",
    top: 514,
    left: 33,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  kemasjidYukText: {
    position: "absolute",
    top: 589,
    left: 30,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  pesanAnggotaPerpus: {
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
  icon2: {
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
  inboxView: {
    position: "relative",
    backgroundColor: "#fffdfd",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Inbox;
