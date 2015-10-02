modules.define('viewer', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
				var leftElem = this.findBlockInside('left'),
				$leftElem = leftElem.domElem;
				var rightElem = this.findBlockInside('right'),
				$rightElem = rightElem.domElem;
                this.bindTo('mouseover', function() {
					if (!this._isFirst()) {
						$leftElem.css({display: 'inline'});
					}
					if (!this._isLast()) {
						$rightElem.css({display: 'inline'});
					}
					});
				this.bindTo('mouseout', function() {
					$leftElem.css({display: 'none'});
					$rightElem.css({display: 'none'});
				});
			}
        }
    },
	_isFirst: function() {
		var firstItem = this.findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').findElem('item').eq(0).attr('class');
		return (firstItem.indexOf('cur_yes') != -1);
	},
	_isLast: function() {
		var lastItem = this.findBlockOutside('page__inner').findBlockInside('albumround').findBlockInside('album').findElem('item').eq(-1).attr('class');
		return (lastItem.indexOf('cur_yes') != -1);
	}

	
}));

});