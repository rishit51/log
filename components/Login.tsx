import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const facebook = <Icon name={"facebook"} style={styles.icons} />;
  const twitter = <Icon name={"twitter"} style={styles.icons}></Icon>;
  const google = <Icon name="google" style={styles.icons}></Icon>;
  const [state, setState] = useState({ email: "", password: "" });

  return (
    <SafeAreaView style={{ flex: 1, padding: "2%", backgroundColor: "white" }}>
      <Image
        source={{
          uri: "https://global.discourse-cdn.com/standard14/uploads/slimframework/original/2X/a/ac33877198677be43e21b5899003b4ffa7020a1a.png",
        }}
        style={{ flex: 1 }}
      ></Image>

      <View style={styles.container}>
        <View style={styles.inputView}>
          <Text style={styles.labels}>Email or Username</Text>
          <View style={styles.labelcombfield}>
            <TextInput
              style={[styles.input, styles.labelinput]}
              placeholder="Enter username"
              placeholderTextColor="#5A5A5A"
              value={state.email}
              onChangeText={(text) => {
                setState({ email: text });
              }}
            />
            <Icon name="user" style={{ alignSelf: "center" }}></Icon>
          </View>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.labels}>Password</Text>
          <View style={styles.labelcombfield}>
            <TextInput
              style={[styles.input, styles.labelinput]}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#5A5A5A"
              value={state.password}
              onChangeText={(text) => {
                setState({ password: text });
              }}
            />
            <Icon name="lock" style={{ alignSelf: "center" }}></Icon>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <BouncyCheckbox
              isChecked={true}
              fillColor="#497BF0"
            ></BouncyCheckbox>
            <Text style={styles.text}>Remember me !</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Log In </Text>
        </TouchableOpacity>
        <View
          style={{ marginVertical: 15, width: "100%", alignItems: "center" }}
        >
          <Text style={styles.text}>Or login with</Text>
        </View>
        <View style={styles.socialLoginCont}>
          <TouchableOpacity style={styles.iconwidth}>
            {facebook}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconwidth}>
            {twitter}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconwidth}>{google}</TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  icons: {
    fontSize: 30,
    color: "black",

    textAlign: "center",
  },
  iconwidth: {
    width: "30%",
  },
  container: {
    backgroundColor: "white",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    rowGap: 15,
  },
  inputView: {
    alignItems: "center",

    width: "100%",
  },
  text: { color: "grey" },
  forgotPass: {
    color: "#48B1F0",
  },
  loginBtn: {
    backgroundColor: "#497BF0",
    padding: 20,
    width: "60%",
    alignItems: "center",
    borderRadius: 9,
  },
  labels: {
    fontWeight: "bold",
    color: "#000000",
    alignSelf: "flex-start",
    marginLeft: "15%",
    fontSize: 16,
  },
  socialLoginCont: {
    width: "80%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelinput: {
    color: "black",
  },
  labelcombfield: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#E1E8E5",
    marginVertical: 8,
    borderRadius: 12,
  },
  input: {
    width: "90%",
  },
});
