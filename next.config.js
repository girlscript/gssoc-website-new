module.exports = {
  images: {
    loader: "akamai",
    path: "/",
    // domains: ["user-images.githubusercontent.com"],
  },
  basePath: "",
  env: {
    JSON_RPC_PROVIDER: process.env.JSON_RPC_PROVIDER,
    GH_ACCESS_TOKEN: process.env.GH_ACCESS_TOKEN,
  },
  assetPrefix: "",
};
