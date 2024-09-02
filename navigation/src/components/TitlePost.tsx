import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TitleNewPost() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Título</Text>
      <TextInput style ={styles.Input} placeholder="Insira o título aqui..."/>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 12,
    paddingHorizontal: 8,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 4

  },
  Input: {
      height: 60,
      borderWidth: 1,
      backgroundColor: '#ffffff',
      borderColor: '#D9D9D9',
      borderRadius: 8,
      paddingHorizontal: 8
  },
})
