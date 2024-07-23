// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, PermissionsAndroid, Platform, Button } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

// const QRScannerScreen = () => {
//   const [scannedData, setScannedData] = useState(null);

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       requestCameraPermission();
//     }
//   }, []);

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'We need access to your camera to scan QR codes.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         alert('Camera permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const onSuccess = e => {
//     setScannedData(e.data);
//   };

//   const handleRescan = () => {
//     setScannedData(null);
//   };

//   return (
//     <View style={styles.container}>
//       {scannedData ? (
//         <View style={styles.scannedDataContainer}>
//           <Text style={styles.centerText}>QR Code Scanned:</Text>
//           <Text style={styles.scannedDataText}>{scannedData}</Text>
//           <Button title="Scan Again" onPress={handleRescan} />
//         </View>
//       ) : (
//         <QRCodeScanner
//           onRead={onSuccess}
//           topContent={<Text style={styles.centerText}>Scan the QR Code</Text>}
//           bottomContent={<Text style={styles.centerText}>Align the QR code within the frame</Text>}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   centerText: {
//     fontSize: 18,
//     textAlign: 'center',
//     padding: 16,
//     color: '#000',
//   },
//   scannedDataContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scannedDataText: {
//     fontSize: 18,
//     textAlign: 'center',
//     padding: 16,
//     color: '#000',
//   },
// });

// export default QRScannerScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScannerScreen = () => {
 
  return (
    <View style={styles.container}>
     <Text>Hii</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color:'#000'
  },
});

export default QRScannerScreen;

