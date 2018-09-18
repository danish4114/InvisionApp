import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList,
  Picker
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
import { Icon } from "native-base";
import { Overlay, Slider } from "react-native-elements";
import { BlurView } from "react-native-blur";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Carousel from "react-native-carousel-view";

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;

export default class Product extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = {
      red: true,
      blue: false,
      INFO: true,
      DELIVERY: false,
      language: "",
      isClicked: false
    };
  }
  onPress = () => {
    this.props.navigation.navigate("SignIn");
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.sliderParentView}>
            <View style={styles.sliderchildView}>
              <Icon
                style={{ fontSize: 24 }}
                type="Ionicons"
                onPress={this.onPress}
                name="md-arrow-round-back"
              />
              <Text style={styles.header}>Nightrise Hoodie</Text>
              <Icon
                onPress={() =>
                  this.setState({ isClicked: !this.state.isClicked })
                }
                style={{
                  fontSize: 24,
                  color: this.state.isClicked ? "#F706AD" : "black"
                }}
                type="MaterialIcons"
                name={this.state.isClicked ? "favorite" : "favorite-border"}
              />
            </View>
            <View style={{ paddingTop: 20 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View style={styles.container}>
                  <Carousel
                    width={360}
                    height={380}
                    delay={2000}
                    indicatorAtBottom={true}
                    indicatorSize={15}
                    indicatorColor="blue"
                    animate={false}
                  >
                    <View style={{ borderRadius: 10 }}>
                      <View style={{ zIndex: 0, borderRadius: 35 }}>
                        <Image
                          style={styles.carouselImage}
                          resizeMode="contain"
                          source={require("./images/product1.png")}
                        />
                      </View>
                    </View>
                    <View style={{}}>
                      <Image
                        style={styles.carouselImage}
                        resizeMode="contain"
                        source={require("./images/product2.png")}
                      />
                    </View>
                    <View style={{}}>
                      <Image
                        style={styles.carouselImage}
                        resizeMode="contain"
                        source={require("./images/product3.png")}
                      />
                    </View>
                  </Carousel>
                </View>
              </View>
              <View style={styles.parentPicker}>
                <View style={styles.childPicker}>
                  <Picker
                    selectedValue={this.state.language}
                    itemStyle={{ color: "red" }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ language: itemValue })
                    }
                  >
                    <Picker.Item label="SELECT SIZE" value="SELECT SIZE" />
                    <Picker.Item label="SMALL" value="SMALL" />
                    <Picker.Item label="MEDIUM" value="MEDIUM" />
                    <Picker.Item label="LARGE" value="LARGE" />
                  </Picker>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableNativeFeedback
                    onPress={() => this.setState({ red: false, blue: true })}
                  >
                    <View
                      style={{
                        width: this.state.blue ? 35 : 25,
                        height: this.state.blue ? 35 : 25,
                        marginTop: this.state.blue ? null : 7,
                        borderRadius: 20,
                        backgroundColor: "#124caa"
                      }}
                    >
                      {this.state.blue && (
                        <Icon
                          style={styles.icon}
                          type="MaterialCommunityIcons"
                          name="check"
                        />
                      )}
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    onPress={() => this.setState({ red: true, blue: false })}
                  >
                    <View
                      style={{
                        width: this.state.red ? 35 : 25,
                        height: this.state.red ? 35 : 25,
                        marginTop: this.state.red ? null : 7,
                        borderRadius: 20,
                        backgroundColor: "#3b3b3b",
                        marginLeft: 15
                      }}
                    >
                      {this.state.red && (
                        <Icon
                          style={styles.icon}
                          type="MaterialCommunityIcons"
                          name="check"
                        />
                      )}
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#e4e4e4" }}>
            <View style={{ backgroundColor: "#E5E7E9", height: 20 }} />
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#e4e4e4"
              }}
            >
              <TouchableNativeFeedback
                onPress={() => this.setState({ INFO: true, DELIVERY: false })}
              >
                <View
                  style={[
                    styles.tab,
                    { borderWidth: 1, borderColor: "#c5c5c4" }
                  ]}
                >
                  <Text style={styles.tabText}>INFO</Text>
                  {this.state.INFO && <View style={styles.border} />}
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => this.setState({ INFO: false, DELIVERY: true })}
              >
                <View style={styles.deliveryTab}>
                  <Text style={styles.tabText}>DELIVERY</Text>
                  {this.state.DELIVERY && <View style={styles.border} />}
                </View>
              </TouchableNativeFeedback>
            </View>
            {this.state.INFO && (
              <View style={{ height: 235, margin: 25 }}>
                <Text
                  style={{
                    fontFamily: "Open Sans Condensed, sans-serif",
                    fontSize: 15,
                    marginBottom: 15,
                    color: "#383938"
                  }}
                >
                  Urban ninjas favorite hoodie for leisure times!
                </Text>
                <FlatList
                  data={[
                    { key: "interier chin guard" },
                    {
                      key:
                        "oversize .adjustable countered crossed hood with cord inside  with labeled leather length regular on it."
                    },
                    {
                      key: "rib cuffs with thumbholes"
                    },
                    {
                      key: "pinetree label on the back"
                    }
                  ]}
                  renderItem={({ item, index }) => (
                    <Text style={styles.itemText}>.{item.key}</Text>
                  )}
                />
              </View>
            )}
            {this.state.DELIVERY && (
              <View style={{ height: 235, margin: 25 }}>
                <Text style={styles.list}>
                  Urban ninjas favorite hoodie for leisure times!
                </Text>
                <FlatList
                  data={[
                    { key: "interier chin guard" },
                    {
                      key: "pinetree label on the back"
                    },
                    {
                      key: "rib cuffs with thumbholes"
                    }
                  ]}
                  renderItem={({ item, index }) => (
                    <View>
                      <Text style={styles.list}>.{item.key}</Text>
                    </View>
                  )}
                />
              </View>
            )}
            <View
              style={{ width: 360, height: 70, backgroundColor: "#5fc36c" }}
            >
              <Text style={styles.addtocard}>ADD TO CART</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#e4e4e4" }}>
            <Text style={styles.deliveryTAb}>Also in this category</Text>
          </View>
          <View style={{ backgroundColor: "#e4e4e4" }}>
            <View style={styles.ProductView}>
              <View>
                <Image
                  style={[styles.image, { marginRight: 10 }]}
                  source={require("./images/product11.png")}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: "center" }}>
                  FESTIVAL HOODDIE {"\n"} GRAY {"\n"} $55
                </Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require("./images/extra1.png")}
                />
                <Text style={{ textAlign: "center" }}>
                  BLUERISE HOODIE {"\n"} $55
                </Text>
              </View>
            </View>
            <View />
          </View>
          <View style={styles.footer}>
            <Icon
              onPress={this.onPress}
              style={{ color: "#ffffff" }}
              name="md-arrow-back"
              type="Ionicons"
            />
          </View>
        </View>
      </ScrollView>
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
  tab: {
    width: 180,
    height: 57
  },
  deliveryTab: {
    width: 180,
    height: 57,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#c5c5c4",
    borderTopColor: "#c5c5c4"
  },
  tabText: {
    textAlign: "center",
    fontSize: 15,
    paddingTop: 18,
    fontWeight: "500",
    paddingBottom: 9,
    color: "#2C3E50"
  },
  sliderParentView: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#c5c5c4",
    backgroundColor: "#e4e4e4"
  },
  sliderchildView: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  sliderImage: {
    width: 250,
    marginRight: 20,
    borderRadius: 10
  },
  parentPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 0,
    marginRight: 15,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "#e4e4e4",
    paddingBottom: 20
  },
  childPicker: {
    width: 120,
    height: 35,
    borderWidth: 1,
    borderColor: "#1d1d1d",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 14,
    borderRadius: 5
  },
  icon: {
    fontSize: 17,
    textAlign: "center",
    paddingTop: 8,
    color: "#f5f5f5"
  },
  addtocard: {
    textAlign: "center",
    paddingTop: 27,
    fontSize: 15,
    color: "#f5f5f5",
    fontWeight: "100",
    fontFamily: "Arial"
  },
  deliveryTAb: {
    fontFamily: "Arial",
    fontSize: 15,
    textAlign: "center",
    marginTop: 27,
    marginBottom: 10,
    color: "#8f8f8f"
  },
  image: {
    width: 160,
    height: 200,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "transparent"
  },
  border: {
    borderBottomWidth: 3,
    borderBottomColor: "blue",
    width: "100%",
    paddingTop: 5
  },
  footer: {
    height: 70,
    backgroundColor: "#1d1d1d",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 21,
    color: "#040404",
    paddingLeft: 20,
    paddingRight: 20
  },
  carouselImage: {
    width: 320,
    height: 340,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "transparent"
  },
  itemText: {
    fontFamily: "Sans-Sarif",
    fontSize: 15,
    marginBottom: 17,
    color: "#383938"
  },
  list: {
    fontSize: 15,
    marginBottom: 15,
    color: "#383938"
  },
  ProductView: {
    flexDirection: "row",
    margin: 15,
    flex: 1,
    backgroundColor: "#e4e4e4"
  }
});
