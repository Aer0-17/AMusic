import * as FileSystem from 'expo-file-system';  // 导入 expo-file-system，用于文件系统操作

// 用于保存文件的函数
export const saveFile = async (uri: string, filename: string) => {
  // 计算文件的保存路径，使用 expo-file-system 的 documentDirectory 作为存储路径
  const fileUri = FileSystem.documentDirectory + filename;

  try {
    // 下载文件并保存到本地
    const file = await FileSystem.downloadAsync(uri, fileUri);

    // 返回保存的文件 URI
    return file.uri;
  } catch (error) {
    // 如果下载过程中发生错误，输出错误信息
    console.error('Error saving file:', error);
    throw new Error('File download failed');
  }
};
