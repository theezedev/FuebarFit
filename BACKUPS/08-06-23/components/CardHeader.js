import { StyleSheet, Text, View } from 'react-native';


export default function CardHeader({leftLabel, rightLabel}){
    return(
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{leftLabel}</Text>
          <Text style={styles.headerText}>{rightLabel}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '100%',

        padding: 15,
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
    }
});