/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/(d|D)(e|E)(s|S)(t|T)(i|I)(n|N)(a|A)(t|T)(i|I)(o|O)(n|N)",
          destination: "/destination",
        },
        {
          source: "/(c|C)(r|R)(e|E)(w|W)",
          destination: "/crew",
        },
        {
          source: "/(t|T)(e|E)(c|C)(h|H)(n|N)(o|O)(l|L)(o|O)(g|G)(y|Y)",
          destination: "/technology",
        },
        
      ];
    },
  };
  
  module.exports = nextConfig;
  
  
  