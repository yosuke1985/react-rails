//= require_tree ./components

// Setup app into global name space for server rendering
var app = window.app = global.app = {};

// Component::Manifest
var NoContent = require('./components/no_content.es6.js');

// Include into app namespace
app.SideMenu = SideMenu;
