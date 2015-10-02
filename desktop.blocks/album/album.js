modules.define('album', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this._cur = this.findElem('item', 'cur', 'yes');
				this.bindTo('item', 'click', function(e) {
					this.setMod($(e.currentTarget), 'cur', 'yes');
					this.emit('click');
				});
			}
		}
	},
	onElemSetMod: {
		'item' : {
			'cur' : {
				'yes' : function(elem) {
					this.delMod(this._cur, 'cur');
					this._cur = elem;
				}
			}
		}
	}
	
}));

});

