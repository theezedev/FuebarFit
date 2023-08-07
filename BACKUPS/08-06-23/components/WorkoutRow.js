import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const [inputValue, setInputValue] = useState('0');
        
const handleChangeText = (text) => {
    setInputValue(text);
};

const handleTouchableOpacityPress = () => {

    let integerValue = parseInt(inputValue, 10); // Convert string to integer
    let incrementedValue = integerValue + 1; // Add 1 to the integer
    let resultingString = incrementedValue.toString(); // Convert the integer back to a string

    setInputValue(resultingString);
};


const WorkoutRow = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent:'space-between',}}>
            <Text style={styles.workoutName}>{workoutType}:</Text>
            <Text style={[styles.workoutName,{textAlign:'right',}]}>{workoutName}</Text>
        </View>
        <View style={styles.workoutRow}>
            <TouchableOpacity onPress={handleTouchableOpacityPress} activeOpacity={.5} style={[styles.basicButton, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}]}>
                <FontAwesome name='minus' size={16} color={'#fff'}></FontAwesome>
            </TouchableOpacity>
            <TextInput editable={false} selectTextOnFocus={false} style={styles.basicInput} value={inputValue} onChangeText={handleChangeText}/>
            <TouchableOpacity onPress={handleTouchableOpacityPress} style={[styles.basicButton, {borderTopRightRadius: 10, borderBottomRightRadius: 10,}]}>
                <FontAwesome name='plus' size={16} color={'#fff'}></FontAwesome>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    workoutRow: {
        width: '100%',
        height: '100%',
        marginBottom: 20,
        justifyContent:'space-between',
        flexDirection: 'row',
    },
    workoutName:{
        color: '#fff',
        fontSize: 24,
        marginBottom: 10,
    },
    basicButton:{
        backgroundColor: '#7A7AC4',
        height: 42,
        width: 42,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 24,
    },
    basicInput:{
        width:'70%',
        height:42,
        backgroundColor: '#7A7AC4',
        textAlign:'center',
        fontSize:24,
        userSelect: 'none',
        ...Platform.select({
            web: {
                cursor: 'default',
            },
        }),
    },
    
});

export default WorkoutRow;
