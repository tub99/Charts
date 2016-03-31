var G = function(el){
        this._el = document.querySelector(el);
} || {};//G is a namespace Object

G.Scene = function(el,w,h){
    this.obj_str = "";
    this._w = w || "100%";
    this._h = h || "100%";

    if(typeof el != "string" || el == "" || this._el == "")//checking from G namespace
    {
       document.write('<div class="canvas"></div>');
    }
    console.log(this._e1);
    var element = this._el || el || ".canvas";
    this._el = document.querySelector(element);
        
}

G.Scene.prototype.add = function(obj){
    this.obj_str += obj.output();
}
G.Scene.prototype.render = function(val)
{
    this._svgval = val || this.obj_str;
    console.log(this._svgval)
    return this._el.innerHTML = '<svg version="1.1" baseProfile="full" width="'+this._w+'" height="'+this._h+'"     xmlns="http://www.w3.org/2000/svg">'+this._svgval+'</svg>';
}

