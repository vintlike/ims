import react from '@vitejs/plugin-react';
import type { ConfigEnv, PluginOption } from 'vite';
import { mockPlugin } from './plugins/mockPlugin';
import { svgrPlugin } from './plugins/svgrPlugin';
import { svgIconsPlugin } from './plugins/svgIconsPlugin';
import UnoCSS from 'unocss/vite';

export function createVitePlugins(_isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: PluginOption[] = [
    react(),
    UnoCSS(),
    svgIconsPlugin(),
    svgrPlugin(),
    mockPlugin()
  ];

  return vitePlugins;
}
