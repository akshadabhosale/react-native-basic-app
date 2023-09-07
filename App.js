import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

export default App = () => {
  const [notesArray, SetNotesArray] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  addNotesToList = () => {
    SetNotesArray([...notesArray, enteredText]);
    setEnteredText("");
  };

  setText = (enteredText) => {
    setEnteredText(enteredText);
  };

  deleteNote = (index) => {
    let tempArray = [...notesArray];
    tempArray.splice(index, 1);

    SetNotesArray(tempArray);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Notes App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your note here"
            style={styles.inputbox}
            onChangeText={setText}
            value={enteredText}
          />
          <Button
            title="Add Note"
            style={{ flex: 1, height: "auto" }}
            onPress={addNotesToList}
          />
        </View>
      </View>
      <View style={styles.notesListContainer}>
        <ScrollView>
          {notesArray.map((item, index) => (
            <View style={styles.notesCardDiv} key={index}>
              <View style={styles.notesStyles}>
                <Text
                  style={{
                    color: "white",
                    marginLeft: 10,
                    alignItems: "center",
                    paddingTop: 10,
                  }}
                >
                  {item}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteNote(index)}>
                <Image
                  source={require("./assets/Icon.png")}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginTop: 50,
  },

  notesListContainer: {
    flex: 2,
    marginTop: 20,
  },
  heading: {
    color: "blue",
    fontSize: 23,
    fontWeight: "700",
    paddingBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  inputbox: {
    flex: 3,
    borderColor: "#444791",
    borderWidth: 1,
    paddingLeft: 10,
    height: 45,
  },
  notesStyles: {
    backgroundColor: "#444791",
    paddingBottom: 10,
    borderRadius: 8,
    color: "white",
    height: 40,
    marginBottom: 10,
    flex: 2,
  },
  notesCardDiv: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    borderColor: "#61616",
    backgroundColor: "#61616",
    alignItems: "center",
  },
  deleteIcon: {
    height: 20,
    width: 20,
    paddingBottom: 20,
    alignSelf: "center",
  },
});
