modules.define('center', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
				this._getCurImage();
				this.findBlockOutside('viewer').findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').on(
					'click',
					this._getCurImage,
					this);
				this.findBlockOutside('viewer').findBlockInside('left').on(
					'click',
					this._getCurImage,
					this);
				this.findBlockOutside('viewer').findBlockInside('right').on(
					'click',
					this._getCurImage,
					this);
			}
		}
    },
	_getCurImage: function() {
		var curItem = this.findBlockOutside('viewer').findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').findElem('item', 'cur', 'yes').eq(0).children(0).attr('src');
		var cntImg = this.findBlockInside('image').domElem.attr({'src' : curItem});
	}
	
}));

});