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
				this.findBlockOutside('albumround').findBlockOutside('page__inner').findBlockInside('viewer').findBlockInside('left').on(
					'click',
					this._moveLeft,
					this);
				this.findBlockOutside('albumround').findBlockOutside('page__inner').findBlockInside('viewer').findBlockInside('right').on(
					'click',
					this._moveRight,
					this);
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
	},
	_moveLeft: function() {
		this._prevItem = this.findElem('item', 'cur', 'yes').prev();
		this.setMod(this._prevItem, 'cur', 'yes');
	},
	_moveRight: function() {
		this._nextItem = this.findElem('item', 'cur', 'yes').next();
		this.setMod(this._nextItem, 'cur', 'yes');
	}

}));

});

