modules.define('left', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this.bindTo('mouseover', function() {
					this.domElem.css({backgroundColor: '#eee'});
					});
				this.bindTo('mouseout', function() {
					this.domElem.css({backgroundColor: '#ccc'});
				});
				this.bindTo('click', function(e) {
					console.log('Left Click');
					this.emit('click');
				});
			}
		}
    }
    
}));

});