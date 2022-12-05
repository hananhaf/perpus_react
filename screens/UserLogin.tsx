import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userLoginView1}>
      <View style={styles.userLoginView}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/20171125-11.png")}
        />
        <TextInput
          style={styles.rectangleTextInput}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput1}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Pressable
          style={styles.loginPressable}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.lOGINText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.pASSWORDText}>PASSWORD</Text>
        <Text style={styles.nIMText}>NIM</Text>
        <Pressable
          style={styles.buatAkunLibrary1}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.buatAkunLibrary}>Buat Akun Library?</Text>
        </Pressable>
      </View>
      <Text style={styles.lIBRARYDUTABANGSAUNIVERSITYText}>
        <Text style={styles.lIBRARYText}>LIBRARY</Text>
        <Text style={styles.dUTABANGSAText}>DUTA BANGSA</Text>
        <Text style={styles.uNIVERSITYText}>UNIVERSITY</Text>
      </Text>
      <View style={styles.statusBarView}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame-6.png")}
        />
        <View style={styles.frameView}>
          <Image
            style={styles.groupIcon}
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
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 101,
    left: 203,
    width: 768,
    height: 768,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 566,
    left: 283,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 237,
    height: 41,
  },
  rectangleTextInput1: {
    position: "absolute",
    top: 513,
    left: 280,
    borderRadius: 20,
    backgroundColor: "#fffefe",
    width: 237,
    height: 41,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fb9907",
    width: 150,
    height: 44,
  },
  lOGINText: {
    position: "absolute",
    top: 13,
    left: 54,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  loginPressable: {
    position: "absolute",
    top: 654,
    left: 324,
    width: 150,
    height: 44,
  },
  pASSWORDText: {
    position: "absolute",
    top: 578,
    left: 296,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  nIMText: {
    position: "absolute",
    top: 525,
    left: 295,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "rgba(3, 3, 3, 0.7)",
    textAlign: "left",
  },
  buatAkunLibrary: {
    fontSize: 13,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  buatAkunLibrary1: {
    position: "absolute",
    left: 296,
    top: 610,
  },
  userLoginView: {
    position: "absolute",
    top: -101,
    left: -203,
    width: 768,
    height: 768,
  },
  lIBRARYText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  dUTABANGSAText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  uNIVERSITYText: {
    margin: 0,
  },
  lIBRARYDUTABANGSAUNIVERSITYText: {
    position: "absolute",
    top: 215,
    left: 86,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 251,
    height: 198,
  },
  frameIcon: {
    position: "absolute",
    top: 4,
    left: 2.64,
    width: 120,
    height: 16,
    overflow: "hidden",
  },
  groupIcon: {
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
  frameView: {
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
    top: 0,
    right: 1,
    left: -1,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  userLoginView1: {
    position: "relative",
    backgroundColor: "#c0bbbb",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default UserLogin;
