import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { MusicPlayer } from '../components/MusicPlayer';  // 引入音乐播放器组件
import { SearchBar } from '../components/SearchBar';  // 引入搜索框组件
import { searchMusic } from '../services/navidrome';  // 引入 Navidrome 服务

// HomeScreen 页面组件
const HomeScreen = () => {
  const [musicList, setMusicList] = useState<any[]>([]);  // 用于保存从 Navidrome API 获取的音乐列表
  const [loading, setLoading] = useState(false);  // 控制加载状态
  const [error, setError] = useState<string | null>(null);  // 错误状态

  // 处理搜索音乐的功能
  const handleSearch = async (query: string) => {
    if (!query) return;  // 如果没有输入搜索内容，不进行搜索
    setLoading(true);  // 设置加载状态为 true
    setError(null);  // 清除之前的错误

    try {
      const results = await searchMusic(query);  // 调用 API 搜索音乐
      if (results) {
        setMusicList(results);  // 更新音乐列表
      } else {
        setError('No music found');
      }
    } catch (err) {
      setError('Failed to fetch music');  // 捕获异常并显示错误信息
    } finally {
      setLoading(false);  // 无论请求成功与否，都要关闭加载状态
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar onSearch={handleSearch} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

      <FlatList
        data={musicList}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{String(item.title) || 'Unknown Title'}</Text>  {/* 显示音乐标题 */}
            <MusicPlayer url={item.url || ''} />  {/* 音乐播放器组件 */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}  // 使用音乐的 ID 作为 key
        ListEmptyComponent={
          !loading && !error && musicList.length === 0 ? (
            <Text>No results found</Text>  // 没有搜索到结果时显示
          ) : null
        }
      />
    </View>
  );
};

export default HomeScreen;
