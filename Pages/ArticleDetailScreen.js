import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ArticleDetailScreen({route}) {
    const {article} = route.params;
  return (
    <ScrollView style={styles.container}>
        <Image source={{uri: article.urlToImage}} style={styles.articleImage}/>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text style={styles.articleContent}>{article.content}</Text>
        <Text style={styles.articleAuthor}>Author: {article.author}</Text>
        <Text style={styles.articleDate}>Published: {article.publishedAt}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#C0C0C0',
      },
      articleImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
      },
      articleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      articleContent: {
        fontSize: 16,
        marginBottom: 10,
      },
      articleAuthor: {
        fontSize: 14,
        marginBottom: 5,
      },
      articleDate: {
        fontSize: 14,
        color: 'gray',
      },
})