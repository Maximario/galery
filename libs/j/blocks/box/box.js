modules.define('box', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('box', {}, {
        live : function() {
            this.liveBindTo('switcher', 'click', function() {
                this.toggleMod('closed', 'yes');
            });
        }
    }));
})


