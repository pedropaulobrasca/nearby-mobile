import { Image, View, Text } from "react-native"

import { s } from "./styles"
import { colors } from "@/src/styles/theme"

export function Welcome() {
  return (
    <View>
      <Image source={require("@/src/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Boas vindas ao Nearby!</Text>
      <Text style={s.subtitle}>Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.</Text>

    </View>
  )
}