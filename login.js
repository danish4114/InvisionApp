import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Overlay } from "react-native-elements";
import { BlurView } from "react-native-blur";
export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { backgroundColor: false };
  }
  onPressIn = () => {
    this.setState({ backgroundColor: true });
    this.props.navigation.navigate("Title");
  };
  onPressOut = () => {
    this.setState({ backgroundColor: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <ImageBackground
            style={{ zIndex: -1, width: "100%", height: "100%" }}
            source={require("./images/bgtour12.jpg")}
          >
            <Overlay  isVisible={true}>
              <View
                style={{
                  flex: 1,
                  margin: 20,
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    marginLeft: 12,
                    marginBottom: 10
                  }}
                  source={require("./images/tour-tick.png")}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    marginBottom: 10,
                    fontFamily: "Arial"
                  }}
                >
                  Title
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 17,
                    letterSpacing: 1
                  }}
                >
                  Thus mush I thought proper to tell you in relation to
                  yourself,an to the trust.I respond in you.
                </Text>
              </View>
            </Overlay>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
