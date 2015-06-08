/**
 * Created by colinjlacy on 1/20/15.
 */
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    angular: true
                }
            }
        },
        connect: {
            task: { // give your task a name
                options: {
                    port: 3000 // configure your port here
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/app.css": "less/app.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['app/*/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.registerTask('default', ['connect', 'less', 'jshint', 'watch']);

};