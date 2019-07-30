import React, { Component } from 'react';
import { Alert, ScrollView, StyleSheet, View, Text, TextInput, Picker, TouchableHighlight, ImageBackground, Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Calendar from 'react-native-calendar';
import DatePicker from 'react-native-datepicker'
import CalendarStrip from 'react-native-calendar-strip';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { Kohana } from 'react-native-textinput-effects';
import RadioButtonCurosel from '../components/RadioButtonCurosel';
import Topics from '../components/Topics';
// import StatusBarColor from '../components/StatusBarColor';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Constants } from 'expo';

let datesBlacklist = []
let dates = ['2019-06-09','2019-06-20','2019-06-26','2019-07-26']
for (var i = 0; i < dates.length; i++) {
    datesBlacklist.push({
      start: dates[i],
      end: dates[i],
})
}
var radio_props = [
  {label: '9 - 10', value: 0 },
  {label: '10 - 11', value: 1 },
  {label: '11 - 12', value: 1 },
  {label: '12 - 13', value: 1 },

];
export default class NewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {patientName: '',
                  patientemailId:'',
                  patientPhone:'',
                  topic:'',
                  slot:'',
                  dated:"15-05-2018",
              };
  }

render(){

  return (
    <View style={{flex: 1,}}>
  <View style={{height:Constants.statusBarHeight,backgroundColor:'#447df4'}}></View>
    <ScrollView>
    <CalendarStrip
      daySelectionAnimation={{
        type: 'border',
        borderWidth: 1,
        borderHighlightColor: '#447df4',
      }}
      style={{ height: 150, paddingTop:30, paddingBottom: 0 }}
      calendarHeaderStyle={{ color: 'black' }}
      calendarColor={'#ffffff'}
      datesBlacklist={datesBlacklist}
    />

    <RadioButtonCurosel/>
    <View>
    <View style={{flexDirection:"row"}}>
      <Kohana
          style={{ backgroundColor: '#ffffff'}}
          label={'Patient Phone'}
          iconClass={Ionicons}
          iconName={'md-call'}
          iconColor={'#000000'}
          inputPadding={16}
          labelStyle={{ color: '#000000' }}
          inputStyle={{ color: '#00000' }}
          labelContainerStyle={{ padding: 20 }}
          iconContainerStyle={{ padding: 20 }}
          useNativeDriver
        />
    </View>
    <View style={{flexDirection:"row"}}>
      <Kohana
          style={{ backgroundColor: '#ffffff' }}
          label={'Patient Name'}
          iconClass={Ionicons}
          iconName={'md-person'}
          iconColor={'#000000'}
          inputPadding={16}
          labelStyle={{ color: '#000000' }}
          inputStyle={{ color: '#00000' }}
          labelContainerStyle={{ padding: 20 }}
          iconContainerStyle={{ padding: 20 }}
          useNativeDriver
        />
    </View>
    <View style={{flexDirection:"row"}}>
      <Kohana
          style={{ backgroundColor: '#ffffff' }}
          label={'Patient Email'}
          iconClass={Ionicons}
          iconName={'md-mail'}
          iconColor={'#000000'}
          inputPadding={16}
          labelStyle={{ color: '#000000' }}
          inputStyle={{ color: '#00000' }}
          labelContainerStyle={{ padding: 20}}
          iconContainerStyle={{ paddingRight: 20,paddingTop: 20,paddingBottom: 20 }}
          useNativeDriver
        />
    </View>
    <View style={{flexDirection:"row"}}>
      <Kohana
          style={{ backgroundColor: '#ffffff' }}
          label={'Note'}
          iconClass={Ionicons}
          iconName={'md-text'}
          iconColor={'#000000'}
          inputPadding={16}
          labelStyle={{ color: '#000000' }}
          inputStyle={{ color: '#00000' }}
          labelContainerStyle={{ padding: 20}}
          iconContainerStyle={{ paddingRight: 20,paddingTop: 20,paddingBottom: 20 }}
          useNativeDriver
        />
    </View>

    <Topics/>


   <View style={{flex:1,flexDirection:"column",alignItems: 'center',padding:50}}>
   <TouchableHighlight  style={styles.submit}  onPress={() => this.submit()}   underlayColor='#447df4'>
     <Text style={styles.submitText}>Save</Text>
   </TouchableHighlight>
   </View>
   </View>
   </ScrollView>
    </View>
  );
}
}

// NewScreen.navigationOptions = {
//   title: 'New Appointment',
// };

const styles = StyleSheet.create({
  submit:{
    marginRight:40,
    marginLeft:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#447df4',
    borderRadius:50,
    // borderWidth: 1,
    // borderColor: '#000000'
  },
  slots:{
    marginRight:10,
    marginLeft:10,
    marginTop:0,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#ffffff',
    borderRadius:20,
    borderWidth: 1,
   borderColor: '#000000'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      paddingRight:50,
      paddingLeft:50
  },

  slotText:{
    color:'#000000',
    textAlign:'center',
  }

});
