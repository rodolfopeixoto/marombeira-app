import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { CardTrain } from "../components/cardTrain";
import { CardWeek } from "../components/cardWeek";
import { DateTab } from "../components/dateTab";
import { View } from "../components/Themed";

const DATA_FIT = [
  {
    "id": 1,
    "title": ["Manguito Rotador Externo Barra"],
    "series": "2x8",
    "advanceTechnique": "Drop-Set 3x",
    "videoTitle": ["https://www.youtube.com/embed/QdUn8TBdjvU"],
    "videoAdvanceTechnique": "https://www.youtube.com/embed/SwWD2kNBj3Q"
  },
  {
    "id": 2,
    "title": ["Elevação Lateral Unilateral Banco Inclinado"],
    "series": "5x10",
    "advanceTechnique": "",
    "videoTitle": ["https://www.youtube.com/embed/8s9JRhE95mU"],
    "videoAdvanceTechnique": ""
  },
  {
    "id": 3,
    "title": ["Manguito Rotador Externo Barra"],
    "series": "5x12",
    "advanceTechnique": "",
    "videoTitle": ["https://www.youtube.com/embed/5bdlcZZvpzE"],
    "videoAdvanceTechnique": ""
  },
  {
    "id": 4,
    "title": ["Tríceps Pulley Peg Supinada", "Tríceps Pulley Peg Pronada"],
    "series": "4x10",
    "advanceTechnique": "Bi-Set",
    "videoTitle": ["https://www.youtube.com/embed/2W09NaNpiOA", "https://www.youtube.com/embed/QDt8P44ORa4"],
    "videoAdvanceTechnique": "https://www.youtube.com/embed/bd0V7svOP0E"
  },
  {
    "id": 5,
    "title": ["Mergulho"],
    "series": "4xF",
    "advanceTechnique": "",
    "videoTitle": ["https://www.youtube.com/embed/jAkRzFnEvSo"],
    "videoAdvanceTechnique": ""
  }
]

export default function TrainScreen({route, navigation}) {

  const renderItem = ({ item }) => (
    <>
    {console.log(`Video: ${item.videoTitle}`)}
    <CardTrain
              id={item.id}
              title={item.title}
              series={item.series}
              advanceTechnique={item.advanceTechnique}
              videoTitle={item.videoTitle}
              videoAdvanceTechnique={item.videoAdvanceTechnique}
              route={route}
              />
              </>
  )

  return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <View style={styles.container}>
            <FlatList
              data={DATA_FIT}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
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
