module.exports = function(grunt) {
    // See: https://stackoverflow.com/questions/41700798/gradlew-command-not-found
    // If permission denied run in terminal (for MacOS): chmod 755 gradlew
    let command;
    if (process.platform === "win32") {
        command = 'gradlew build';
    } else if (process.platform === "linux") {
        command = './gradlew build'
    } else if (process.platform === "darwin") {
        command = '.\\gradlew build'
    }
    grunt.initConfig({
        exec: {
            build_venus: {
                command: command,
                cwd: 'src/runtime/venus',
            },
            watch_venus: {
                command: command + " --continuous",
                cwd: 'src/runtime/venus',
            }
        },
        // copy: {
		//   	venus: {
		// 	    files: [
        //             {
        //                 expand: true,
        //                 flatten: true,
        //                 cwd: 'src/runtime/venus',
        //                 src: 'build/kotlin-js-min/main/venus.js**',
        //                 dest: 'src/runtime/venus',
        //             },
        //         ]
		//   	}
		// }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('buildvenus', ['exec:build_venus']);
    grunt.registerTask('watchvenus', ['exec:watch_venus']);
};
