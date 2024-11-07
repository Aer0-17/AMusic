import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';  // 导入 useRouter 进行跳转
import HomeScreen from '../src/screens/HomeScreen';

export default function IndexPage() {
  const router = useRouter();  // 获取路由实例

  useEffect(() => {
    // 设置欢迎信息显示 2 秒后跳转
    const timer = setTimeout(() => {
      router.replace('/home');  // 自动跳转到 home 页面
    }, 2000);  // 2 秒后跳转，你可以根据需要调整这个时间

    return () => clearTimeout(timer);  // 清理定时器
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to AMusic</Text>
    </View>
  );
}
