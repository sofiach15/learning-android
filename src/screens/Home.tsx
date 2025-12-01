import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface HomeProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export default function Home({ onNavigate, onLogout }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => onNavigate("Profile")}
      >
        <Text style={styles.menuButtonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => onNavigate("Settings")}
      >
        <Text style={styles.menuButtonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => onNavigate("Products")}
      >
        <Text style={styles.menuButtonText}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#140606ff",
  },
  menuButton: {
    width: "100%",
    backgroundColor: "#bee8deff",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  menuButtonText: {
    color: "#140606ff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#e61414ff",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
