import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { ingredients } from "../data/ingrediants";
import { useThemeContext } from "../contexts/ThemeContext";

const SearchBar = ({ searchQuery, setSearchQuery, setFilteredData, filteredData }) => {
  const { paperTheme } = useThemeContext();
  // this flattens the data so it make it easier to search
  const flattenData = (data) => {
    let result = [];
    Object.entries(data).forEach(([categoryKey, category]) => {
      Object.entries(category).forEach(([subKey, subCategory]) => {
        if (subKey !== "name" && subKey !== "image" && subCategory.items) {
          subCategory.items.forEach((item) => {
            result.push({
              id: item.id,
              category: category.name,
              subcategory: subCategory.name,
              name: item.name,
              image: item.image,
              slug: item.slug,
            });
          });
        }
      });
    });
    return result;
  };

  const allItems = flattenData(ingredients);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredData([]);
      return;
    }

    const filtered = allItems?.filter((item) =>
      item.name.toLowerCase().startsWith(query.toLowerCase())
    );

    setFilteredData(filtered);
  };
  return (
    <Searchbar
      placeholder="Search for Ingredient"
      onChangeText={handleSearch}
      value={searchQuery}
      theme={{
        colors: {
          text: "#000",
          primary: "#000",
          onSurfaceVariant: "#000",
        },
      }}
      clearIcon={
        searchQuery ? () => <MaterialIcons name="clear" size={24} color="black" /> : null
      }
      elevation={5}
      style={{
        borderRadius: 10,
        backgroundColor: paperTheme.colors.secondary,
        height: 50,
        boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.4)",
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
