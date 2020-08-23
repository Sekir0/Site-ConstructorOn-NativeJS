import { row, col_sm } from './utils'

function title(block){
    const {tag, styles} = block.options

    return row(col_sm(`
        <${tag}>${block.value}<${tag}>
    `), styles)
}

function text(block){
    return row(col_sm(`
        <p>${block.value}</p>
    `), block.options.styles)
}

function textColumns(block){
    const html = block.value.map(item => col_sm(item))
    return row(html.join(''), block.options.styles)
}

export const templates = { title, text, textColumns }