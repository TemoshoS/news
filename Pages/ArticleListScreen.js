import { FlatList, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ArticleListScreen = ({route, navigation}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{

        fetchArticles();

    },[]);


    const fetchArticles = async ()=>{
        try {
            const apiKey = '179e1503335240e5b1c317012ac7a5aa';
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?category=${route.params.category}&apiKey=${apiKey}`

            );
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
            
        } 
    }

  return (
    <View style={styles.container}>
         <Text style={styles.categoryTitle}>{route.params.category} News</Text>
        <FlatList
        data={articles}
        keyExtractor={(item)=>item.title}
        renderItem={({item})=>(
            <TouchableOpacity
              style={styles.articleContainer}
              onPress={()=>navigation.navigate('News', {article: item})}
              >
             <Image source={{uri: item.urlToImage}} style={styles.articleImage}/>
             <Text style={styles.articleTitle}>{item.title}</Text>

            </TouchableOpacity>
        )}
        />
      
    </View>
  )
}

export default ArticleListScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    articleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    articleImage:{
        width: 80,
        height: 80,
        marginRight: 10
    },
    articleTitle:{
        fontSize: 16,
    }
})