import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import Toast from "react-native-toast-message";

const Dialysis = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Group, setGroup] = useState("");
  const [Age, setAge] = useState("");
  const [PulmonaryDisease, setPulmonaryDisease] = useState("");
  const [Diabetes, setDiabetes] = useState("");
  const [ImmunosuppressiveTherapy, setImmunosuppressiveTherapy] = useState("");
  const [Gender, setGender] = useState("");
  const [CVD, setCVD] = useState("");
  const [SerumCreatinine, setSerumCreatinine] = useState("");
  const [UreaNitrogen, setUreaNitrogen] = useState("");
  const [eGFR, seteGFR] = useState("");
  const [WhiteBloodCells, setWhiteBloodCells] = useState("");
  const [Hemoglobin, setHemoglobin] = useState("");
  const [Platelet, setPlatelet] = useState("");
  const [SerumAlbumin, setSerumAlbumin] = useState("");
  const [SerumGlobulin, setSerumGlobulin] = useState("");
  const [ESR, setESR] = useState("");
  const [CRP, setCRP] = useState("");

  const onChangeGrouphandler = (Group) => {
    setGroup(Group);
  };
  const onChangeAgeGhandler = (Age) => {
    setAge(Age);
  };
  const onChangePulmonaryDiseasehandler = (PulmonaryDisease) => {
    setPulmonaryDisease(PulmonaryDisease);
  };
  const onChangeDiabeteshandler = (Diabetes) => {
    setDiabetes(Diabetes);
  };
  const onChangeImmunosuppressiveTherapyhandler = (
    ImmunosuppressiveTherapy
  ) => {
    setImmunosuppressiveTherapy(ImmunosuppressiveTherapy);
  };

  const onChangeGenderhandler = (Gender) => {
    setGender(Gender);
  };
  const onChangeCVDhandler = (CVD) => {
    setCVD(CVD);
  };
  const onChangeSerumCreatininehandler = (SerumCreatinine) => {
    setSerumCreatinine(SerumCreatinine);
  };
  const onChangeGFRhandler = (eGFR) => {
    seteGFR(eGFR);
  };
  const onChangeWhiteBloodCellshandler = (WhiteBloodCells) => {
    setWhiteBloodCells(WhiteBloodCells);
  };
  const onChangeHemoglobinhandler = (Hemoglobin) => {
    setHemoglobin(Hemoglobin);
  };
  const onChangePlatelethandler = (Platelet) => {
    setPlatelet(Platelet);
  };
  const onChangeSerumAlbuminhandler = (SerumAlbumin) => {
    setSerumAlbumin(SerumAlbumin);
  };
  const onChangeSerumGlobulinhandler = (SerumGlobulin) => {
    setSerumGlobulin(SerumGlobulin);
  };
  const onChangeESRhandler = (ESR) => {
    setESR(ESR);
  };
  const onChangeCRPhandler = (CRP) => {
    setCRP(CRP);
  };

  const onSubmitFormHandler = async () => {
    const data = {
      Group,
      PulmonaryDisease,
      Age,
      Diabetes,
      ImmunosuppressiveTherapy,
      CVD,
      Gender,
      SerumCreatinine,
      UreaNitrogen,
      eGFR,
      WhiteBloodCells,
      Hemoglobin,
      Platelet,
      SerumAlbumin,
      SerumGlobulin,
      ESR,
      CRP,
    };
    setIsLoading(true);
    try {
      await // Replace http://127.0.0.1:8000/predict with your api online
      axios
        .post(`http://127.0.0.1:8000/predict`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("response status:", res.status); // Statut HTTP
          console.log("response data:", res.data.predictions[0]);
          if (res.status == 200) {
            setPulmonaryDisease("");
            setGroup("");
            setAge("");
            setSerumCreatinine("");
            setCVD("");
            setGender("");
            setUreaNitrogen("");
            setDiabetes("");
            seteGFR("");
            setImmunosuppressiveTherapy("");
            setWhiteBloodCells("");
            setHemoglobin("");
            setPlatelet("");
            setSerumAlbumin("");
            setSerumGlobulin("");
            setESR("");
            setCRP("");

            navigation.navigate("Result", res.data.predictions[0]);
            setIsLoading(false);
          }
        });
    } catch (error) {
      if (error.request.status == 422) {
        Toast.show({
          type: "error",
          text1: "An valodation error occurred",
          text2: "Error",
          autoHide: true,
          visibilityTime: 5000,
          position: "top",
          bottomOffset: 50,
          topOffset: 100,
          // backgroundColor:'#66a5f5'
        });
      }
      console.log("error", error.request.status);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          name="Group"
          placeholder="Plasma Glucose (Group)"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          keyboardType="numeric"
          value={Group}
          onChangeText={onChangeGrouphandler}
        />
        <TextInput
          style={styles.input}
          name="Age"
          placeholder="Blood Work Result-1 (mu U/ml)"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          keyboardType="numeric"
          value={Age}
          onChangeText={onChangeAgehandler}
        />

        <View style={styles.input}>
          <Picker
            selectedValue={PulmonaryDisease}
            onValueChange={(itemValue) => setPulmonaryDisease(itemValue)}
            // onValueChange={handleSubjectChange}
            mode="dropdown"
            style={styles.dropdown}
          >
            <Picker.Item label="PulmonaryDisease" style={styles.pocker} />
            <Picker.Item label="PulmonaryDisease" value="1" />
            <Picker.Item label="No PulmonaryDisease" value="0" />
          </Picker>
        </View>
        <View style={styles.input}>
          <Picker
            selectedValue={Diabetes}
            onValueChange={(itemValue) => setDiabetes(itemValue)}
            // onValueChange={handleSubjectChange}
            mode="dropdown"
            style={styles.dropdown}
          >
            <Picker.Item label="Diabetes" style={styles.pocker} />
            <Picker.Item label="Diabetes" value="1" />
            <Picker.Item label="No Diabetes" value="0" />
          </Picker>
        </View>

        <View style={styles.input}>
          <Picker
            selectedValue={ImmunosuppressiveTherapy}
            onValueChange={(itemValue) =>
              setImmunosuppressiveTherapy(itemValue)
            }
            // onValueChange={handleSubjectChange}
            mode="dropdown"
            style={styles.dropdown}
          >
            <Picker.Item
              label="ImmunosuppressiveTherapy"
              style={styles.pocker}
            />
            <Picker.Item label="ImmunosuppressiveTherapy" value="1" />
            <Picker.Item label="No ImmunosuppressiveTherapy" value="0" />
          </Picker>
        </View>
        <View style={styles.input}>
          <Picker
            selectedValue={Gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            // onValueChange={handleSubjectChange}
            mode="dropdown"
            style={styles.dropdown}
          >
            <Picker.Item label="Gender" style={styles.pocker} />
            <Picker.Item label="Male" value="1" />
            <Picker.Item label="Female" value="2" />
          </Picker>
        </View>
        <View style={styles.input}>
          <Picker
            selectedValue={CVD}
            onValueChange={(itemValue) => setCVD(itemValue)}
            // onValueChange={handleSubjectChange}
            mode="dropdown"
            style={styles.dropdown}
          >
            <Picker.Item label="CVD" style={styles.pocker} />
            <Picker.Item label="CVD" value="1" />
            <Picker.Item label="No CVD" value="0" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          name="SerumCreatinine"
          placeholder="Patient's Age (years)"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={SerumCreatinine}
          keyboardType="numeric"
          onChangeText={onChangeSerumCreatininehandler}
        />
        <TextInput
          style={styles.input}
          name="eGFR"
          placeholder="Patient's  eGFR"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={eGFR}
          keyboardType="numeric"
          onChangeText={onChangeeGFRhandler}
        />
        <TextInput
          style={styles.input}
          name="UreaNitrogen"
          placeholder="Patient's  UreaNitrogen"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={UreaNitrogen}
          keyboardType="numeric"
          onChangeText={onChangeUreaNitrogenhandler}
        />
        <TextInput
          style={styles.input}
          name="WhiteBloodCells"
          placeholder="Patient's  White Blood Cells"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={WhiteBloodCells}
          keyboardType="numeric"
          onChangeText={onChangeWhiteBloodCellshandler}
        />
        <TextInput
          style={styles.input}
          name="Hemoglobin"
          placeholder="Patient's  Hemoglobin"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={Hemoglobin}
          keyboardType="numeric"
          onChangeText={onChangeHemoglobinhandler}
        />
        <TextInput
          style={styles.input}
          name="Platelet"
          placeholder="Patient's  Platelet"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={Platelet}
          keyboardType="numeric"
          onChangeText={onChangePlatelethandler}
        />
        <TextInput
          style={styles.input}
          name="SerumAlbumin"
          placeholder="Patient's  SerumAlbumin"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={SerumAlbumin}
          keyboardType="numeric"
          onChangeText={onChangeSerumAlbuminhandler}
        />
        <TextInput
          style={styles.input}
          name="SerumGlobulin"
          placeholder="Patient's  SerumGlobulin"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={SerumGlobulin}
          keyboardType="numeric"
          onChangeText={onChangeSerumGlobulinhandler}
        />
        <TextInput
          style={styles.input}
          name="ESR"
          placeholder="Patient's  ESR"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={ESR}
          keyboardType="numeric"
          onChangeText={onChangeESRinhandler}
        />
        <TextInput
          style={styles.input}
          name="CRP"
          placeholder="Patient's  CRP"
          selectionColor="#a9a9a9"
          autoCapitalize="none"
          // textDecorationLine="underline"
          underlineColorAndroid="transparent"
          color="black"
          value={CRP}
          keyboardType="numeric"
          onChangeText={onChangeCRPinhandler}
        />
        <View></View>
        <Pressable
          onPress={onSubmitFormHandler}
          style={() => [
            {
              backgroundColor: isLoading ? "#a9a9a9" : "#043c85",
            },
            styles.buttonConnexion,
          ]}
        >
          {() => (
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                "Predict Now"
              )}
            </Text>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor:'#8fba82'
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    // padding: 20,
    marginTop: 50,
    width: "90%",
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginBottom: 10,
  },
  scroll: {
    width: width,
  },
  text: {
    marginVertical: height * 0.05,
    width: width * 0.8,
    fontSize: 12,
  },
  text_deco: {
    color: "red",
    textDecorationLine: "underline",
  },
  input: {
    marginTop: height * 0.035,
    width: width * 0.8,
    height: 50,
    padding: 10,
    fontSize: 13,
    borderRadius: 5,
    borderWidth: 0.5,
    justifyContent: "center",
    borderColor: "black",
    color: "gray",
  },
  inputimg: {
    marginTop: height * 0.015,
    width: width * 0.8,
    height: 50,
    padding: 10,
    fontSize: 10,
    // borderRadius: 1,
    // borderWidth: 0.5,
    justifyContent: "center",
  },
  inputjt: {
    marginTop: height * 0.035,
    width: width * 0.8,
    height: 50,
    padding: 5,
    fontSize: 16,
    borderRadius: 1,
    borderWidth: 0.1,
    justifyContent: "center",
  },
  textArea: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
    width: width * 0.8,
    marginTop: height * 0.015,
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    right: "3%",
    elevation: 7,
    top: "30%",
    color: "gray",
  },
  buttonConnexion: {
    marginTop: height * 0.05,
    width: width * 0.8,
    height: 50,
    fontSize: 16,
    borderRadius: 5,
    justifyContent: "center",
  },
  terme_button: {
    width: width * 0.8,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
  dropdown: {},
  pocker: {
    color: "gray",
  },
  error: {
    justifyContent: "center",
    textAlign: "center",
    color: "red",
    fontSize: 12,
  },
  success: {
    color: "green",
    fontSize: 12,
  },
});

export default Dialysis;
