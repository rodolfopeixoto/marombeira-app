import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const CardWeek: React.FC = ({id, title, fat, protein, carbohydrate}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.bold}>{title}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Plan', {
              params: {
                id: id
              }
            })
          }
          style={styles.macros}>
          <Text style={styles.bold}>
            Gordura:
            <Text style={styles.withoutBold}>{fat}</Text>
          </Text>
          <Text style={styles.bold}>
            Proteína:
            <Text style={styles.withoutBold}>{protein}</Text>
          </Text>
          <Text  style={styles.bold}>
            Carboidrato:
            <Text style={styles.withoutBold}>{carbohydrate}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    padding: 5
  },
  card: {
    width: 300,
    height: 70,
    padding: 5,
    margin: 5,
    shadowRadius: 15,
    borderRadius: 5,
    elevation: 1,
    backgroundColor: '#ffffff'
  },
  macros: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold'
  },
  withoutBold: {
    fontWeight: '600'
  }
});
