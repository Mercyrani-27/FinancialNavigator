import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: '1', description: 'Transfer to Firmansyah A.', amount: '- $20', time: '04:03 PM' },
    { id: '2', description: 'Receive from Adam S.', amount: '+ $1,300', time: '02:15 PM' },
    { id: '3', description: 'Transfer to John Doe', amount: '- $20', time: '04:00 PM' },
  ]);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDescription}>
        <Text style={styles.transactionText}>{item.description}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.transactionText}>{item.amount}</Text>
      </View>
      <View style={styles.transactionTime}>
        <Text style={styles.transactionText}>{item.time}</Text>
      </View>
    </View>
  );

  const addTransaction = () => {
    const newTransaction = {
      id: (transactions.length + 1).toString(),
      description,
      amount,
      time: new Date().toLocaleTimeString(),
    };
    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Icon name="person-circle-outline" size={32} color="#fff" />
          <Text style={styles.profileText}>Sarah Muller</Text>
        </View>
        <Icon name="notifications-outline" size={24} color="#fff" />
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Account</Text>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>$40,500.80</Text>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>US Dollar</Text>
            <Icon name="chevron-down-outline" size={18} color="#fff" />
          </View>
          <Text style={styles.cardBalanceText}>$40,500.80</Text>
          <Text style={styles.cardInfoText}>Account number: ****9934</Text>
          <Text style={styles.cardInfoText}>Valid Thru: 05/28</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>VISA</Text>
            <Icon name="chevron-down-outline" size={18} color="#fff" />
          </View>
          <Text style={styles.cardBalanceText}>Rp4</Text>
          <Text style={styles.cardInfoText}>Account number: ****7732</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
          <Icon name="arrow-up-circle-outline" size={24} color="#fff" />
          <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-down-circle-outline" size={24} color="#fff" />
          <Text style={styles.actionText}>Request</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.transactionList}
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Description"
              placeholderTextColor={'#000'}
              style={styles.input}
              onChangeText={setDescription}
              style={{color:'#000'}}
            />
            <TextInput
              placeholder="Amount"
              placeholderTextColor={'#000'}
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setAmount}
              style={{color:'#000'}}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={addTransaction}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2196F3', 
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    marginLeft: 8,
  },
  accountContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  accountText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceContainer: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  balanceText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff', 
    padding: 16,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardHeaderText: {
    fontSize: 18,
    color: '#2196F3', 
  },
  cardBalanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3', 
    marginBottom: 8,
  },
  cardInfoText: {
    color: '#2196F3',
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
  actionButton: {
    backgroundColor: '#2196F3', 
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  actionText: {
    color: '#fff',
    marginLeft: 8,
  },
  transactionContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transactionList: {
  },
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDescription: {
    flex: 1,
  },
  transactionAmount: {
  },
  transactionTime: {
  },
  transactionText: {
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    padding: 8,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#2196F3', 
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;