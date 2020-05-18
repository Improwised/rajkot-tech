const fs = require('fs')
const path = require('path')
const glob = require('glob')

export function getChapterPastMeetup(name) {
  const srcDir = path.resolve('./', `events/${name}`)
  const files = glob.sync('**/*.json', { cwd: srcDir })
  const array = []
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8')
    const parsedContent = JSON.parse(content)
    if (!parsedContent.live) {
      array.push(parsedContent)
    }
  })
  return array
}

export function getAllChaptersPastMeetup() {
  const srcDir = path.resolve('./', `events`)
  const files = glob.sync('**/*.json', { cwd: srcDir })
  const array = []
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8')
    const parsedContent = JSON.parse(content)
    if (!parsedContent.live) {
      array.push(parsedContent)
    }
  })
  array.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date)
  })
  return array.reverse()
}

export function getLiveMeetup() {
  const srcDir = path.resolve('./', `events`)
  const files = glob.sync('**/*.json', { cwd: srcDir })
  const array = []
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8')
    if (JSON.parse(content).live) {
      array.push(JSON.parse(content))
    }
  })
  return array
}
// get all chapter
export function getRoutes() {
  const srcDir = path.resolve('./', `events/`)
  const files = glob.sync('**/', { cwd: srcDir })
  const array = []
  files.filter((f) => {
    const name = f.split('/')[0]
    array.push(name)
  })
  return array
}
export function generateAllRoutes() {
  const srcDir = path.resolve('./', `events/`)
  const folders = glob.sync('**/', { cwd: srcDir })
  const files = splitString(glob.sync('**/*.json', { cwd: srcDir }), '.json')
  const array = []
  ;[...folders, ...files].filter((f) => {
    const s = '/past-meetup/'
    const name = s.concat(f)
    array.push(name)
  })
  return array
}
function splitString(data, value) {
  const array = []
  data.filter((f) => {
    const name = f.split(value)[0].concat('/')
    array.push(name)
  })
  return array
}
export function getEventDetails(route) {
  const srcDir = path.resolve('./', `events/${route.type}`)
  const files = glob.sync(`**/${route.id}.json`, { cwd: srcDir })
  const array = []
  files.map((file) => {
    const content = fs.readFileSync(path.resolve(srcDir, file), 'utf8')
    array.push(JSON.parse(content))
  })
  return array
}
