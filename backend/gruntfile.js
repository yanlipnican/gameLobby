module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
          tsconfig: 'tsconfig.json'
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/\*\*/\*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
        tasks: ["ts"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", [
    "ts",
  ]);

};