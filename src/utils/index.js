import { Alert } from 'react-native';

export const getUniqueId = () => {
  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  return uuidv4;
};

export const testAlert = () => {
  Alert.alert(
    'Clicked!',
    'Clicking OK',
    [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed');
        },
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};
