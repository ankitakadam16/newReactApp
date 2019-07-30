
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import DoctorMeetingCurosel from '../components/DoctorMeetingCurosel';
import { Constants } from 'expo';
let datesBlacklist = []


let dates = ['2019-06-09','2019-06-20','2019-06-26','2019-07-26']
for (var i = 0; i < dates.length; i++) {
    datesBlacklist.push({
      start: dates[i],
      end: dates[i],
})
}
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
       iconColour: "#447df4"
    };

  }
  colorChange(value) {
    if (value=='Patient') {

    }
}
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{height:Constants.statusBarHeight,backgroundColor:'#447df4'}}></View>
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'black',
          }}
          style={{ height: 150, paddingTop:30, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: 'black' }}
          calendarColor={'#ffffff'}
          datesBlacklist={datesBlacklist}
        />
      <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
      <View style={styles.cont1}>
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

    )
  }
}

const styles = StyleSheet.create({
     cont1:{
        padding:10,
        flex:1,
        backgroundColor:'#ffffff',
        borderRadius:10,
        height:75,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:0

       },
});
