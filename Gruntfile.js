module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            build_venus: {
                command: 'gradlew build',
                cwd: 'src/runtime/venus'
            }
        },
        copy: {
		  	venus: {
			    files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'src/runtime/venus',
                        src: 'build/kotlin-js-min/main/venus.js**',
                        dest: 'src/runtime/venus',
                    },
                ]
		  	}
		}
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('buildvenus', ['exec:build_venus', 'copy:venus']);
};
