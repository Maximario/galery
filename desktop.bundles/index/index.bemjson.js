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
			js: true,
            content: [
				{
					block: 'left',
					js: true,
					content: [
						{
							block: 'image',
							attrs: {src: '/desktop.blocks/viewer/left.png'}
						}
					]
				},
				{
					block: 'center',
					js: true,
					content: [
						{
							block: 'image',
							attrs: {src: ''}
						}
					]
				},
				{
					block: 'right',
					js: true,
					content: [
						{
							block: 'image',
							attrs: {src: '/desktop.blocks/viewer/right.png'}
						}
					]
				}
			]
		},
		{
			block: 'albumround',
			js: true,
			content: [
				{
					block: 'album',
					js: true,
					album: [
						{
							image: '/images/001.jpg',
						},
						{
							image: '/images/002.jpg'
						},
						{
							image: '/images/003.jpg'
						},
						{
							image: '/images/004.jpg'
						},
						{
							image: '/images/005.jpg'
						},
						{
							image: '/images/006.jpg'
						},
						{
							image: '/images/007.jpg'
						},
						{
							image: '/images/008.jpg'
						},
						{
							image: '/images/009.jpg'
						},
						{
							image: '/images/010.jpg'
						},
						{
							image: '/images/011.jpg'
						},
						{
							image: '/images/012.jpg'
						},
						{
							image: '/images/013.jpg'
						},
						{
							image: '/images/014.jpg'
						},
						{
							image: '/images/015.jpg'
						},
						{
							image: '/images/016.jpg'
						},
						{
							image: '/images/017.jpg'
						}
					]
				}
			]
		}
	]
})
