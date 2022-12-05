const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import Inbox from "./screens/Inbox";
import Keranjang from "./screens/Keranjang";
import User from "./screens/User";
import Books1 from "./screens/Books1";
import Home from "./screens/Home";
import Registration from "./screens/Registration";
import UserLogin from "./screens/UserLogin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inbox"
              component={Inbox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Books1"
              component={Books1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserLogin"
              component={UserLogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
