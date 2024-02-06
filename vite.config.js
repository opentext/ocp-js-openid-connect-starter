import { defineConfig, loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const DEFAULT_PORT = '4000';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT ?? DEFAULT_PORT;
  return {
    root: 'src',
    plugins: [basicSsl()],
    server: {
      https: true,
      port: port
    },
    preview: {
      https: true,
      port: port
    },
    define: {
      'process.env': {
        PORT: port,
        BASE_SERVICE_URL: env.BASE_SERVICE_URL,
        TENANT_ID: env.TENANT_ID,
        PUBLIC_CLIENT_ID: env.PUBLIC_CLIENT_ID
      }
    },
    esbuild: {
      supported: {
        'top-level-await': true
      }
    }
  };
});
