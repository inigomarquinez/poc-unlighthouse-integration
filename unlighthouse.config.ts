export default {
  site: "esim.holafly.com",
  // urls: [
  //   "/"
  // ],
  scanner: {
    device: "desktop",
    exclude: [
      "/travel-tips/*",
      "/news/*",
      "/faq/*",
    ]
  },
  ci: {
    // budget: {
    //   "performance": 50,
    //   "accessibility": 80,
    //   "best-practices": 80,
    //   "seo": 80,
    // },
    buildStatic: true,
  }
}