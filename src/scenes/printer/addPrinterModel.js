import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export function AddPrinterModel({
  visible,
  printPopup,
  onChangeName,
  name,
  onChangeIp,
  ip,
  btnAction,
  editId,
  close,
  closeSucess,
  successPopup,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {printPopup === false ? (
              <>
                <View style={styles.closeIconView}>
                  <TouchableOpacity onPress={() => closeSucess()}>
                    <Image
                      tintColor={'white'}
                      style={styles.closeicon}
                      source={require('_assets/icons/close.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.checkIconView}>
                  <Image
                    tintColor="#FF3008"
                    style={styles.checkicon}
                    source={require('_assets/icons/check.png')}
                  />
                  <Text>Successfully saved the printer</Text>
                </View>
              </>
            ) : (
              <View style={styles.addPrntView}>
                <View style={styles.addPrinterModelTitle}>
                  <Text>Add Printer</Text>
                  <View>
                    <TouchableOpacity onPress={() => close()}>
                      <Image
                        tintColor={'white'}
                        style={styles.closeicon}
                        source={require('_assets/icons/close.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.namePrntView}>
                  <Image
                    style={styles.icon}
                    tintColor={'#FF3008'}
                    source={require('_assets/icons/print.png')}
                  />
                  <TextInput
                    style={{paddingLeft: 10}}
                    placeholder="Name the Printer "
                    onChangeText={onChangeName}
                    value={name}
                  />
                </View>
                <View style={styles.ipTextView}>
                  <Image
                    style={styles.icon}
                    tintColor={'#FF3008'}
                    source={require('_assets/icons/ip-address.png')}
                  />
                  <TextInput
                    style={{paddingLeft: 10}}
                    placeholder="Enter IP Address"
                    onChangeText={onChangeIp}
                    value={ip}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.btnView}>
                  <TouchableOpacity
                    onPress={() => successPopup(editId)}
                    style={styles.btn}>
                    <Text style={styles.btntext}>{btnAction}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
  },
  btnView: {
    width: '100%',
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: 'white',
  },
  icon: {
    height: 20,
    width: 20,
  },

  addPrntView: {
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  addPrinterModelTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },

  namePrntView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#FF3008',
    paddingHorizontal: 10,
    width: '100%',
  },
  ipTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#FF3008',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 20,
  },

  checkicon: {
    height: 90,
    width: 90,
    margin: 20,
  },
  closeicon: {
    height: 15,
    width: 15,
    backgroundColor: 'black',

    borderRadius: 10,
  },
  closeIconView: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'black',

    borderRadius: 10,
  },
  checkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
