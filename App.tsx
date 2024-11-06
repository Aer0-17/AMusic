import 'react-native-gesture-handler';  // 引入手势处理
import React from 'react';  // 引入 React
import { NavigationContainer } from '@react-navigation/native';  // 导航容器
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // 底部导航
import HomeScreen from './src/screens/HomeScreen';  // 引入 HomeScreen 页面

// 创建底部导航 Tab
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} /> {/* 设置 HomeScreen 页面 */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
