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
					js: true,
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
		},
		{
			block: 'albumround',
			js: false,
			content: [
				{
					block: 'album',
					js: true,
					album: [
						{
							title: '001',
							image: '/images/001.jpg',
							cur: true
						},
						{
							title: '002',
							image: '/images/002.jpg'
						},
						{
							title: '003',
							image: '/images/003.jpg'
						},
						{
							title: '004',
							image: '/images/004.jpg'
						},
						{
							title: '005',
							image: '/images/005.jpg'
						},
						{
							title: '006',
							image: '/images/006.jpg'
						},
						{
							title: '007',
							image: '/images/007.jpg'
						},
						{
							title: '008',
							image: '/images/008.jpg'
						},
						{
							title: '009',
							image: '/images/009.jpg'
						},
						{
							title: '010',
							image: '/images/010.jpg'
						},
						{
							title: '011',
							image: '/images/011.jpg'
						},
						{
							title: '012',
							image: '/images/012.jpg'
						},
						{
							title: '013',
							image: '/images/013.jpg'
						},
						{
							title: '014',
							image: '/images/014.jpg'
						},
						{
							title: '015',
							image: '/images/015.jpg'
						},
						{
							title: '016',
							image: '/images/016.jpg'
						},
						{
							title: '017',
							image: '/images/017.jpg'
						}
					]
				}
			]
		}
	]
})
