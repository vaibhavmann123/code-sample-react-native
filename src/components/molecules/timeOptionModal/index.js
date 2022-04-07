import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
// STYLE
import Styles from './style';
import {Mixins} from '_styles';

export default function TimeOptionModal({
  isVisible = false,
  isReminderVisible = false,
  close = () => {},
  onSelectTime = () => {},
  heading,
}) {
  const options = [10, 20, 30, 40, 50, 60];
  return (
    <View>
      <Modal
        isVisible={isVisible || isReminderVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        deviceWidth={Mixins.WINDOW_WIDTH}
        deviceHeight={Mixins.deviceHeight}
        animationInTiming={600}
        animationOutTiming={800}
        onBackButtonPress={close}>
        <View style={Styles.container}>
          <View style={Styles.cRow}>
            <Text style={Styles.modalHeading}>{heading}</Text>
            <TouchableOpacity
              onPress={() => {
                close();
              }}>
              <Text style={Styles.close}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.fRow}>
            <Text style={Styles.modalHeading}>Delivery Time</Text>
            <Text style={Styles.currentTime}>Now</Text>
          </View>
          <View style={Styles.timeBoxOptions}>
            {options.map((x, i) => (
              <TouchableOpacity onPress={() => onSelectTime(x)}>
                <View style={Styles.timeOptionBox} key={i}>
                  <Text style={Styles.timeOption}>{x}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}
