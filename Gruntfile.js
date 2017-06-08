/*!
 * 万户OA微信版 基于SUI Mobile深度定制
 */

/* jshint node: true */
module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function(string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var buildTo = grunt.option('buildTo');
    var dist = buildTo ? (buildTo + '/') : 'dist/';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            distPath: dist,
            doclessetsPath: 'templates/css/',
            docsDistPath: 'template/',
            docsPath: 'template/',
            jsPath: 'dest/js/',
            lessPath: 'dest/less/',
            fontsPath: 'dest/fonts/',
            webappfontsPath: 'dest/webappfonts/',
            imagesPath: 'dest/images/'
        },

        banner: '/*!\n' +
        ' * =====================================================\n' +
        ' * 万户OA微信版 - 基于FrameWork7深度定制\n' +
        ' * 版本：<%= pkg.version %>'+
        ' *\n' +
        ' * =====================================================\n' +
        ' */\n',
        clean: {
            dist: ['<%= meta.distPath %>', '<%= meta.docsDistPath %>']
        },

        concat: {
            sm: {
              options: {
                  banner: '<%= banner %>'
              },
              src: [
                    'dest/js/framework7/wrap-start.js',
                    //'dest/js/framework7/f7-intro.js',
                    //定制万户版 intro.js
                    'dest/js/framework7/f7-intro-wh.js',
                    'dest/js/framework7/views.js',
                    'dest/js/framework7/navbars.js',
                    'dest/js/framework7/searchbar.js',
                    'dest/js/framework7/messagebar.js',
                    'dest/js/framework7/xhr.js',
                    'dest/js/framework7/pages.js',
                    'dest/js/framework7/router.js',
                    'dest/js/framework7/modals.js',
                    'dest/js/framework7/progressbar.js',
                    'dest/js/framework7/panels.js',
                    'dest/js/framework7/lazy-load.js',
                    'dest/js/framework7/material-preloader.js',
                    'dest/js/framework7/messages.js',
                    'dest/js/framework7/swipeout.js',
                    'dest/js/framework7/sortable.js',
                    'dest/js/framework7/smart-select.js',
                    'dest/js/framework7/virtual-list.js',
                    'dest/js/framework7/pull-to-refresh.js',
                    'dest/js/framework7/infinite-scroll.js',
                    'dest/js/framework7/scroll-toolbars.js',
                    'dest/js/framework7/material-tabbar.js',
                    'dest/js/framework7/tabs.js',
                    'dest/js/framework7/accordion.js',
                    'dest/js/framework7/fast-clicks.js',
                    'dest/js/framework7/clicks.js',
                    'dest/js/framework7/resize.js',
                    'dest/js/framework7/forms-storage.js',
                    'dest/js/framework7/forms-ajax.js',
                    'dest/js/framework7/forms-textarea.js',
                    'dest/js/framework7/material-inputs.js',
                    'dest/js/framework7/push-state.js',
                    'dest/js/framework7/swiper-init.js',
                    'dest/js/framework7/photo-browser.js',
                    'dest/js/framework7/autocomplete.js',
                    //'dest/js/framework7/picker.js',
                    //定制万户版picker-wh.js
                    'dest/js/framework7/picker-wh.js',
                    'dest/js/framework7/calendar.js',
                    'dest/js/framework7/notifications.js',
                    'dest/js/framework7/template7-templates.js',
                    'dest/js/framework7/plugins.js',
                    'dest/js/framework7/init.js',
                    'dest/js/framework7/f7-outro.js',
                    'dest/js/framework7/dom7-intro.js',
                    'dest/js/framework7/dom7-methods.js',
                    'dest/js/framework7/dom7-ajax.js',
                    'dest/js/framework7/dom7-utils.js',
                    'dest/js/framework7/dom7-outro.js',
                    'dest/js/framework7/proto-support.js',
                    'dest/js/framework7/proto-device.js',
                    'dest/js/framework7/proto-plugins.js',
                    'dest/js/framework7/template7.js',
                    'dest/js/framework7/swiper.js',
                    'dest/js/framework7/wrap-end.js', 
               ],
              dest: '<%= meta.distPath %>js/<%= pkg.name %>.js'
            }
        },


        less: {
            options: {
                paths: ['./', '<%= meta.lessPath %>'],
                ieCompat: false
            },
            core: {
                src: '<%= meta.lessPath %><%= pkg.name %>.style.less',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.css'
            },
            webappcore: {
                src: '<%= meta.lessPath %><%= pkg.name %>.webapp-style.less',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-style.css'
            },
            webappcolor: {
                src: '<%= meta.lessPath %><%= pkg.name %>.webapp-color.less',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-color.css'
            },
            ios: {
                src: '<%= meta.lessPath %><%= pkg.name %>.style.ios.less',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.ios.css'
            },
            themes: {
                src: '<%= meta.lessPath %><%= pkg.name %>.style.colors.less',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.colors.css'
            }
        },

        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                        '<%= meta.distPath %>css/*.css',
                        '<%= meta.doclessetsPath %>css/docs.css'
                    ]
                }
            }
        },

        copy: {
            fonts: {
                flatten: true,
                expand: true,
                src: 'dest/fonts/*',
                dest: '<%= meta.distPath %>/fonts'
            },
            webappfonts: {
                flatten: true,
                expand: true,
                src: 'dest/webappfonts/*',
                dest: '<%= meta.distPath %>/webappfonts'
            },
            img: {
                flatten: true,
                expand: true,
                src: 'dest/images/*',
                dest: '<%= meta.distPath %>/images'
            },
            docs: {
                expand: true,
                cwd: '<%= meta.distPath %>',
                src: [
                    '**/*'
                ],
                dest: '<%= meta.docsDistPath %>'
            }
        },

        copyless: {
            docs: {
                expand: true,
                cwd: '<%= meta.distPath %>',
                src: [
                    '**/*.less'
                ],
                dest: '<%= meta.docsDistPath %>'
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'Android >= 4',
                    'Chrome >= 40',
                    'last 6 Firefox versions',
                    'iOS >= 6',
                    'Safari >= 6',
                    'ie >= 9'
                ]
            },
            core: {
                src: '<%= less.core.dest %>'
            },
            webappcore: {
                src: '<%= less.webappcore.dest %>'
            },
            webappcolor: {
                src: '<%= less.webappcolor.dest %>'
            },
            ios: {
                src: '<%= less.ios.dest %>'
            },
            themes: {
                src: '<%= less.themes.dest %>'
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: '*',// keep all important comments
                advanced: false
            }, 
            sm: {
                src: '<%= meta.distPath %>css/<%= pkg.name %>.style.css',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.min.css'
            },
            webappsm: {
                src: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-style.css',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-style.min.css'
            },
            webappcolor: {
                src: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-color.css',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.webapp-color.min.css'
            },
            ios: {
                src: '<%= meta.distPath %>css/<%= pkg.name %>.style.ios.css',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.ios.min.css'
            },
            themes: {
                src: '<%= meta.distPath %>css/<%= pkg.name %>.style.colors.css',
                dest: '<%= meta.distPath %>css/<%= pkg.name %>.style.colors.min.css'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: false
            },
            sm: {
                src: '<%= concat.sm.dest %>',
                dest: '<%= meta.distPath %>js/<%= pkg.name %>.min.js'
            }
        },

        qunit: {
            options: {
                inject: 'js/tests/unit/phantom.js'
            },
            files: 'js/tests/index.html'
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Default task(s).
    grunt.registerTask('dist-css', ['less', 'autoprefixer', 'usebanner', 'cssmin']);
    grunt.registerTask('build-css', ['dist-css', 'cssmin']);
    grunt.registerTask('dist-js', ['concat']);
    grunt.registerTask('build-js', ['dist-js', 'uglify']);
    grunt.registerTask('dist', ['clean', 'build-css', 'build-js', 'copy']);
    //grunt.registerTask('validate-html', ['jekyll']);
    grunt.registerTask('build', ['dist']);
    //grunt.registerTask('test', ['dist', 'jshint', 'qunit', 'validate-html']);
    //grunt.registerTask('server', ['dist', 'jekyll', 'connect', 'watch']);
    grunt.registerTask('default', ['build-js', 'build-css', 'copy']);
    grunt.registerTask('saveless',['less','autoprefixer']);
    //if (buildTo) {
        //CDN发布环境
        //grunt.registerTask('default', ['build-js', 'build-css', 'copy']);
    //} else {
        //开发环境
        //grunt.registerTask('default', ['test', 'dist']);
    //}

    // Version numbering task.
    // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
    // This can be overzealous, so its changes should always be manually reviewed!
};
