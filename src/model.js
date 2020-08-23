import image from './img/image.jpg'
import {TitleBlock, TextColumnBlock, ImageBlock, TextBlock} from './classes/blocks'

const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`


export const model = [
    new TitleBlock('Test title', {
        tag: 'h1',
        styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; padding: 1.5rem; text-align: center;'
    }),
    new TextColumnBlock([
        '1 text',
        '2 text',
        '3 text'
        ],{
        styles: 'background: linear-gradient(to right, blue, yellow); color: #fff; padding: 1.5rem; text-align: center;'
    }),
    new ImageBlock(image, {
        alt: 'img',
        imageStyles: 'width: 1100px; height: 550px;'
    }),
    new TextBlock(text, {
        styles: 'background: linear-gradient(to right, #ff0099, #493240); padding: 1rem; font-weight: bolt;'
    }),
]