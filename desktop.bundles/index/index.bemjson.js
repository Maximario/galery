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
						},
						{
							block: 'test',
							content: 'center'
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
							num: 1,
							image: '/images/001.jpg',
							cur: true
						},
						{
							num: 2,
							image: '/images/002.jpg'
						},
						{
							num: 3,
							image: '/images/003.jpg'
						},
						{
							num: 4,
							image: '/images/004.jpg'
						},
						{
							num: 5,
							image: '/images/005.jpg'
						},
						{
							num: 6,
							image: '/images/006.jpg'
						},
						{
							num: 7,
							image: '/images/007.jpg'
						},
						{
							num: 8,
							image: '/images/008.jpg'
						},
						{
							num: 9,
							image: '/images/009.jpg'
						},
						{
							num: 10,
							image: '/images/010.jpg'
						},
						{
							num: 11,
							image: '/images/011.jpg'
						},
						{
							num: 12,
							image: '/images/012.jpg'
						},
						{
							num: 13,
							image: '/images/013.jpg'
						},
						{
							num: 14,
							image: '/images/014.jpg'
						},
						{
							num: 15,
							image: '/images/015.jpg'
						},
						{
							num: 16,
							image: '/images/016.jpg'
						},
						{
							num: 17,
							image: '/images/017.jpg'
						}
					]
				}
			]
		}
	]
})
