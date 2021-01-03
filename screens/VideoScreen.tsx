import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { CardTrain } from "../components/cardTrain";
import { CardWeek } from "../components/cardWeek";
import { DateTab } from "../components/dateTab";
import { View } from "../components/Themed";

export default function VideoScreen({route}) {

  const { video } = route.params;

  return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <View style={styles.container}>
            <WebView
              source={{
                uri: video,
              }}
            style={{ width: '100%', height: 200 }}
            automaticallyAdjustContentInsets={false}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            />
    {console.log(`Teste: ${video}`)}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    margin: 10
  }
});
