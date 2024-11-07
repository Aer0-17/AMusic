import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// SearchBar 组件
export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');  // 存储用户输入的搜索关键字

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <TextInput
        style={{ flex: 1, padding: 10, borderWidth: 1, borderRadius: 5 }}
        placeholder="Search for music..."
        value={query}
        onChangeText={setQuery}  // 更新查询关键字
      />
      <Button 
        title="Search" 
        onPress={() => query.trim() && onSearch(query)}  // 仅在查询不为空时触发搜索 
      />
    </View>
  );
};
