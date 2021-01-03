import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const DateTab: React.FC = ({dayWeek, dateWeek, doneWorkout, currentDayWeek, currentDateWeek}) => {

  function colorCircle(){
    if(doneWorkout) return styles.circleDateDone;
    if(currentDateWeek) return styles.circleDateCurrent;

    return styles.circleDate
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.daysContainer}>

          <View style={styles.dateWeek}>
            <Text style={
              currentDayWeek ? styles.dayWeekTitleCurrent : styles.dayWeekTitle
              }>{dayWeek}</Text>
            <View style={
              colorCircle()
              }>
              <Text style={styles.numberDate}>
                {dateWeek}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}

const CIRCLE_VALUE = 35;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    padding: 5
  },
  circleDate: {
    width: CIRCLE_VALUE,
    height: CIRCLE_VALUE,
    borderRadius: CIRCLE_VALUE/2,
    backgroundColor: "#0066ff",
    justifyContent: "center",
    alignItems: "center",
  },
  numberDate: {
    color: "white",
  },
  daysContainer: {
    flexDirection: 'row'
  },
  dateWeek: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
  },
  dayWeekTitle: {
    fontSize: 14,
  },
  dayWeekTitleCurrent: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#d81b24'
  },
  circleDateCurrent: {
    width: CIRCLE_VALUE,
    height: CIRCLE_VALUE,
    borderRadius: CIRCLE_VALUE/2,
    backgroundColor: "#1bd879",
    justifyContent: "center",
    alignItems: "center",
  },
  circleDateDone: {
    width: CIRCLE_VALUE,
    height: CIRCLE_VALUE,
    borderRadius: CIRCLE_VALUE/2,
    backgroundColor: "#d81b24",
    justifyContent: "center",
    alignItems: "center",
  }

});
