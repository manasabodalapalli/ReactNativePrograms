
import React from 'react';
import { Text,StyleSheet, TouchableOpacity } from 'react-native';

export default function AppButton ({btnTitle,onPress})
{
return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>
            {btnTitle}
        </Text>

    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent:'space-around',
      alignSelf: 'auto',
      borderRadius: 30,    
      marginLeft:20,
      marginRight:20,
      fontSize:18,
      textAlign:'center',
      padding:10,
      color:'#fff',
      backgroundColor: '#051E7F'
    }
});

