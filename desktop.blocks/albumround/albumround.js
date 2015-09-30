modules.define('albumround', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
				var albumBlock = this.findBlockInside('album'),
				$albumBlock = albumBlock.domElem;
                this.bindTo('mousewheel DOMMouseScroll', function(e) {
					e.preventDefault();
					console.log("Wheel " + e.originalEvent.wheelDelta);
					console.log("Detail " + e.originalEvent.detail);
					console.log("deltaY " + e.originalEvent.deltaY);
				});
            }
        }
    }
	
}));

});