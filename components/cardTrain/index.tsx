import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CardTrain: React.FC = ({
  id,
  title,
  series,
  advanceTechnique,
  videoTitle,
  videoAdvanceTechnique,
}) => {


  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {
          title.map( (t, index) => {

  console.log(`Teste1: ${videoTitle[index]}`)
           return <View key={index}>
              <TouchableOpacity
                onPress={
                  () => navigation.navigate('Video', {
                      video: videoTitle[index]
                  })
                }
                >
                  <Text>{t}</Text>
              </TouchableOpacity>
             </View>;
          })
        }
      </View>
      <View>
         <Text>Série: {series}</Text>
         <TouchableOpacity
           onPress={
             () => navigation.navigate('Video', {
                 video: videoAdvanceTechnique
             })
           }
           >
            <Text>Técnica Avançada: {advanceTechnique}</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
