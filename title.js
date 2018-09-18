import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Overlay } from "react-native-elements";
import { BlurView } from "react-native-blur";
export default class Title extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { backgroundColor: false, isVisible: false };
  }
  onPressIn = () => {
    this.setState({ isVisible: true });
  };
  onPressOut = () => {
    this.setState({ backgroundColor: false });
  };
  onPress = () => {
    this.props.navigation.navigate("SignIn");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require("./images/bgtour12.jpg")}
          >
            <Overlay isVisible={this.state.isVisible}>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <Icon
                  onPress={() => this.setState({ isVisible: false })}
                  name="close"
                  style={{ fontSize: 30 }}
                />
              </View>
              <View style={styles.imageView}>
                <Image
                  style={styles.imageTick}
                  source={require("./images/tour-tick.png")}
                />
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.overlayContent}>
                  Thus mush I thought proper to tell you in relation to
                  yourself,and to the trust.I respond in you.
                </Text>
              </View>
            </Overlay>
            <View style={styles.logoView}>
              <Image
                style={{ width: 90, height: 90, marginBottom: 200 }}
                source={require("./images/splash-logo.png")}
              />
              <TouchableNativeFeedback onPress={this.onPress}>
                <View style={styles.loginVIew}>
                  <Text style={styles.loginText}>LOG IN</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={this.onPressIn}
                onPressOut={this.onPressOut}
              >
                <View style={styles.tourVIew}>
                  <Text style={styles.tourText}>TAKE THE TOUR</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    zIndex: -1,
    width: "100%",
    height: "100%"
  },
  imageView: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
    justifyContent: "center"
  },
  imageTick: {
    width: 200,
    height: 200,
    marginLeft: 12,
    marginBottom: 10
  },
  logoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  titleText: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 10,
    fontFamily: "Arial"
  },
  overlayContent: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 1
  },
  loginVIew: {
    width: 180,
    height: 50,
    backgroundColor: "#39D06E",
    borderRadius: 35,
    marginBottom: 25
  },
  loginText: {
    color: "#f5f5f5",
    textAlign: "center",
    marginTop: 16
  },
  tourVIew: {
    width: 180,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#f5f5f5"
  },
  tourText: {
    color: "#f5f5f5",
    textAlign: "center",
    marginTop: 16
  }
});
