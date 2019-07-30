import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel from 'react-native-carousel'
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';

export default class DoctorMeetingCurosel extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.cont2} >
      <Text> Daily Whatsaap Status</Text>
      <View style = {styles.lineStyle} />
        <Carousel width={375} hideIndicators={true} animate={false}>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text style={{fontSize:10}}> Daily Whatsaap Status</Text>
              </View>
              </View>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text  style={{fontSize:10}}> Daily Whatsaap Status</Text>
              </View>
              </View>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text  style={{fontSize:10}}> Daily Update</Text>
              </View>
              </View>
          </Carousel>
            </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: 5,
  },

   cont1:{
      margin:8,
      padding:10,
      flex:1,
      backgroundColor:'#ffffff',
      borderRadius:10,
      height:100,
      flexDirection: 'row',
      justifyContent: 'center'

     },
     cont2:{
        margin:0,
        padding:10,
        flex:1,
        backgroundColor:'#ffffff',
        borderRadius:10,
        height:300,
       },
     lineStyle:{
      borderWidth: 0.5,
      borderColor:'#525252',
      margin:10,
 },
   imgBackground: {
           width: '100%',
           height: '100%',
           flex: 1,
   },

box:{
  borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: 325,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding:10
}
});
