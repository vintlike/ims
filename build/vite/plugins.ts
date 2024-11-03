import react from '@vitejs/plugin-react';
import type { ConfigEnv, PluginOption } from 'vite';
import { mockPlugin } from './plugins/mockPlugin';
import { svgrPlugin } from './plugins/svgrPlugin';
import { svgIconsPlugin } from './plugins/svgIconsPlugin';

export function createVitePlugins(_isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: PluginOption[] = [
    react(),
    svgIconsPlugin(),
    svgrPlugin(),
    mockPlugin()
  ];

  return vitePlugins;
}
