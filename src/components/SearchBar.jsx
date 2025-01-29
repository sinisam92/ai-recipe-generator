import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      placeholder="Search for Ingredient"
      onChangeText={setSearchQuery}
      value={searchQuery}
      theme={{ colors: { text: "#000" } }} // attempt to change text color inside search bar (failed - revisit)
      clearIcon={
        searchQuery ? () => <MaterialIcons name="clear" size={24} color="black" /> : null
      }
      elevation={5}
      style={{
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        marginHorizontal: 10,
        marginTop: 10,
      }}
      placeholderTextColor={"#000"}
      iconColor="#000"
      cursorColor={"#000"}
      selectionColor={"#000"}
      rippleColor={"#000"}
    />
  );
};

export default SearchBar;
