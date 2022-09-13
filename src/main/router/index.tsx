import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '@/presentation/screens/Welcome';

const Stack = createNativeStackNavigator();

export const Router = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Welcome" component={Welcome} />
		</Stack.Navigator>
	);
};
