G.Path= function()
{

	//var _id=id;
    var _array=arguments;
    var _fill="transparent";
	var _stroke="black";
	var _stroke_width="0.5";

	//private render method
	var render=function()
	{
        var pathCoordinats='<path d="';
        console.log(_array.length);
        
       for(var i=0;i<_array.length;i++)
       {
           if(i!=_array.length-1) 
                pathCoordinats+=_array[i]+', ';
            else
                 pathCoordinats+=_array[i]+' "';
       }
        var pathStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
        var path=pathCoordinats+pathStyle;
        return path;
	}
	//list of public functions 
	this.fill=function(val)
	{
		_fill=val;
	}
	this.stroke=function(val)
	{
		_stroke=val;
	}
	this.stroke_width=function(val)
	{
		_stroke_width=val;
	}
	this.output=function()
	{
		return render();
	}

}
G.Path.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}