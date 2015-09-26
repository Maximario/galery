module.exports = {
    block: 'page',
    title: 'contact',
    head: [
        { elem: 'css', url: '_contact.css' }
    ],
    scripts: [{ elem: 'js', url: '_contact.js' }],
    content: [
       {
           block: 'content',
           content: [
               'block content'
           ]
       }
    ]
};
