module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },

 jshint: {
      all: ['js/*.js'],
	options: {
      	  esversion: 6,
	}	
  },

watch: {
  scripts: {
    files: ['js/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
  styles: {
    files: ['sass/*.sass'],
    tasks: ['sass'],
    options: {
      spawn: false,
    },
  }
},

browserSync: {
  default_options: {
    bsFiles: {
      src: [
        "css/*.css",
        "*.html"
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: "./"
      }
    }
  }
},

imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
}
  });


  // Load the plugins tasks
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-browser-Sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'sass','jshint', 'imagemin', 'watch']);
};