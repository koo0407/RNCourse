import { View, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(""); //입력값 저장

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); //입력값을 State에 저장하는 핸들러
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="your course goal!"
        onChangeText={goalInputHandler} //텍스트가 변경되면 핸들러 호출, para 전달
        value={enteredGoalText}
      />
      <Button title="Add Goal!" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },
});
