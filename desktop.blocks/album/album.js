modules.define('album', ['i-bem__dom', 'jquery', 'cookie'], function(provide, BEMDOM, $, cookie) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this._cur = this.findElem('item', 'cur', 'yes');
				if (this._cur.length > 0) {
				} else if (cookie.get('mycookie')) {
					var memImg = cookie.get('mycookie');
					var albLength = this.findElem('item').length;
					for (i = 0; i < albLength; i++) {
						var searchItem = this.findElem('item').eq(i);
						var itemImg = searchItem.children(0).attr('src');
						if (itemImg.indexOf(memImg) != -1) {
							this.setMod(searchItem, 'cur', 'yes');
							break;
						}
					}
				} else {
					this.setMod(this.findElem('item').eq(0), 'cur', 'yes');
				}
				this.bindTo('item', 'click', function(e) {
					this.setMod($(e.currentTarget), 'cur', 'yes');
					cookie.set('mycookie', this.findElem('item', 'cur', 'yes').eq(0).children(0).attr('src'));
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
		cookie.set('mycookie', this.findElem('item', 'cur', 'yes').eq(0).children(0).attr('src'));
	},
	_moveRight: function() {
		this._nextItem = this.findElem('item', 'cur', 'yes').next();
		this.setMod(this._nextItem, 'cur', 'yes');
		cookie.set('mycookie', this.findElem('item', 'cur', 'yes').eq(0).children(0).attr('src'));
	}

}));

});

