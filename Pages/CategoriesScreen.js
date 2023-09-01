import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoriesScreen({navigation}) {
    const categories = ['Business', 'Technology','Sports'];
  return (
    <View style={styles.container}>
        {
            categories.map(category => (
                <TouchableOpacity 
                key={category}
                style={styles.categoryButton}
                onPress={()=>navigation.navigate('World News', {category})}>
                    <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
            ))
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
    },
    categoryButton:{
        marginBottom: 20,

    },
    categoryText:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'left'
    }
})