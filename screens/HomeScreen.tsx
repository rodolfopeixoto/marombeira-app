import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardWeek } from "../components/cardWeek";
import { DateTab } from "../components/dateTab";

import { View } from "../components/Themed";

const DATA_FIT = [
  {
    "id": 1,
    "title": "Semana 1",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 200
  },
  {
    "id": 2,
    "title": "Semana 2",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 180
  },
  {
    "id": 3,
    "title": "Semana 3",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 160
  },
  {
    "id": 4,
    "title": "Semana 4",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 140
  },
  {
    "id": 5,
    "title": "Semana 5",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 120
  },
  {
    "id": 6,
    "title": "Semana 6",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 100
  },
  {
    "id": 7,
    "title": "Semana 7",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 80
  },
  {
    "id": 8,
    "title": "Semana 8",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 60
  },
  {
    "id": 9,
    "title": "Semana 9",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 40
  },
  {
    "id": 10,
    "title": "Semana 10",
    "fat": 100,
    "protein": 205,
    "carbohydrate": 30
  },
]

export default function HomeScreen() {

  const renderItem = ({ item }) => (
    <CardWeek
              id={item.id}
              title={item.title}
              fat={item.fat}
              protein={item.protein}
              carbohydrate={item.carbohydrate} />
  )

  return (
    <View style={styles.container}>
        <View
      style={styles.daysContainer}>

          <DateTab
            dayWeek="Seg"
            dateWeek="01"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={true}
          />

          <DateTab
            dayWeek="Ter"
            dateWeek="02"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={true}
          />

          <DateTab
            dayWeek="Qua"
            dateWeek="03"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={true}
          />

          <DateTab
            dayWeek="Qui"
            dateWeek="04"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={false}
          />

          <DateTab
            dayWeek="Sex"
            dateWeek="05"
            currentDayWeek={true}
            currentDateWeek={true}
            doneWorkout={true}
          />

          <DateTab
            dayWeek="Sab"
            dateWeek="06"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={false}
          />

          <DateTab
            dayWeek="Dom"
            dateWeek="07"
            currentDayWeek={false}
            currentDateWeek={false}
            doneWorkout={false}
          />

        </View>

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
    alignItems: "center",
    justifyContent: "center",
  },
  daysContainer: {
    flexDirection: 'row',
    elevation: 1,
  }
});
