//==============================
// * End Animation
//==============================
Sprite_Character.prototype.endAnimation = function() {
    if (this._animationSprites && this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
            sprite.remove();
        };
    };
};
