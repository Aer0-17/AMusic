import { AppRegistry } from 'react-native';  // 引入 React Native
import App from '../../App';  // 引入 App.tsx 文件
import { name as appName } from '../../app.json';  // 获取应用的名称
import 'react-native-gesture-handler';  // 必须引入用于支持手势

// Web 环境下，使用 react-dom 来渲染
if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    AppRegistry.runApplication(appName, {
      rootTag: rootElement,
    });
  }
} else {
  // React Native 环境
  AppRegistry.registerComponent(appName, () => App);
}
