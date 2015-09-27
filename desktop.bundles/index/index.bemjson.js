({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: 'index.min.ie.css', ie: 'IE' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'viewer',
            content: [
				{
					elem: 'left',
					content: [
						{
							block: 'image',
							attrs: {src: '/desktop.blocks/viewer/left.png'}
						},
						{
							block: 'test',
							content: 'left'
						}
					]
				},
				{
					elem: 'center',
					content: [
						{
							block: 'image',
							attrs: {src: ''}
						},
						{
							block: 'test',
							content: 'center'
						}
					]
				},
				{
					elem: 'right',
					content: [
						{
							block: 'image',
							attrs: {src: '/desktop.blocks/viewer/right.png'}
						},
						{
							block: 'test',
							content: 'right'
						}
					]
				}
			]
		}
	]
})
