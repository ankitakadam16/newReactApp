import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image, TouchableHighlight } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel from 'react-native-carousel'
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';
import DoctorMeetingCurosel from '../components/DoctorMeetingCurosel';
import { Constants } from 'expo';

export default class CalendarScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
       iconColour: "#447df4"
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  colorChange(value) {
    if (value=='Patient') {

    }
}
  render() {
    let dates = ['2019-06-09','2019-06-20','2019-06-26','2019-07-26']
    let customDatesStyles = [];
    for (var i = 0; i < dates.length; i++) {
        customDatesStyles.push({
          date: dates[i],
          style: {backgroundColor: '#ffffff'},
          textStyle: {color: '#e34949'},
          containerStyle: [],
        });
    }
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={{flex:1}}>
      <View style={{height:Constants.statusBarHeight,backgroundColor:'#447df4'}}></View>
      <View style={styles.container}>
      <View style={{flex:1,backgroundColor:'#ffffff',paddingBottom:10}}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          todayTextStyle={{fontWeight: 'bold'}}
          todayBackgroundColor={'#dedede'}
          customDatesStyles={customDatesStyles}
          selectedDayColor="transparent"
          selectedDayTextColor="#faf137"
          // minDate={today}
        />
        </View>
        <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <View style={styles.cont1} >
        <View style={{flex:0.3, alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
        <Ionicons name="md-person" size={32} color={this.state.iconColour}  onPress={() => this.colorChange('Schedule')}/>
        <Text>Schedule</Text>
          </View>
          <View style={{flex:0.3, alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
            <Ionicons name="md-people" size={32} color={this.state.iconColour} onPress={() => this.colorChange('Patient')}/>
            <Text>Patient</Text>
            </View>
            <View style={{flex:0.3, alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
              <Ionicons name="md-walk" size={32} color={this.state.iconColour} onPress={() => this.colorChange('Visit')}/>
                <Text>Visit</Text>
              </View>
        </View>
        <DoctorMeetingCurosel/>
          </ScrollView>
          </View>
        </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop:10,
  },

   cont1:{
      padding:10,
      flex:1,
      backgroundColor:'#ffffff',
      borderRadius:10,
      height:75,
      flexDirection: 'row',
      justifyContent: 'center'

     },
     cont2:{
        margin:8,
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
