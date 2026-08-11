module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
