import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';  // 使用 expo-av 来播放音频

// MusicPlayer 音乐播放器组件
export const MusicPlayer = ({ url }: { url: string }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);  // 音频实例
  const [isPlaying, setIsPlaying] = useState(false);  // 播放状态

  // 播放音频
  const playMusic = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: url });  // 创建音频实例
    setSound(sound);  // 保存音频实例
    await sound.playAsync();  // 播放音频
    setIsPlaying(true);  // 更新播放状态
  };

  // 停止音频播放
  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  return (
    <View>
      <Button 
        title={isPlaying ? "Stop" : "Play"} 
        onPress={isPlaying ? stopMusic : playMusic} 
      />
    </View>
  );
};
