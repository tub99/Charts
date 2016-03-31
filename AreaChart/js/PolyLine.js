G.Polyline= function()
{

	var _array=arguments;
    var _fill="none";
	var _stroke="black";
	var _stroke_width="1.5";

	//private render method
	var render=function()
	{
		var polyLineCoordinats='<polyline points="';
        console.log(_array.length);
        
       for(var i=0;i<_array.length;i++)
       {
           if(i!=_array.length-1) 
                polyLineCoordinats+=_array[i]+', ';
            else
                 polyLineCoordinats+=_array[i]+' "';
       }
        var polyLineStyle=' fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
        var polyline=polyLineCoordinats+polyLineStyle;
		console.log(polyline);
		return polyline;
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
G.Polyline.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}