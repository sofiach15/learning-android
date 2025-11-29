import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function Home({ onLogout }: { onLogout: () => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Menu</Text>

            <TouchableOpacity style={styles.menuButton} onPress={() => Alert.alert('Navigation', 'Navigating to Profile...')}>
                <Text style={styles.menuButtonText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={() => Alert.alert('Navigation', 'Navigating to Settings...')}>
                <Text style={styles.menuButtonText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={() => Alert.alert('Navigation', 'Navigating to Products...')}>
                <Text style={styles.menuButtonText}>Products</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#140606ff',
    },
    menuButton: {
        width: '100%',
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
        width: '100%',
        backgroundColor: "#e61414ff",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 30, // More space before logout
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});