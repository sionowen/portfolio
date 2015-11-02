module.exports = function(grunt){


    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'stylesheets/main.css': 'stylesheets/main.scss',
                    'stylesheets/sparkstarter.css': 'stylesheets/sparkstarter.scss',
                    'stylesheets/contact.css': 'stylesheets/contact.scss',
                    'stylesheets/nomadic-audio.css': 'stylesheets/nomadic-audio.scss',
                    'stylesheets/chation.css': 'stylesheets/chation.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);

}