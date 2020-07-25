module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/_variables.scss";
        @import "~bootstrap/scss/bootstrap.scss";
        `
      }
    }
  }
}
