import { Stack } from "expo-router"
import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik"

import { colors } from "@/src/styles/theme"
import { Loading } from "@/src/components/loading"

export default function Layout() {
  const [ isLoadedFonts ] = useFonts({
    Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold
  })

  if (!isLoadedFonts) return <Loading />

  return <Stack screenOptions={{
    headerShown: false,
    contentStyle: { backgroundColor: colors.gray[100] },
  }} />
}