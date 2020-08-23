import image from './img/image.jpg'
import {TitleBlock, TextColumnBlock, ImageBlock, TextBlock} from './classes/blocks'
import {css} from './utils'

const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`


export const model = [
    new TitleBlock('Test title', {
        tag: 'h1',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new TextColumnBlock([
        '1 text',
        '2 text',
        '3 text'
        ],{
        styles: css({
            background: 'linear-gradient(to right, blue, yellow)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: css({
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'img',
        imageStyles: 'width: 1000px; height: 500px;'
    }),
    new TextBlock(text, {
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1rem',
            'font-weight': 'bolt'
        })
    }),
]