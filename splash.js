import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class Splash extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  login = () => {
    this.props.navigation.navigate("Title");
  };
  onPress = () => {
    this.props.navigation.navigate("SignIn");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <TouchableNativeFeedback onPress={this.onPress}>
            <Text style={styles.text}>SIGN UP</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.image}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("./images/splash-logo.png")}
          />
          <Icon
            onPress={this.login}
            style={styles.iconStyle}
            name="arrow-right"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D3D4"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  textView: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  text: {
    fontWeight: "100",
    fontFamily: "Arial",
    fontSize: 15,
    marginTop: 20,
    marginRight: 20,
    color: "#454545"
  },
  iconStyle: {
    color: "#000",
    fontSize: 50,
    paddingTop: 90,
    fontWeight: "100"
  }
});
