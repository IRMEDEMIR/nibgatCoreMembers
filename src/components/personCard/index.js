import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PersonCard = ({
    profilePhotoURL,
    fullName,
    onPress,
    age
  }) => {
    return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 10,
        marginBottom: 20,
        display: "flex",
        padding: 20
      }}
    >
      {
        profilePhotoURL ? <Image
          source={{
            uri: profilePhotoURL
          }}
          width= {75}
          height= {75}
          alt="Sanane ayol"
          style={{
            borderRadius: 38,
            marginRight: 20
          }}
        /> : null
      }
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            display: "flex"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 4,
              fontSize: 20
            }}
          >
            {fullName}
          </Text>
        </View>
        <Text
          style={{
            color: "orange",
            fontSize: 18
          }}
        >
          {age}
        </Text>
      </View>
    </TouchableOpacity>
    );
  };

  export default PersonCard