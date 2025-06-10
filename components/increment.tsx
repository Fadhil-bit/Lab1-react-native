import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';


interface IncrementProps {
  count: number;
  onIncrement: () => void;
}

export default function Increment({ count, onIncrement }: IncrementProps) {
  return (
    <View style={{ margin: 10 }}>
    <Pressable onPress={onIncrement} >
     <Text style={styles.buttonText}> + Increment</Text>
    </Pressable></View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f44336', // red
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});