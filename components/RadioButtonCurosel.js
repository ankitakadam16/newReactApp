import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel from 'react-native-carousel'
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
// import { RadioButton } from 'react-native-paper';



var radio_props = [
  {label: '13 - 14', value: 0 },
  {label: '14 - 15', value: 1 },
  {label: '15 - 16', value: 2 },
  {label: '17 - 18', value: 3 },
  {label: '18 - 19', value: 4 },
  {label: '19 - 20', value: 5 },
];
export default class RadioButtonCurosel extends Component {

  state = {
    checked:0
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
      <View style={{height: 25,paddingLeft:25,paddingRight:25}} >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  onPress={(value) => {this.setState({value:value})}}
                  buttonSize={10}
                  buttonOuterSize={20}
                  buttonStyle={{}}
                  buttonColor={'#447df4'}
                  buttonWrapStyle={{marginLeft: 30}}
                   labelStyle={{fontSize: 20,paddingRight:30}}
                />
      </ScrollView>
            </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
});





// let a = radio_props2.map((item)=>{
//   return (
//     <View>
//     <RadioButton
//       value={item.value}
//       status={this.state.checked === 0 ? 'checked' : 'unchecked'}
//       onPress={() => { this.setState({ checked: 0 }); }}
//     />
//     <Text>{item.label}</Text>
//     </View>
//   )
// })


      //
      // <Carousel width={100} hideIndicators={true} animate={false} >
      //
      //   {a}
      //
      //   </Carousel>
