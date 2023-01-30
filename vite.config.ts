import { UserConfig, defineConfig } from 'vite'

const configuration: UserConfig = {
    optimizeDeps: {
        exclude: [
            'limax',
        ],
    },
}

export default defineConfig(configuration)