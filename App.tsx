import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Router } from '@/main/router';

const safeAreaStyle: StyleProp<ViewStyle> = {
	backgroundColor: Colors.darker,
	flex: 1
};

export default function App() {
  return (
    <NativeBaseProvider>
			<SafeAreaView style={safeAreaStyle}>
				<NavigationContainer>
					<StatusBar translucent />

					<Router />
				</NavigationContainer>
			</SafeAreaView>
		</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
