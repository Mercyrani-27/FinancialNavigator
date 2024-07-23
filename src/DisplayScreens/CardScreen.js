import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const CardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          
          style={styles.userImage}
        />
        <Text style={styles.userName}>Welcome back, Sarah Muller</Text>
        <Icon name="notifications-outline" size={24} style={{marginLeft:50}}color="#000" />
      </View>
      <Text style={styles.myCardTitle}>My Card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>))</Text>
          </View>
          <View style={styles.cardNumbers}>
            <Text style={styles.cardNumber}>1253 5432 3521 3090</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.cardName}> Sarah Muller</Text>
            <Text style={styles.cardExp}> Exp 09/24</Text>
            <View style={styles.cardLogo}>
            <Text style={styles.cardLogoText}>VISA </Text>
          </View>
          </View>
         
        </View>
        <View style={styles.card1}>
          <View style={styles.cardHeader1}>
            <Text style={styles.cardIcon1}>))</Text>
          </View>
          <View style={styles.cardNumbers}>
            <Text style={styles.cardNumber1}>1253 5432 3521 3090</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.cardName}> Sarah Muller</Text>
            <Text style={styles.cardExp}> Exp 09/24</Text>
            <View style={styles.cardLogo}>
            <Text style={styles.cardLogoText}>VISA </Text>
          </View>
          </View>
         
        </View>
      </View>
      <TouchableOpacity style={styles.addCardButton}>
        <Text style={styles.addCardButtonText}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  notificationIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    borderRadius: 12,
    marginLeft: 'auto',
  },
  myCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000'
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#C8E9CA',
    
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  card1: {
    backgroundColor: '#000',
    marginTop:40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color:'#000',
    backgroundColor:'#C8E9CA'
  },
  cardHeader1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color:'#000',
    backgroundColor:'#000'
  },
  cardIcon: {
    fontSize: 24,
    color: '#000',
    marginLeft: 10,
    
  },
  cardIcon1: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 10,
    
  },
  cardNumbers: {
    marginBottom: 10,
    color:'#000',
    marginLeft: 10,
  },
  cardNumbers1: {
    marginBottom: 10,
    color:'#fff',
    marginLeft: 10,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000',
    marginLeft: 10,
  },
  cardNumber1: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
    marginLeft: 10,
  },
  cardDetails: {
    marginBottom: 10,
     backgroundColor:'#FFF',
    
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000',
    
  },
  cardExp: {
    fontSize: 14,
    color:'#000'
  },
  cardLogo: {
    alignItems: 'flex-end',
  },
  cardLogoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000'
  },
  addCardButton: {
    backgroundColor: '#87DCFB',
    padding: 15,
    borderRadius: 10,

  },
  addCardButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CardScreen;
