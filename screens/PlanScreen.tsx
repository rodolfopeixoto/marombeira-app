import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardPlan } from "../components/cardPlan";
import { CardWeek } from "../components/cardWeek";
import { DateTab } from "../components/dateTab";

import { View } from "../components/Themed";

const DATA_FIT = [
  {
    "id": 1,
    "title": "Grupo A",
    "done": true
  },
  {
    "id": 2,
    "title": "Grupo B",
    "done": true
  },
  {
    "id": 3,
    "title": "Grupo C",
    "done": false
  },
  {
    "id": 4,
    "title": "Grupo D",
    "done": false
  },
]

export default function PlanScreen({route}) {

  const renderItem = ({ item }) => (
    <CardPlan
              id={item.id}
              title={item.title}
              done={item.done} />
  )

  return (
    <View style={styles.container}>
          <FlatList
            data={DATA_FIT}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  }
});
