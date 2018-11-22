module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "application created by thinkjs"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "babel": {
      "type": "confirm",
      "message": "Do you want to turn on babel?",
      "default": false
    }
  },
  "new": {
    "default": [
      ['server/src/bootstrap', 'server/src/bootstrap'],
      ['server/src/config', 'server/src/config'],
      ['server/src/controller/api.js', 'server/src/controller/api.js'],
      ['server/src/controller/base.js', 'server/src/controller/base.js'],
      ['server/src/controller/detail.js', 'server/src/controller/detail.js'],
      ['server/src/controller/index.js', 'server/src/controller/index.js'],
      ['server/src/logic', 'server/src/logic'],
      ['server/src/model', 'server/src/model'],
      ['server/test/index.js', 'server/test/index.js'],
      ['server/view/index_index.html', 'server/view/index_index.html'],
      ['server/www/static/css/.gitkeep', 'server/www/static/css/.gitkeep'],
      ['server/www/static/js/.gitkeep', 'server/www/static/js/.gitkeep'],
      ['server/www/static/image/.gitkeep', 'server/www/static/image/.gitkeep'],
      ['server/development.js', 'server/development.js'],
      ['server/eslintrc', 'server/.eslintrc'],
      ['server/gitignore', 'server/.gitignore'],
      ['server/nginx.conf', 'server/nginx.conf'],
      ['server/package.json', 'server/package.json'],
      ['server/pm2.json', 'server/pm2.json'],
      ['server/production.js', 'server/production.js'],
      ['server/README.md', 'server/README.md'],
      ['client/babel.config.js', 'client/babel.config.js'],
      ['client/package.json', 'client/package.json'],
      ['client/README.md', 'client/README.md'],
      ['client/vue.config.js', 'client/vue.config.js'],
      ['client/src', 'client/src'],
      ['client/public', 'client/public']
    ],
    "multiModule": [
      ['server/src/bootstrap', 'server/src/common/bootstrap'],
      ['server/src/config', 'server/src/common/config'],
      ['server/src/config/config.js', 'server/src/[moduleName]/config/config.js'],
      ['server/src/controller/api.js', 'server/src/[moduleName]/controller/api.js'],
      ['server/src/controller/detail.js', 'server/src/[moduleName]/controller/detail.js'],
      ['server/src/controller/base.js', 'server/src/[moduleName]/controller/base.js'],
      ['server/src/controller/index.js', 'server/src/[moduleName]/controller/index.js'],
      ['server/src/logic', 'server/src/[moduleName]/logic'],
      ['server/src/model', 'server/src/[moduleName]/model'],
      ['server/test/index.js', 'server/test/index.js'],
      ['server/view/index_index.html', 'server/view/[moduleName]/index_index.html'],
      ['server/www/static/css/.gitkeep', 'server/www/static/css/.gitkeep'],
      ['server/www/static/js/.gitkeep', 'server/www/static/js/.gitkeep'],
      ['server/www/static/image/.gitkeep', 'server/www/static/image/.gitkeep'],
      ['server/development.js', 'server/development.js'],
      ['server/eslintrc', 'server/.eslintrc'],
      ['server/gitignore', 'server/.gitignore'],
      ['server/nginx.conf', 'server/nginx.conf'],
      ['server/package.json', 'server/package.json'],
      ['server/pm2.json', 'server/pm2.json'],
      ['server/production.js', 'server/production.js'],
      ['server/README.md', 'server/README.md'],
      ['client/package.json', 'client/package.json'],
      ['client/README.md', 'client/README.md'],
      ['client/vue.config.js', 'client/vue.config.js'],
      ['client/src', 'client/src'],
      ['client/public', 'client/public']
    ]
  },
  "controller": {
    "default": [
      ["src/controller/index.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ],
    "rest": [
      ["src/controller/rest.js", "src/[moduleName]/controller/rest.js"],
      ["src/controller/restIndex.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ]
  },
  "model": [
    ["src/model/index.js", "src/[moduleName]/model/[action].js"]
  ],
  "service": [
    ["src/service/index.js", "src/[moduleName]/service/[action].js"]
  ],
  "middleware": [
    ["src/middleware/base.js", "src/[moduleName]/middleware/[action].js"]
  ],
  "adapter": [
    ["src/adapter/base.js", "src/[moduleName]/adapter/[type]/[action].js"]
  ],
  "module": [
    ["src/config/config.js", "src/[moduleName]/config/config.js"],
    ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
    ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
    ["src/logic/index.js", "src/[moduleName]/logic/index.js"],
    ["src/model/index.js", "src/[moduleName]/model/index.js"],
    ["view/index_index.html", "view/[moduleName]/index_index.html"]
  ],
  "completeMessage": "To get started:\n\n<% if (!inPlace) { %># enter path\n$ cd <%= destDirName %>\n\n<% } %># install dependencies:\n$ npm install\n\n# run the app\n$ npm start"
}
