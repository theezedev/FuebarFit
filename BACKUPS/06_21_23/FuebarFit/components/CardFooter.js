import { StyleSheet, Text, View } from 'react-native';


export default function CardFooter({footerLabel}){
    return(
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{footerLabel}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        height: '100%',

        padding: 15,
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerText: {
        width:'100%',
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
    }
});