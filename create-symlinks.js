import fs from 'fs-extra'

// fs.copySync('./src', './src-original')
// fs.copySync('./static', './static-original')

// fs.rmSync('./src', { recursive: true, force: true })
// fs.rmSync('./static', { recursive: true, force: true })

fs.symlinkSync('./src-original', './src')
fs.symlinkSync('./static-original', './static')