modules.define('album', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('album', {
    onSetMod : {
        'js' : {
            'inited': function() {
                this.bindTo('scroll', function(e) {
                    this.style.left = scrollLeft() + "px";
                });
            }
        }
    }
}));

});