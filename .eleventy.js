const Handlebars = require('handlebars')

module.exports = (eleventyConfig) => {
    eleventyConfig.setLibrary('hbs', Handlebars);

    return {
        htmlTemplateEngine: 'hbs',
        templateFormats: ['html', 'hbs'],
        dir: {
            input: 'src',
            output: 'dist',
        }
    }
}
