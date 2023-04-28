const withPWA = require('next-pwa')({
    dest: 'public'
  })

module.exports = withPWA({
    images: {
        domains: [ "cdn.discordapp.com" ]
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    }
});