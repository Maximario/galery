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
					$leftElem.css({display: 'inline'});
					$rightElem.css({display: 'inline'});
					});
				this.bindTo('mouseout', function() {
					$leftElem.css({display: 'none'});
					$rightElem.css({display: 'none'});
				});
			}
        }
    }
}));

});