import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const [cardAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const cardStyle = {
    transform: [
      {
        translateY: cardAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
      {
        scale: cardAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
    ],
    opacity: cardAnimation.interpolate({
      inputRange: [0, 0.5, 5],
      outputRange: [0, 0.5, 5],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ProfitPilot</Text>
      
      </View>

      <Animated.View style={[styles.card, cardStyle]}>
        <View style={styles.cardContent}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Your balance</Text>
           
          </View>
          <View style={styles.balanceContainer}>
        
            <Text style={styles.balanceValue}>$40,500.80</Text>
          </View>
          <View style={styles.accountContainer}>
            <Text style={styles.accountLabel}>Account number</Text>
            <Text style={styles.accountValue}>****9934</Text>
          </View>
          <View style={styles.requestContainer}>
            <Text style={styles.requestLabel}>Request</Text>
            <Text style={styles.requestValue}>05/28</Text>
          </View>
        </View>
      </Animated.View>

      <View style={styles.navigatorContainer}>
        <Text style={styles.navigatorTitle}>Your </Text>
        <Text style={styles.navigatorTitle1}>Financial </Text>
        <Text style={styles.navigatorTitle2}> Navigator</Text>
        <Text style={styles.navigatorSubtitle}>
          Invest in projects that make a difference. Join us in supporting impactful
          initiatives and create a positive change in the world.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    
    marginBottom: 10,
    color: 'black',
  },
  card: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5.65,
    shadowRadius: 3.84,
    elevation: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
  },
  balanceValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#666',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  accountLabel: {
    fontSize: 14,
    color: '#666',
  },
  accountValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  requestLabel: {
    fontSize: 14,
    color: '#666',
  },
  requestValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  navigatorContainer: {
    marginBottom: 20,
  },
  navigatorTitle: {
    fontSize: 50,
    marginBottom: 1,
    color: '#666',
  },
  navigatorTitle1: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#000',
  },
  navigatorTitle2: {
    fontSize: 50,
    marginBottom: 10,
    color: '#666',
  },
  navigatorSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OnboardingScreen;