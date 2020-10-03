import { Alert } from 'react-native';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const testAlert = () => {
  console.log('Clicked!');

  Alert.alert(
    'Clicked!',
    'Clicking OK',
    [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Canceled!');
        },
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};
