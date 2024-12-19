declare namespace NodeJS {
    interface ProcessEnv {
      WEATHER_API_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
}
