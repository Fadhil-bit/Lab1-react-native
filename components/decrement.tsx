import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';


interface DecrementProps {
  count: number;
  onDecrement: () => void;
}

export default function Decrement({ count, onDecrement }: DecrementProps) {
  return (
    <View style={{ margin: 10 }}>
    <Pressable onPress={onDecrement}>
     <Text style={styles.buttonText}> - Decrement</Text>
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