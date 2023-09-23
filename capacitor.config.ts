import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'web-apk',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Network: {
      appId: 'io.ionic.starter'
    },
    App: {}
  },
  cordova: {},
};

export default config;
