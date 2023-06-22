import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';

const DiceRollButton = () => {
  const [isRolling, setIsRolling] = useState(false);
  const rotationValue = useState(new Animated.Value(0))[0];

  const handleRollDice = () => {
    if (isRolling) return;

    setIsRolling(true);

    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsRolling(false);
      rotationValue.setValue(0);
    });
  };

  // const animatedRotation = rotationValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  const animatedRotation = rotationValue.interpolate({
    inputRange: [0, 0.1, 0.25, 0.4, 0.6, 0.75, 0.9, 1, 2],
    outputRange: ['0deg','360deg', '45deg', '-30deg', '60deg', '-45deg', '15deg', '-10deg', '0deg'],
  });


  return (
    <View style={styles.diceContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.diceButton}
          onPress={handleRollDice}
          disabled={isRolling}
         >
          <Animated.View style={[styles.dice, { transform: [{ rotate: animatedRotation }] }]}>
            <Text style={styles.diceText}>🎲</Text>
          </Animated.View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  diceContainer:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceButton: {
    width: 100,
    height: 100,
    borderRadius: 10,
    // backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceText: {
    fontSize: 60,
  },
});

export default DiceRollButton;
