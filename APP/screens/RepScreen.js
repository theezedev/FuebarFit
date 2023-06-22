import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import CardHeader from '../components/CardHeader';
import DiceButton from '../components/DiceButton';
import WorkoutRow from '../components/WorkoutContainer';
import TodaysDate from '../components/TodaysDate';
import BottomNav from '../components/BottomNav';


const upperArray = ['Push Ups', 'Lateral Raises', 'Shoulder Press', 'Dumbell Press'];
const coreArray = [1, 2, 3, 4, 5];
const lowerArray = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.bodyContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <CardHeader leftLabel="Daily Counter" rightLabel={<TodaysDate />} />
          </View>
          <View style={styles.cardBody}>
              <View style={styles.workoutContainer}>
                <WorkoutRow workoutName='Push ups' workoutType='Upper' />
                <WorkoutRow workoutName='Sit ups' workoutType='Core' />
                <WorkoutRow workoutName='Squats' workoutType='Lower' />
              </View>
              <View style={styles.diceContainer}>
                <DiceButton />
              </View>
          </View>
          <View style={styles.cardFooter}>
            {/* <BottomNav /> */}
          </View>
        </View>
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#1a0933',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%',
  },
  cardContainer: {
    minheight:'100%',
    width:'100%',

    ...Platform.select({
        web: {
          maxHeight: 600,
          maxWidth:300,

          minHeight: 600,
          minWidth:300,
        },
        default:{
          height:'100%',
          width:'100%',
        }
    }),
    backgroundColor: '#BABAFC',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  cardHeader:{
    backgroundColor: '#7A7AC4',
    ...Platform.select({
      web: {
        height:50,
      },
      default:{
        height:100,
        height:100,
      }
    }),
    
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  cardBody:{
    // height:'100%',
    justifyContent:'space-between',
    ...Platform.select({
      web: {
        // height:50,
      },
      default:{
        // height:'100%',
      }
    }),
    
  },
  cardFooter:{
    backgroundColor: '#7A7AC4',
    width:'100%',
    ...Platform.select({
      web: {
        height:50,
        position:'absolute',
        bottom:0,
      },
      default:{
        height:150,
        position:'absolute',
        bottom:0,
      }
    }),

    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  workoutContainer:{
    margin:20,
    height:50,
  },
  diceContainer:{
    width:'100%',
    // position:'absolute',
    // bottom:0,
    height:50,
  }
});
