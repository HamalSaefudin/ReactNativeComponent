import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Biometric = ({ route }) => {
    const authBiometric = React.useCallback(() => {
        FingerprintScanner.authenticate({
            description: 'Konfirmasi Biometriks',
        })
        .then((x) => {
            console.log('x');
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => {
            FingerprintScanner.release();
        });
    });

    React.useEffect(
        () => () => {
            FingerprintScanner.release();
        },
    );
    if (!route.params.isBiometric) {
    return (
        <View style={{
 flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',
}}
        >
            <View
          style={{
              width: 102,
              height: 102,
              borderRadius: 102 / 2,
              backgroundColor: 'white',
              justifyContent: 'center',
          }}
            >
            <Feather name="x-circle" color="red" size={102} />
            </View>
            <Text style={{ color: 'white', marginTop: 10, fontSize: 24 }}>Fingerprint tidak tersedia</Text>
        </View>
        );
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
      style={{
        backgroundColor: '#fff',
        marginHorizontal: 45,
        borderRadius: 10,
        padding: 20,
      }}
            >
      <View style={{ minHeight: 327, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 18,
          }}
          bold
        >
          Biometric
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            width: 220,
          }}
          light
        >
          Fingerprint tersedia
        </Text>
          <MaterialCommunityIcons
            name="fingerprint"
            size={144}
            color="black"
            style={{ marginTop: 30 }}
          />
        <View
          style={{
            marginTop: 50,
            marginBottom: 10,
            flex: 1,
            alignItems: 'flex-end',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
          onPress={authBiometric}
          >
          <Text
            bold
            style={{ fontSize: 14, color: '#009EE0' }}
          >
            Tambah
          </Text>
          </TouchableOpacity>
        </View>
      </View>
            </View>
        </View>
    );
};

export default Biometric;