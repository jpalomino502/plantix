import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Selecciona tu planta",
    content: [
      "🌱 Escoge entre nuestras opciones como frijol, lechuga o tomate.",
      "👉 Encuentra la que mejor se adapte a tu espacio y clima.",
    ],
  },
  {
    title: "Agrega tu cultivo",
    content: [
      "📄 Registra tu planta en la app.",
      "📅 Te mostraremos el tiempo estimado de crecimiento y los cuidados básicos que necesita.",
    ],
  },
  {
    title: "Recibe notificaciones",
    content: [
      "🔔 Te avisamos exactamente cuándo regar y cuánto agua darle según la etapa de crecimiento.",
      "💡 También te recordamos cuándo estará lista para cosechar.",
    ],
  },
  {
    title: "Disfruta tu cosecha",
    content: [
      "🌿 Lleva un registro de todo lo que cultivas.",
      "💧 Observa cuánto ahorras en agua y espacio mientras produces tus propios alimentos.",
    ],
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/"); // Redirige a la pantalla principal o dashboard
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Saltar</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                currentIndex === index && styles.progressDotActive,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        {slides[currentIndex].content.map((item, i) => (
          <Text key={i} style={styles.text}>
            {item}
          </Text>
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
        <Text style={styles.continueText}>
          {currentIndex === slides.length - 1 ? "Comenzar" : "Continuar"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  skipText: {
    fontWeight: "600",
    color: "#000",
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: "row",
    gap: 6,
  },
  progressDot: {
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e0e0e0",
  },
  progressDotActive: {
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginBottom: 12,
    lineHeight: 24,
  },
  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
