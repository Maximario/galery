modules.define('album', ['i-bem__dom', 'jquery'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this.bindTo(this.elem('item'), 'click', function(e) {
					var clickedImg = e.target;
					console.log(clickedImg);			
				});
            }
        }
    }
	
}));

});

