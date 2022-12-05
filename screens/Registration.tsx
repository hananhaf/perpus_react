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

const Registration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrationView}>
      <View style={styles.userLoginView}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/20171125-1.png")}
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
        <TextInput
          style={styles.rectangleTextInput2}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput3}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput4}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Pressable
          style={styles.loginPressable}
          onPress={() => navigation.navigate("UserLogin")}
        >
          <View style={styles.rectangleView} />
        </Pressable>
        <Text style={styles.nIMText}>NIM</Text>
      </View>
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
      <Text style={styles.dAFTARAKUNLIBRARY}>DAFTAR AKUN LIBRARY</Text>
      <Text style={styles.nAMAText}>NAMA</Text>
      <Text style={styles.noTeleponText}>No Telepon</Text>
      <Text style={styles.kelasJurusan}>Kelas / Jurusan</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Text style={styles.bUATText}>BUAT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 94,
    left: 211,
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
    top: 300,
    left: 287,
    borderRadius: 20,
    backgroundColor: "#fffefe",
    width: 237,
    height: 41,
  },
  rectangleTextInput2: {
    position: "absolute",
    top: 437,
    left: 287,
    borderRadius: 20,
    backgroundColor: "#fffefe",
    width: 237,
    height: 41,
  },
  rectangleTextInput3: {
    position: "absolute",
    top: 501,
    left: 287,
    borderRadius: 20,
    backgroundColor: "#fffefe",
    width: 237,
    height: 41,
  },
  rectangleTextInput4: {
    position: "absolute",
    top: 364,
    left: 287,
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
  loginPressable: {
    position: "absolute",
    top: 654,
    left: 324,
    width: 150,
    height: 44,
  },
  nIMText: {
    position: "absolute",
    top: 314,
    left: 304,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "rgba(3, 3, 3, 0.7)",
    textAlign: "left",
  },
  userLoginView: {
    position: "absolute",
    top: -94,
    left: -211,
    width: 768,
    height: 768,
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
  dAFTARAKUNLIBRARY: {
    position: "absolute",
    top: 139,
    left: 58,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 474,
    height: 81,
  },
  nAMAText: {
    position: "absolute",
    top: 282,
    left: 91,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  noTeleponText: {
    position: "absolute",
    top: 355,
    left: 89,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  kelasJurusan: {
    position: "absolute",
    top: 419,
    left: 91,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  passwordText: {
    position: "absolute",
    top: 484,
    left: 89,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  bUATText: {
    position: "absolute",
    top: 570,
    left: 159,
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  registrationView: {
    position: "relative",
    backgroundColor: "#c0bbbb",
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default Registration;
