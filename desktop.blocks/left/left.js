modules.define('left', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

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
		if (!this._isFirst()) {
			this.domElem.css({display: 'inline'});
		}
	},
	_hide: function() {
		this.domElem.css({display: 'none'});
	},
	_isFirst: function() {
		var firstItem = this.findBlockOutside('viewer').findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').findElem('item').eq(0).attr('class');
		return (firstItem.indexOf('cur_yes') != -1);
	}
}));

});