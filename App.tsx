import React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Router } from '@/main/router';

/**
 * App is the main app Component
 * @return {JSX.Element}
 */
export default function App(): JSX.Element {
	const safeAreaStyle: StyleProp<ViewStyle> = {
		backgroundColor: Colors.darker,
		flex: 1
	};

	return (
		<NativeBaseProvider>
			<SafeAreaView style={safeAreaStyle}>
				<NavigationContainer>
					<StatusBar style="light" animated backgroundColor="#000" />

					<Router />
				</NavigationContainer>
			</SafeAreaView>
		</NativeBaseProvider>
	);
}
