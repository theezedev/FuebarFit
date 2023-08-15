import React, { useState } from 'react';
import { View, Button, Animated } from 'react-native';

const AccordionButton = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const defaultChildHeight = 100;
  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, children ? children.props.style?.height || defaultChildHeight : 0],
  });

  return (
    <View>
      <Button title={title} onPress={toggleAccordion} />
      <Animated.View style={{ height, overflow: 'hidden' }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default AccordionButton;
