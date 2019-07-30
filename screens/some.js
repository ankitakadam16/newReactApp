<View style={{flexDirection:"row",marginTop: 50,paddingLeft:50,paddingRight:50}}>
  <View style={{ flex: 1}}>
  <ModalDropdown options={['8 - 9','9 - 10','10 - 11','11 - 12','12 - 13','13 - 14','14 - 15','15 - 16','16 - 17']} defaultValue="Select Slot" menuPosition="top" style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
</View>
</View>


    <View style={{flexDirection:"row",marginTop: 50,paddingLeft:50,paddingRight:50}}>
      <View style={{ flex: 1}}>
    <DatePicker
     style={{width: 200}}
     date={this.state.dated}
     mode="date"
     placeholder="select date"
     format="DD-MM-YYYY"
     confirmBtnText="Confirm"
     cancelBtnText="Cancel"
     customStyles={{
       dateIcon: {
         position: 'absolute',
         left: 0,
         top: 4,
         marginLeft: 0
       },
       dateInput: {
         marginLeft: 36
       }
     }}
     onDateChange={(date) => {this.setState({date: date})}}
   />
   </View>
   </View>


   <View style={{flex:1,flexDirection:"row",alignItems: 'center'}}>
   <View style={{flex:0.4}}>
   <TouchableHighlight style={styles.slots}><Text style={styles.slotText}>9 - 10</Text>
   </TouchableHighlight>
   </View>
   <View style={{flex:0.4}}>
   <TouchableHighlight style={styles.slots}><Text style={styles.slotText}>10 - 11</Text>
   </TouchableHighlight>
   </View>
   <View style={{flex:0.4}}>
   <TouchableHighlight style={styles.slots}><Text style={styles.slotText}>11 - 12</Text>
   </TouchableHighlight>
   </View>
   </View>
