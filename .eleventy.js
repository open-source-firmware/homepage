const moment = require("moment");
// Filters
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
const markdownFilter = require("./src/filters/markdown-filter.js");
const now = moment(new Date()).format("YYYY-MM-DD");
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  config.addPassthroughCopy("./src/fonts/");
  config.addPassthroughCopy("./src/slides/");
  config.addPassthroughCopy("./src/documents/");
  // Add filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);
  config.addFilter("markdownFilter", markdownFilter);

  // Returns a collection of news articles in reverse date order and filters them by featured
  config.addCollection("events", (collection) => {
    return [...collection.getFilteredByGlob("./src/events/*.md")]
      .reverse()
      .filter((item) => {
        if (item.data.date >= now) {
          return item;
        }
      });
  });

  config.addCollection("prevEvents", (collection) => {
    return [...collection.getFilteredByGlob("./src/events/*.md")]
      .reverse()
      .filter((item) => {
        if (item.data.date <= now) {
          return item;
        }
      });
  });

  config.addCollection("workstreams", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/workstreams/*.md")
    );
  });

  config.addCollection("projects", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/projects/*.md")
    );
  });

  config.addCollection("ecosystem", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/ecosystem/*.md")
    );
  });

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // config.addPassthroughCopy("./src/scripts/");
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "dist",
    },
  };
};
