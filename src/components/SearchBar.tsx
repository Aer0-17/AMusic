import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

// SearchBar 组件
export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');  // 存储用户输入的搜索关键字

  return (
    <View>
      <TextInput 
        placeholder="Search for music..." 
        value={query} 
        onChangeText={setQuery}  // 更新查询关键字
      />
      <Button title="Search" onPress={() => onSearch(query)} />  {/* 调用传入的 onSearch 函数 */}
    </View>
  );
};
