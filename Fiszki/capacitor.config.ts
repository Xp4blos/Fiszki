import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'fiszki',
  webDir: 'dist/fiszki',
  server: {
    androidScheme: 'https'
  }
};

export default config;
