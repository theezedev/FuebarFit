import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const DiceButton = () => {
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    if(diceValue !== 'Rolled!'){
        const randomValue = 'Rolled!';
        setDiceValue(randomValue);
    }else{
        alert("You've already re-rolled!");
    }
    
    // const randomValue = Math.floor(Math.random() * 6) + 1;
    // setDiceValue(randomValue);

  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={rollDice}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          backgroundColor: '#7A7AC4',
          color: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          marginTop:20,
        }}
      >
        <Text style={{ fontSize: 28, color: '#fff' }}>{diceValue || 'Roll'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiceButton;
