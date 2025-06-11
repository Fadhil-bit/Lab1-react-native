import { useState } from 'react';
import Increment from '../../components/increment';
import Decrement from '../../components/decrement';
import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function Lab3() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCount = (): void => {
    setCounter((prevCount: number) => prevCount + 1);
  };

  const decrementCount = (): void => {
    setCounter((prevCount: number) => prevCount - 1);
  };

  return (
    <View>
      <Increment count={counter} onIncrement={incrementCount} />
      <Decrement count={counter} onDecrement={decrementCount} />
      <Text style={{ margin: 10, alignContent: 'center' }}>Counter: {counter}</Text>
    

    <View style={styles.buttonContainer}>
        <Button title="Go back Home" onPress={() => router.push("/")} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200 },
  buttonContainer: { marginTop: 20 },
});