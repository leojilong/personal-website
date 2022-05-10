import React from 'react'
import {Cloud, renderSimpleIcon} from 'react-icon-cloud'
import js from "simple-icons/icons/javascript"
import nextjs from "simple-icons/icons/nextdotjs"
import "./CloudTags.css"


const CloudTags = () => {
  return <Cloud>
    <a><p>This is text.</p></a>
    <a><p>This is text.</p></a>
    <a><p>This is text.</p></a>
    {/* <a
      href="https://emojipedia.org/globe-showing-americas/"
      target="_blank"
      rel="noopener"
    >
      <img
        height="42"
        width="42"
        alt="A globe"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
      />
    </a> */}
  </Cloud>
}
export default CloudTags;