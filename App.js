
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './Pages/CategoriesScreen';
import ArticleListScreen from './Pages/ArticleListScreen';
import ArticleDetailScreen from './Pages/ArticleDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen name='News topics' component={CategoriesScreen}/>
        <Stack.Screen name='World News' component={ArticleListScreen}/>
        <Stack.Screen name='News' component={ArticleDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
