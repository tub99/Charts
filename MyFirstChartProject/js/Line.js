G.Line= function(x1,y1,x2,y2)
{
	var _x1=x1;
	var _y1=y1;
	var _x2=x2;
	var _y2=y2;
	var _fill="transparent";
	var _stroke="black";
	var _stroke_width="0.5";
	var _id="line";

	//private render method
	var render=function()
	{
		var line='<line id="'+_id+'" x1="'+_x1+'" y1="'+_y1+'" x2="'+_x2+'" y2="'+_y2+'" fill="'+_fill+'" stroke="'+_stroke+'" stroke-width="'+_stroke_width+'" />';
		console.log(line);
		return line;
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
	  this.setId=function(id)
    {
        _id=id;
    }

}