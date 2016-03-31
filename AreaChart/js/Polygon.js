G.Polygon= function()
{

	var _array=arguments;
    var _fill="none";
	var _stroke="black";
	var _stroke_width="1.5";

	//private render method
	var render=function()
	{
		var polyGonCoordinats='<polygon points="';
        console.log(_array.length);
        
       for(var i=0;i<_array.length;i++)
       {
           if(i!=_array.length-1) 
                polyGonCoordinats+=_array[i]+', ';
            else
                 polyGonCoordinats+=_array[i]+' "';
       }
        var polyGonStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
        var polygon=polyGonCoordinats+polyGonStyle;
		console.log(polygon);
		return polygon;
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
G.Polygon.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}
