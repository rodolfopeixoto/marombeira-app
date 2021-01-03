import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const CardPlan: React.FC = ({id, title, done}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
     style={[styles.container, styles.cardView]}
      onPress={
        () => navigation.navigate('Train',
          {
            params: {
              id: id
            }
          }
        )
      }
    style={styles.container}>
      <Text>{title}</Text>
      <Text>Concluído: {done.toString()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardView:{
    backgroundColor: '#FFF',
    marginBottom: 10,
    margin: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    }
  },

  bold: {
    fontWeight: 'bold'
  },
  withoutBold: {
    fontWeight: '600'
  }
});
