import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from "../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList>
type Props = {
  navigation: HomeScreenNavigationProp
}

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Gustavo Godoi',
  userSlug: '@Gustavogodoi'
}

export default function Feed({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Feed</Text>
        <Button title="Ir para Perfil" onPress={() => navigation.navigate("Profile", { userId: '772' })} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})