modules.define('right', ['i-bem__dom'], function(provide, BEMDOM) {

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
			}
        }
    }
}));

});