modules.define('albumround', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
				var albumBlock = this.findBlockInside('album'),
				$albumBlock = albumBlock.domElem;
                this.bindTo('mousewheel DOMMouseScroll', function(e) {
					e.preventDefault();
					var leftint = parseInt($albumBlock.css('left').slice(0, -2));
					rightlimit = parseInt(this.domElem.css('width').slice(0, -2)) - parseInt($albumBlock.css('width').slice(0, -2));
					if ((leftint <= 0) || (leftint >= rightlimit)) {
						var delta = (e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta/120*70 : e.originalEvent.detail/(-3)*70) || false;
						leftint += delta;
						leftint = (leftint > 0 ? 0 : leftint);
						leftint = (leftint < rightlimit ? rightlimit : leftint);
						$albumBlock.animate({left: leftint}, 30);
					}
				});
            }
        }
    }
	
}));

});