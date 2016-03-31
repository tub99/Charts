G.Text = function(x1,y1,text)
{
	var _x1=x1;
	var _y1=y1;
	var _text=text;
	var _fill="black";
	var _stroke="black";
	var _stroke_width="0.5";
	var tx=0;
    var ty=0;

	//private render method
	var render=function()
	{
		var text='<text x="'+_x1+'" y="'+_y1+'" fill="'+_fill+'" transform=" translate('+tx+','+ty+')" >'+_text+'</text>';
		console.log(text);
		return text;
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
	    this.translate=function(xVal,yVal)
    {
        tx=xVal;
        ty=yVal;
    }

}
G.Text.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}