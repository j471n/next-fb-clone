const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    domains: [
      "rb.gy", // shorten url
      "platform-lookaside.fbsbx.com", // images from facebook
      "firebasestorage.googleapis.com", //images from firebase
      "lh3.googleusercontent.com", // images from google
      "avatars.githubusercontent.com",
    ],
  },
});
