import React from 'react'
import {Cloud, renderSimpleIcon, ICloud} from 'react-icon-cloud'

import { siJava, siJavascript, siPython, siHtml5, siCss3, 
    siTypescript, siPostgresql, siMongodb, siReact, siRedux, 
    siVuedotjs, siNodedotjs, siIonic, siSass, siLodash, 
    siApachemaven, siSpringboot, siNpm, siYarn, siGit, 
    siCapacitor, siPostman, siApacheant, siRacket, siHaskell, 
    siAntdesign, siMui, siHeroku, siAmazonaws, siSequelize, siMysql,
    siRedis, siSocketdotio } from "simple-icons/icons"

const js = {name: siJavascript, url: 'https://www.javascript.com/'}
const java = {name: siJava, url: 'https://www.oracle.com/ca-en/java/'}
const python = {name: siPython, url: 'https://www.python.org/'}
const html = {name: siHtml5, url: 'https://html.com/'}
const css = {name: siCss3, url: 'https://www.w3.org/Style/CSS/Overview.en.html'}
const ts = {name: siTypescript, url: 'https://www.typescriptlang.org/'}
const psql = {name: siPostgresql, url: 'https://www.postgresql.org/'}
const mdb = {name: siMongodb, url: 'https://www.mongodb.com/'}
const rct = {name: siReact, url: 'https://reactjs.org/'}
const red = {name: siRedux, url: 'https://redux.js.org/'}
const vue = {name: siVuedotjs, url: 'https://vuejs.org/'}
const node = {name: siNodedotjs, url: 'https://nodejs.org/en/about/'}
const ionic = {name: siIonic, url: 'https://ionicframework.com/'}
const sass = {name: siSass, url: 'https://sass-lang.com/'}
const lodash = {name: siLodash, url: 'https://lodash.com/'}
const maven = {name: siApachemaven, url: 'https://maven.apache.org/'}
const sb = {name: siSpringboot, url: 'https://spring.io/projects/spring-boot'}
const npm = {name: siNpm, url: 'https://www.npmjs.com/'}
const yarn = {name: siYarn, url: 'https://yarnpkg.com/'}
const git = {name: siGit, url: 'https://git-scm.com/'}
const cap = {name: siCapacitor, url: 'https://capacitorjs.com/'}
const postm = {name: siPostman, url: 'https://www.postman.com/'}
const ant = {name: siApacheant, url: 'https://ant.design/'}
const rkt = {name: siRacket, url: 'https://racket-lang.org/'}
const hsk = {name: siHaskell, url: 'https://www.haskell.org/'}
const antd = {name: siAntdesign, url: 'https://ant.design/'}
const mui = {name: siMui, url: 'https://mui.com/'}
const heroku = {name: siHeroku, url: 'heroku.com'}
const aws = {name: siAmazonaws, url: 'https://aws.amazon.com/?nc1=h_ls'}
const sqlize = {name: siSequelize, url: 'https://sequelize.org/'}
const mysql = {name: siMysql, url: 'https://www.mysql.com/'}
const redis = {name: siRedis, url: 'https://redis.io/'}
const socketio = {name: siSocketdotio, url: 'https://socket.io/'}

const skills = [js, java, python, html, css, ts, psql, mdb, 
    rct, red, vue, node, ionic, sass, lodash, maven, sb, npm, 
    yarn, git, cap, postm, ant, rkt, hsk, antd, mui, heroku, 
    aws, sqlize, mysql, redis, socketio]
// const handleClickTags = (e: any, url: any) => {
//     e.preventDefault()
//     window.open(url, "_blank")
// }
const cloudProps: Omit<ICloud, 'children'> = {
  id: 'stable-id-for-csr-ssr',
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
  },
}
const icons = skills.map((skill) => {
  return renderSimpleIcon({
    icon: skill.name,
    size: 42,
    aProps: {
      href: '#',
        onClick: (e) => {
          e.preventDefault()
        },
      // onClick: (e: any) => handleClickTags(e, skill.url)
    }
  })
})

const CloudTags = () => {
  return <Cloud {...cloudProps}>
    {icons}
    <a href="#" color="white">Express</a>
    <a href="#" >Apache ZooKeeper</a>
    
   
  </Cloud>
}
export default CloudTags;