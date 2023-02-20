import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profiller = ({ navigation }) => {
    return (
        <View>
            <Text
            style={styles.text}
        >
            Şu anda buradasınız
        </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 20,
        textAlign:"center"
    }
})

export default Profiller