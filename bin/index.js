#! /usr/bin/env node
// console.log("hello world");
var arrayToTable = require('array-to-table')
var path = require("path")
var package= require(path.join(path.resolve('./'),('./package.json')))
// console.log(package);
// var dir = __dirname+'\\\package.json'
// console.log(dir);
// var package = require(`${dir}`)
// console.log("package",package);

var version = package.dependencies
// console.log(version);

var emparr = []
for(var i of Object.keys(version)){
    // console.log("i",i);
    // console.log(package[i]);
    var obj = {
        name:"",
        version:""
    }
    obj.name = i
    obj.version = version[i]
    emparr.push(obj)
}
console.table(emparr);

// var packageversions = Object.keys(version) 
// console.log("packageversions",packageversions);
