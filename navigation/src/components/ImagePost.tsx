import { View,Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function ImagePost() {
    return (
      <View style={styles.Container}>
        <Text style={styles.imageTitle}>Imagem</Text>
        <View style={styles.addFoto}>
            <MaterialIcons name='add' size={40} color={'#484646'}/>
            <Text>Adicionar imagem</Text>
        </View>
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
    addFoto:{
      marginTop: 12,
      paddingHorizontal: 8,
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      padding: 20,
      borderRadius: 8
    },

  })

