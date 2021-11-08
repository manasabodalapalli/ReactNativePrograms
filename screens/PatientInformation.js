import React ,{useState}from 'react';
import {SafeAreaView,View,Text,TextInput,Image,StyleSheet,ScrollView} from 'react-native';
import ButtonComponent  from '../Components/ButtonComponent';
import stylesComponent from '../Components/stylesComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-datepicker';


const PatientInformation = ({navigation}) => {
  const [date, setDate] = useState('20 Oct 1985');
  const [isSelected, setSelection] = useState(false);
  const [text1, onChangeText1] = useState();
  const [text2, onChangeText2] = useState();
  const [text3, onChangeText3] = useState();
  const [text4, onChangeText4] = useState();
  const [text5, onChangeText5] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Female', value: 'Female'},
    {label: 'Male', value: 'Male'}
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: '5ft4', value: '5ft4',selected: true},
    {label: '5ft5', value: '5ft5'}
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: '50', value: '50',selected: true},
    {label: '60', value: '60'}
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {label: 'B+', value: 'B+',selected: true},
    {label: 'A+', value: 'A+'}
  ]);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: 'India', value: 'India'},
    {label: 'US', value: 'US'}
  ]);
  const [open5, setOpen5] = useState(false);
  const [value5, setValue5] = useState(null);
  const [items5, setItems5] = useState([
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Kerala', value: 'Kerala'}
  ]);
  const [open6, setOpen6] = useState(false);
  const [value6, setValue6] = useState(null);
  const [items6, setItems6] = useState([
    {label: 'Bangalore', value: 'Bangelore'},
    {label: 'Hyd', value: 'HYD'}
  ]);
  
    return(
      <ScrollView>
        <SafeAreaView style={styles.container}>          
            <Text style={styles.text}>Patient Information</Text>           
            <View style={styles.viewtext}>
                <Text style={styles.textName}>First Name</Text>
                <Text style={styles.textLastName}>Last Name</Text>
            </View>
            <View style={styles.viewinput}>
                <TextInput style={styles.textinput}onChangeText={onChangeText1}
                    value={text1} placeholder='Shruti'/>
                <TextInput style={styles.textinput}onChangeText={onChangeText2}
                    value={text2} placeholder='Sharma'/>
            </View>
            <View style={styles.viewtext}>
                <Text style={styles.textName}>Date of Birth</Text>
                <Text style={styles.textGender}>Gender</Text>
            </View>
            <View style={styles.viewinput}>
            <DatePicker
          style={styles.textinput}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD MMM YYYY"
          minDate="01 01 1985"
          maxDate="01 01 2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: { width:0, height:0,
            },
            dateInput: {
              marginBottom:20,width:250,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
                <DropDownPicker
                    open={open}
                    value={value}
                    defaultValue={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Female"
                    style={{  height: 40, width: 155, borderRadius:0}}
                    containerStyle={{height: 40,width: 155}}/>
            </View>
            <View style={styles.viewtext1}>
                <Text style={styles.textheight}>Height</Text>
                <Text style={styles.textweight}>Weight(Kg)</Text>
                <Text style={styles.textbloodgroup}>Blood Group</Text>
            </View>
            <View style={styles.viewdropdown}>
            <DropDownPicker
                    open={open1}
                    value={value1}
                    defaultValue={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    placeholder="5ft 4'"
                    style={{  height: 40, width: 105, borderRadius:0}}
                    containerStyle={{height: 40,width: 105}}/>
                <DropDownPicker
                    open={open2}
                    value={value2}
                    defaultValue={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="50"
                    style={{  height: 40, width: 105, borderRadius:0}}
                    containerStyle={{height: 40,width: 105}}/>
                    <DropDownPicker
                    open={open3}
                    value={value3}
                    defaultValue={value3}
                    items={items3}
                    setOpen={setOpen3}
                    setValue={setValue3}
                    setItems={setItems3}
                    placeholder="B+"
                    style={{  height: 40, width: 105, borderRadius:0}}
                    containerStyle={{height: 40,width: 105}}/>
            </View>
            <View style={styles.viewadress}>
                <Text style={styles.textLastName}>Address</Text>
                <TextInput style={styles.textadress}onChangeText={onChangeText4}
                    value={text4} placeholder='Address'/>
                </View>
                  
                <View style={styles.viewdropdown1}>
                <DropDownPicker
                    open={open4}
                    value={value4}
                    defaultValue={value4}
                    items={items4}
                    setOpen={setOpen4}
                    setValue={setValue4}
                    setItems={setItems4}
                    placeholder="Country"
                    style={{  height: 40, width: 155, borderRadius:0}}
                    containerStyle={{height: 40,width: 155}}/>

                   <DropDownPicker
                    open={open5}
                    value={value5}
                    defaultValue={value5}
                    items={items5}
                    setOpen={setOpen5}
                    setValue={setValue5}
                    setItems={setItems5}
                    placeholder="State"
                    style={{  height: 40, width: 155, borderRadius:0}}
                    containerStyle={{height: 40,width: 155}}/>
                  </View>

              
            <View style={styles.viewdropdown1}>
                
            <DropDownPicker
                    open={open6}
                    value={value6}
                    defaultValue={value6}
                    items={items6}
                    setOpen={setOpen6}
                    setValue={setValue6}
                    setItems={setItems6}
                    placeholder="City"
                    style={{  height: 40, width: 155, borderRadius:0}}
                    containerStyle={{height: 40,width: 155}}/>
                    <TextInput style={styles.textinput}onChangeText={onChangeText5}
                    value={text5}  placeholder='ZipCode' placeholderTextColor='#000'/>
            </View>
            <View style={styles.checkboxInput}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxlabel}>By creating an account,you certify you are at least 18 years of age, and agree to Second Consult, Terms of use & Privacy Policy</Text>
      </View>
      <ButtonComponent 
              btnTitle={'Save & Continue'}
              onPress={() => navigation.navigate("HomePage")}
              style={stylesComponent.button}
        />
        </SafeAreaView>
        </ScrollView>
          );  
  };  
  export default PatientInformation;

  const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor: "white",
    },
    checkboxInput:{
        flexDirection:"row", marginTop:10, marginBottom: 20,
    },
    viewcheckbox:{
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    checkboxlabel: {
        margin: 8, color: '#000', width:320
    },
    viewdropdown:{
        alignItems: "flex-start", justifyContent: "flex-start",flexDirection: "row", 
        marginTop:10, marginLeft:25
    },
    viewdropdown1:{
        alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "row", 
        marginTop:20, marginLeft:30
    },
    viewinput:{
        alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "row", 
        marginTop:10,  marginLeft:25
    },    
    viewtext:{
        alignItems: "flex-start", justifyContent: "space-between", flexDirection: "row", 
        marginTop:20,  marginLeft:25
    },
    viewtext1:{
        alignItems: "flex-start",justifyContent: "space-evenly", flexDirection: "row", 
        marginTop:20,   
    },
    viewadress:{
      alignItems: "flex-start", justifyContent: "space-around", flexDirection: "column",
      marginTop:20,  marginLeft:30    
    },
     text: {
      color: '#000',fontSize: 25, marginLeft:25, marginTop:20, fontWeight:'bold'
    },
    textName: {
      color: '#000', textAlign: 'center', fontSize: 15,
    }, 
    textLastName: {
      color: '#000', textAlign: 'center', fontSize: 15, marginRight:100
    },
    textGender: {
      color: '#000', textAlign: 'center', fontSize: 15, marginRight:120
    },
    textweight: {
      color: '#000', textAlign: 'left', fontSize: 15,
    },
    textbloodgroup: {
      color: '#000', textAlign: 'center', fontSize: 15,    
    },
    textheight: {
      color: '#000',textAlign: 'center', fontSize: 15, marginRight:35
    },
    textinput: {
      height: 40, width:155, alignItems:'center', borderWidth:1, padding: 10,
    },
    textadress: {
      height: 40, width:310, alignItems:'center', borderWidth:1, padding: 10,
      marginTop:10,  
    },
  });
  
  