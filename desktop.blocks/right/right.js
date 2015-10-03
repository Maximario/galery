modules.define('right', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
				this.bindToWin('mouseover', function() {
					this._show();
				});
				this.bindToWin('mouseout', function() {
					this._hide();
				});
                this.bindTo('mouseover', function() {
					this.domElem.css({backgroundColor: '#eee'});
				});
				this.bindTo('mouseout', function() {
					this.domElem.css({backgroundColor: '#ccc'});
				});
				this.bindTo('click', function(e) {
					this.emit('click');
				});
			}
        }
    },
	_show: function() {
		if (!this._isLast()) {
			this.domElem.css({display: 'inline'});
		}
	},
	_hide: function() {
		this.domElem.css({display: 'none'});
	},
	_isLast: function() {
		var lastItem = this.findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').findElem('item').eq(-1).attr('class');
		return (lastItem.indexOf('cur_yes') != -1);
	}
}));

});