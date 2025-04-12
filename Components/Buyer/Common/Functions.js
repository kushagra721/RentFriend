



import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';



const BaseUrl = "https://companio.onrender.com"


const CallApi = async (url, body, method) => {
  console.log("url",url)
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Only include body if method is not GET
    if (method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error calling API:", error.message);
    return { error: error.message };
  }
};

const requestAndGetLocation = async () => {
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return true; // iOS prompts automatically on first access
    }

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('Permission error:', err);
      return false;
    }
  };

  const promptToEnableGPS = () => {
    Alert.alert(
      'Enable Location Services',
      'Location access is disabled. Please enable it in settings.',
      [
        {
          text: 'Open Settings',
          onPress: () => {
            if (Platform.OS === 'ios') {
              Linking.openURL('app-settings:');
            } else {
              Linking.openSettings();
            }
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const isGPSEnabled = () => {
    return new Promise((resolve) => {
      Geolocation.getCurrentPosition(
        () => resolve(true),
        (error) => {
          if (error.code === 2) {
            // GPS disabled or not available
            resolve(false);
          } else {
            resolve(true);
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 1000,
        }
      );
    });
  };

  const permissionGranted = await hasLocationPermission();

  if (!permissionGranted) {
    Alert.alert('Permission Denied', 'Location permission is required to proceed.');
    return null;
  }

  const gpsEnabled = await isGPSEnabled();

  if (!gpsEnabled) {
    promptToEnableGPS();
    return null;
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Coordinates:', latitude, longitude);
        resolve({ latitude, longitude });
      },
      (error) => {
        console.error('Location error:', error);
        if (error.code === 1) {
          Alert.alert(
            'Location Permission Denied',
            'Please enable location permission in settings.',
            [
              {
                text: 'Open Settings',
                onPress: () => Linking.openURL('app-settings:'),
              },
              { text: 'Cancel', style: 'cancel' },
            ]
          );
        } else {
          Alert.alert('Location Error', error.message);
        }
        reject(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  });
};

export { CallApi, BaseUrl ,requestAndGetLocation};
