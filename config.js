'use strict'


//TO DO//////////////////////////////////////////////////////////////////////
//need to replace the 'blogger-app' rout at the end of below with the name
//of the db that you load into mongo, either locally or on the cloud... probably
//best to try local first..
//TO DO///////////////////////////////////////////////////////////////////////
//Sample data needs to be loaded into mongo 
//NOTE: NEED TO CHANGE THE END OF THE ENDPOINT 'blog ...'
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blogger-app';
//TO DO///////////////////////////////////////////////////////////////////////
//link this up same as above
//NOTE: NEED TO CHANGE THE END OF THE ENDPOINT 'blog ...'
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-blog-app';
//TO DO///////////////////////////////////////////////////////////////////
//For the sake of consistency move the port in run server, here
//remember that all linking areas should be in the same file. 
exports.PORT = process.env.PORT || 8080;