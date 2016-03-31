G.Circle = function(x,y,radius){
    var _id = "R"+Math.round(Math.random()*100);
    var _class = "";
    var _x = x;
    var _y = y;
    var _r=radius;
    var _fill= '#000';
    var _stroke = '#000';
    var _strokeWidth = 1;
    var _fillOpacity = 1;
    var _strokeOpacity = 1;

    if(typeof x == 'object' && typeof y == 'object'){
        _x = x.x;
        _y = x.y;

        _w = y.w;
        _h = y.h;
    }

    var render = function(){
        var cls = '';
        var _style = 'cx:'+_x+';cy:'+_y+';r:'+_r+'; fill:'+_fill+';stroke-width:'+_strokeWidth+';stroke:'+_stroke+';fill-opacity:'+_fillOpacity+'; stroke-opacity:'+_strokeOpacity+'';

       if(_class != "") cls ='class ="'+_class+'"';

        var circle = '<circle id="'+_id+'" '+cls+' style="'+_style+'" />';
        return circle;
    }

    this.setId = function(val){
        _id = val;
    }
    this.getId = function(){
        return _id;
    }
    this.setClass = function(val){
        _class = val;
    }
    this.getClass = function(){
        return _class;
    }
    this.fillColor = function(val){
        _fill = val;
    }
    this.strokeColor = function(val){
        _stroke = val;
    }
    this.strokeWidth = function(val){
        _strokeWidth = val;
    }
    this.fillOpacity = function(val){
        _fillOpacity = val;
    }
    this.strokeOpacity = function(val){
        _strokeOpacity = val;
    }

    this.output = function(){
        return render();
    }
}

G.Circle.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}
