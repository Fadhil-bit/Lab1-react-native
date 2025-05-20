import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  // Alert handler
  const handlePress = () => {
    Alert.alert("Lab 1 done");
  };

  // Single user's info in an array
  const userInfo = [
    { id: 1, label: "Name", value: "Fadhil Ndam" },
    { id: 2, label: "GitHub Username", value: "Fadhil-bit" },
    { id: 3, label: "Group No", value: "6" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Information</Text>

      {/* Map and display user details */}
      {userInfo.map((item) => (
        <Text key={item.id} style={styles.itemText}>
          {item.label}: {item.value}
        </Text>
      ))}

      {/* Pressable alert */}
      <Pressable onPress={handlePress}>
        <Text style={styles.pressText}>Tap here when you're done</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 18,
    color: 'green',
    marginVertical: 5,
  },
  pressText: {
    marginTop: 30,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});