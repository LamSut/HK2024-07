import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to React Native with TypeScript!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default App;