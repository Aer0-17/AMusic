import axios from 'axios';  // 使用 axios 发送 HTTP 请求

// 调用 Navidrome API 搜索音乐
export const searchMusic = async (query: string) => {
  try {
    const response = await axios.get(`https://your-navidrome-api-url/search?query=${query}`);  // 替换为实际的 Navidrome API URL
    return response.data.results;  // 返回搜索结果
  } catch (error) {
    console.error('Error fetching music from Navidrome:', error);
    return [];  // 如果发生错误，返回空数组
  }
};
