import { Image, View, Text } from "react-native"

import { s } from "./styles"
import { colors } from "@/src/styles/theme"
import { Step } from "../step"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

const stepsData = [
  {
    id: 1,
    title: "Encontre estabelecimentos",
    description: "Veja locais perto de você que são parceiros Nearby",
    icon: IconMapPin
  },
  {
    id: 2,
    title: "Ative o cupom com QR Code",
    description: "Escaneie o código no estabelecimento para usar o benefício",
    icon: IconQrcode
  },
  {
    id: 3,
    title: "Garanta vantagens perto de você",
    description: "Ative cupons onde estiver, em diferentes tipos de estabelecimento",
    icon: IconTicket
  }
]

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      {stepsData.map(step => <Step key={step.id} icon={step.icon} title={step.title} description={step.description} />)}
    </View>
  )
}