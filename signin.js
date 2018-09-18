import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import Icon from "react-native-vector-icons/Feather";
import { Overlay } from "react-native-elements";
import { BlurView } from "react-native-blur";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { backgroundColor: false, name: "", password: "", email: "" };
  }
  onPress = () => {
    this.props.navigation.navigate("Title");
  };
  onPresstoProduct = () => {
    if (this.state.name == "" || this.state.password=='' || this.state.email=='') {
      alert("Please Fill All The Credentials");
    } else if (this.state.name == "") {
      alert("Please Enter Your Name");
    } else if (this.state.password == "") {
      alert("Please Enter Your Password");
    } else if (this.state.email == "") {
      alert("Please Enter Your Emial");
    } else {
      this.props.navigation.navigate("Product");
      this.setState({name:'',password:'',email:''})
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        extraScrollHeight={600}
      >
        <View style={styles.container}>
          <View style={styles.parentView}>
            <View style={{ paddingRight: 100 }}>
              <Icon
                onPress={this.onPress}
                name="arrow-left"
                style={styles.headerText}
              />
            </View>
            <View style={{ paddingRight: 120 }}>
              <Text style={styles.headerText}>Sign Up</Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={{ width: 90, height: 90 }}
              source={require("./images/splash-logo.png")}
            />
          </View>
          <View style={{ width: 320, marginBottom: 62 }}>
            <Form>
              <Item style={styles.input}>
                <Input
                  value={this.state.name}
                  placeholder="NAME"
                  onChangeText={e => this.setState({ name: e })}
                />
              </Item>
              <Item style={styles.input}>
                <Input
                secureTextEntry={true}
                  value={this.state.password}
                  placeholder="PASSWORD"
                  onChangeText={e => this.setState({ password: e })}
                />
              </Item>
              <Item style={styles.input}>
                <Input
                  value={this.state.email}
                  placeholder="EMAIL"
                  onChangeText={e => this.setState({ email: e })}
                />
              </Item>
            </Form>
          </View>
          <View style={styles.signin}>
            <Text style={styles.signinText}>SIGN UP VIA FACEBOOK</Text>
          </View>
          <TouchableNativeFeedback onPress={this.onPresstoProduct}>
            <View style={styles.footer}>
              <Icon name="arrow-right" style={styles.footerIcon} />
            </View>
          </TouchableNativeFeedback>
          <View />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  parentView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 25,
    color: "black"
  },
  input: { marginBottom: 10 },
  signin: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 35,
    marginBottom: 38
  },
  signinText: {
    color: "blue",
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "100"
  },
  footer: {
    width: "100%",
    height: 80,
    backgroundColor: "#39D06E"
  },
  footerIcon: {
    fontSize: 35,
    textAlign: "center",
    color: "#f5f5f5",
    marginTop: 25
  }
});
