import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMapScreen from "./pages/OrphanagesMap";
import OrphanagesDetailsScreen from "./pages/OrphanageDetails";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="OrphanageMap"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="OrphanageMap"
                    component={OrphanagesMapScreen}
                />
                <Stack.Screen
                    name="OrphanageDetails"
                    component={OrphanagesDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
