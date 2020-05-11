const path = require("path");
const fs = require("fs");
const glob = require("glob");

//get all events of particualr chapter
export function getAllEvents(name) {
  const srcDir = path.resolve("./", `events/${name}`);
  const files = glob.sync("**/*.json", { cwd: srcDir });
  const array = [];
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), "utf8");
    array.push(JSON.parse(content));
  });
  return array;
}

//get all events of all chapter
export function getPastEvents() {
  const srcDir = path.resolve("./", `events`);
  const files = glob.sync("**/*.json", { cwd: srcDir });
  const array = [];
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), "utf8");
    array.push(JSON.parse(content));
  });
  return array;
}

// get live events
export function getLiveEvents() {
  const srcDir = path.resolve("./", `events`);
  const files = glob.sync("**/*.json", { cwd: srcDir });
  const array = [];
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), "utf8");
    if (JSON.parse(content).live === true) {
      array.push(JSON.parse(content));
    }
  });
  return array;
}
//get all chapter
export function getRoutes() {
  const srcDir = path.resolve("./", `events/`);
  const files = glob.sync("**/", { cwd: srcDir });
  const array = [];
  files.filter((f) => {
    let name = f.split('/')[0];
    array.push(name);
  });
  return array;
}
 export function generateAllRoutes() {
  const srcDir = path.resolve("./", `events/`);
  const folders = glob.sync("**/", { cwd: srcDir });
  const files = splitString(glob.sync("**/*.json", { cwd: srcDir }), '.json')
  let array = [];
  [...folders, ... files].filter((f) => {
    const s = '/past-events/';
    let name = s.concat(f)
    array.push(name);
  });
  return array
 }
 function splitString(data, value) {
   const array = [];
  data.filter((f) => {
    let name = f.split(value)[0].concat('/');
    array.push(name);
  });
  return array;
 }
 export function getEventDetails(route) {
  const srcDir = path.resolve("./", `events/${route.type}`);
  const files = glob.sync(`**/${route.id}.json`, { cwd: srcDir });
  const array = [];
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), "utf8");
    array.push(JSON.parse(content));
  });
  return array;
 }
// module.exports = {   generateAllRoutes };
