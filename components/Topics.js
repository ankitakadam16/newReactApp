import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel from 'react-native-carousel'
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box'

export default class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: true,
                  isChecked1: true,
                  isChecked2: true,
                  isChecked3: true,
                  imageStyle: {borderRadius: 10 },
                  imageStyle1: {borderRadius: 10 },
                  imageStyle2: {borderRadius: 10 },
                  imageStyle3: {borderRadius: 10 }
              }
            }

  submit(value) {
    if (value=="submit") {
      this.setState({isChecked:!this.state.isChecked});
      if (this.state.isChecked==true) {
        this.setState({style: {backgroundColor: "#585858",borderRadius:20,height: 105},imageStyle: {opacity:0.5,borderRadius: 10 }});
      }else{
        this.setState({style:{},imageStyle: {borderRadius: 10 }});
      }
    }
    if (value=="submit1") {
      this.setState({isChecked1:!this.state.isChecked1});
      if (this.state.isChecked1==true) {
        this.setState({style1: {backgroundColor: "#585858",borderRadius:20,height: 105},imageStyle1: {opacity:0.5,borderRadius: 10 }});
      }else{
        this.setState({style1:{},imageStyle1: {borderRadius: 10 }});
      }
    }
    if (value=="submit2") {

      this.setState({isChecked2:!this.state.isChecked2});
      if (this.state.isChecked2==true) {
        this.setState({style2: {backgroundColor: "#585858",borderRadius:20,height: 105},imageStyle2: {opacity:0.5,borderRadius: 10 }});
      }else{
        this.setState({style2:{},imageStyle2: {borderRadius: 10 }});
      }
    }
    if (value=="submit3") {

      this.setState({isChecked3:!this.state.isChecked3});
      if (this.state.isChecked3==true) {
        this.setState({style3: {backgroundColor: "#585858",borderRadius:20,height: 105},imageStyle3: {opacity:0.5,borderRadius: 10 }});
      }else{
        this.setState({style3:{},imageStyle3: {borderRadius: 10 }});
      }
    }
  }

  render() {
    return (
      <View>
      <View  style={{flex:1,flexDirection:"row",padding:10}}>
      <View  style={{flex:0.5,flexDirection:"column",padding:10}}>
      <TouchableOpacity style={this.state.style} onPress={(submit) => this.submit("submit")}>
      <ImageBackground source={require('../assets/images/doctor1.jpg')} style={styles.image} imageStyle={this.state.imageStyle} >
      <Text style={styles.imageText}> Eye Problem</Text>
      </ImageBackground>
      </TouchableOpacity>
      </View>
      <View  style={{flex:0.5,flexDirection:"column",padding:10}}>
      <TouchableOpacity style={this.state.style1} onPress={() => this.submit("submit1")}>
      <ImageBackground source={require('../assets/images/doctor2.png')} style={styles.image} imageStyle={this.state.imageStyle1} >
      <Text style={styles.imageText}> Eye Problem</Text>
      </ImageBackground>
      </TouchableOpacity>
      </View>
        </View>
        <View  style={{flex:1,flexDirection:"row",padding:10}}>
        <View  style={{flex:0.5,flexDirection:"column",padding:10}}>
        <TouchableOpacity style={this.state.style2} onPress={() => this.submit("submit2")}>
        <ImageBackground source={require('../assets/images/doctor2.jpg')} style={styles.image} imageStyle={this.state.imageStyle2} >
        <Text style={styles.imageText}> Eye Problem</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
        <View  style={{flex:0.5,flexDirection:"column",padding:10}}>
        <TouchableOpacity style={this.state.style3} onPress={() => this.submit("submit3")}>
        <ImageBackground source={require('../assets/images/doctor2.jpg')} style={styles.image} imageStyle={this.state.imageStyle3} >
        <Text style={styles.imageText}> Eye Problem</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
          </View>

      </View>

    );
  }
}



const styles = StyleSheet.create({
  image:{
    height: 100,
    // width:172,
     position: 'relative',
     top: 2,
     left: 2,
     borderRadius:20,
  },
  imageText:{
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    top:20
  }
});
