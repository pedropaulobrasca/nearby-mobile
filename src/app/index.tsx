import { View, Text } from "react-native"

import { Welcome } from "@/src/components/welcome"
import { Steps } from "@/src/components/steps"

export default function Index() {
  return (
    <View style={{
      flex: 1,
      padding: 40,
      gap: 40
    }}>
      <Welcome />
      <Steps />
    </View>
  )
}