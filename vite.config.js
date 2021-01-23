export default {
    proxy: {
        '/api': {
            target: 'http://localhost:5500/',
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
}