import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  const [firstname, setfirstName] = useState();
  const [lastname, setlastName] = useState();
  const [contact, setcontact] = useState();

  const click= ()=>{
    alert("firstname : " + firstname + ' ' + "lastname : "+lastname +"contact :" +contact)
  }
  const onreset=()=>
  {
    setfirstName('');
    setlastName('');
    setcontact('');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Welcome to  Native Project</Text>
        <TextInput style={styles.dataInput} placeholder="Enter your First Name" onChangeText={(text)=>setfirstName(text)} value={firstname}/>
        <TextInput style={styles.dataInput} placeholder="Enter your Last Name" onChangeText={(text)=>setlastName(text)} value={lastname}/>
        <TextInput style={styles.dataInput} placeholder="Enter your Contact Number" keyboardType='numeric' onChangeText={(text)=>setcontact(text)} value={contact}/>
        
        <View style={styles.button}><Button title="Click Me" color="blueviolet" onPress={click}/></View>
      <View style={styles.button}><Button title="Reset"  onPress={onreset}/></View>
       
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 80,
  },
  textStyle: {
    textAlign:"center", 
    backgroundColor:'#ECF0F1',
  
  },
  dataInput:
  {
    borderWidth: 3,
    maxWidth: 800,
    padding: 10,
    margin: 10,
  },
   button: {
    marginTop:7,
    height: 40,
   padding:5
  },
 
});
