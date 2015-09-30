/*modules.define('album', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
		'js': {
            'inited': function() {
                this.bindTo('click', function(e) {
                    var pos = this.offset();
					var posleft = pos.left;
					var postop = pos.top;
					if (this.hasMod('clicked')) {
						this.delMod('clicked');
						posleft = posleft + 50;
						this.Offset({ top: postop, left: posleft});
					} else {
					this.setMod('clicked');
					posleft = posleft - 50;
					this.Offset({ top: postop, left: posleft});
					}
					//this.animate({left: _scroll + "px"});
				});
            }
        }
    }
	
}));

});*/