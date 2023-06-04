import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { useState, useEffect } from 'react';
import CustomSearchBar from '../components/CustomSearchBar';

const RecipeListScreen = () => {

  const [meals, setMeals] = useState([]);
  const  [searchQuery, setSearchQuery] = useState('');
  const url ="https://www.themealdb.com/api/json/v1/1/categories.php";
 
  const getMeals = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const filteredMeals = data.categories.filter(meal =>
      meal.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMeals(filteredMeals);
  };

  useEffect(() => {
    getMeals();
  }, [searchQuery]);  
 
   const onChangeSearch = query =>setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Text style={styles.main__title}>Recipe List</Text>
      <CustomSearchBar 
            placeholder='Search recipe'
            value={searchQuery}
            onChangeText={onChangeSearch}
            style={styles.searchbar}
      />
      <ScrollView>
        {
          meals.map(meal=>(
            <Card style={styles.recipe} key={meal.idCategory}>
              <Card.Cover source={meal.strCategoryThumb} />
              <Card.Title title={meal.strCategory} titleStyle={styles.recipe__title}/>
              <Card.Content >
                <Paragraph style={styles.recipe__descr}>{meal.strCategoryDescription} </Paragraph>
              </Card.Content>
            </Card>
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main__title: {
    alignSelf: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    paddingTop: 20,
  },
  searchbar: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',

  },
  recipe:{
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  recipe__title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  recipe__descr: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
})

export default RecipeListScreen;
