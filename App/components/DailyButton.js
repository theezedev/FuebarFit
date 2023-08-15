import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const DailyButton = ({ headerText, currentValue, onValueChange, workout }) => {
    const [quantity, setQuantity] = useState(1);   

    const handleMinusPress = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
    };

    const handlePlusPress = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:''}}>
                <Text style={styles.header}>{headerText}</Text>
                <Text style={[styles.header,{fontWeight:'bold'}]}>{workout}</Text>
            </View>
        
            <View style={styles.adjusterContainer}>
                <TouchableOpacity onPress={handleMinusPress} style={[styles.button, { opacity: quantity === 0 ? 0.5 : 1 }]} disabled={quantity === 0}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                style={styles.input}
                value={quantity.toString()}
                onChangeText={text => {
                    const numericValue = parseInt(text) || 0;
                    setQuantity(numericValue);
                }}
                keyboardType="numeric"
                />
                <TouchableOpacity onPress={handlePlusPress} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    color:'#fff',
  },
  adjusterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderWidth: 0,
    borderColor: '#333',
    borderRadius: 5,
    width:60,
    alignItems:'center',
    backgroundColor:'#e939b8',
  },
  buttonText: {
    fontSize: 20,
    color:'#fff',
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    color:'#fff',
    height:'100%',
    textAlign:'center',
    backgroundColor:'#250d49',
  },
});

export default DailyButton;
