import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://plugin.eventscalendar.co/widget.html?lang=en&dateNumberFormat=en-us&isPrimaryLanguage=true&pageId=bivfj&compId=comp-li4x2yiz&viewerCompId=comp-li4x2yiz&siteRevision=1940&viewMode=site&deviceType=desktop&locale=en&tz=America%2FNew_York&regionalLanguage=en&width=980&height=765&instance=m8z2ivfzdqD2pLusFDN0zToGmCmdFX1el-cKCPP85Hs.eyJpbnN0YW5jZUlkIjoiYjQ1ODIwMzUtMjk1YS00ZGZhLTllMGQtZTNiOTJhOWRkOTUwIiwiYXBwRGVmSWQiOiIxMzNiYjExZS1iM2RiLTdlM2ItNDliYy04YWExNmFmNzJjYWMiLCJzaWduRGF0ZSI6IjIwMjMtMDgtMDlUMjM6MjY6NTcuNzA5WiIsInZlbmRvclByb2R1Y3RJZCI6InByZW1pdW0iLCJkZW1vTW9kZSI6ZmFsc2UsImFpZCI6ImYzMDAwMzI1LTI3NjctNDlkOC1iNGY4LWM0OGZiMjg1MDNjNSIsInNpdGVPd25lcklkIjoiZjViMDk4YjQtNGVlNC00ZmI5LWEyMTctMTQzZmIwOWJiODM3In0&currency=USD&currentCurrency=USD&commonConfig=%7B%22brand%22:%22wix%22,%22host%22:%22VIEWER%22,%22bsi%22:%223a2c424b-db06-4d6b-8831-e63d5e8ece25%7C4%22,%22BSI%22:%223a2c424b-db06-4d6b-8831-e63d5e8ece25%7C4%22%7D&currentRoute=.%2Fjudges-calendars&vsi=9a2def3a-d618-40ab-b967-748fe22fa4cf' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalendarScreen;
