module.exports = {
//   workspace: './src/',
  proxy: {
    '/HPImageArchive.aspx': {
      target: 'https://cn.bing.com',
      changeOrigin: true,
    },
  },
};
