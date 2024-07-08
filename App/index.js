// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';

const drills = [
    { id: '1', title: 'Warm-up', description: '10 minutes of light jogging and stretching.' },
    { id: '2', title: 'Passing Drill', description: 'Practice passing with partners, moving while passing.' },
    { id: '3', title: 'Shooting Drill', description: 'Practice shooting on goal from different angles.' },
    { id: '4', title: 'Defense Drill', description: 'Work on defensive positioning and footwork.' },
    { id: '5', title: 'Cool Down', description: '5 minutes of stretching and relaxation exercises.' },
];

const TrainingList = () => {
    const renderItem = ({ item }) => (
        <View style={styles.drillContainer}>
            <Text style={styles.drillTitle}>{item.title}</Text>
            <Text style={styles.drillDescription}>{item.description}</Text>
        </View>
    );

    return (
        <FlatList
            data={drills}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Handball Training Drills</Text>
            <TrainingList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        paddingBottom: 20,
    },
    drillContainer: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    drillTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    drillDescription: {
        fontSize: 14,
        marginTop: 5,
    },
});