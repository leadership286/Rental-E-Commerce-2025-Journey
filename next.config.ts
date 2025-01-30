import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  webpack(config){
    config.cache={
      type:"filesystem",
      compression:"gzip",
      allowCollectingMemory:true
    }
    return config
  }
};

export default nextConfig;
