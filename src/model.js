export const model = [
    {
        type: 'title', value: 'Test title', options: {
            tag: 'h1',
            styles: 'background: darkred; color: #fff; text-align: center;'
        }
    },
    {
        type: 'text', value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', options: {
            styles: 'background: darkblue; color: white;'
        }
    },
    {
        type: 'textColumns', value: [
            '1 text',
            '2 text',
            '3 text'
        ],
        options: {
            styles: 'padding 0.1rem;'
        }
    },
]