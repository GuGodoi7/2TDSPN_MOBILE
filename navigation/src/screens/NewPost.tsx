import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RootStackParamsList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import User from "../components/User";
import TitleNewPost from "../components/TitlePost";
import ImagePost from "../components/ImagePost";
import ButtonContainer from "../components/ContainerButtonNewPost";


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList>
type ProfileScreenRouteProp = RouteProp<RootStackParamsList>

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}


const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Gustavo Godoi',
  userSlug: '@Gustavogodoi'
}



export default function NewPost({ route  }: Props) {

  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <User userId='772' username='Gustavo Godoi' source={userProps.source} userSlug={userProps.userSlug} />
        <TitleNewPost />
        <ImagePost />
        <ButtonContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

