modules.define('albumround', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this.bindTo('click', function(e) {
                    this.setMod('size', 'big');
					this.findBlockInside('album', block).setMod('clicked', 'yes');
					
					//this.animate({left: _scroll + "px"});
				});
            }
        }
    }
	
}));

});