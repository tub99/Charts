G.Text= function(x1,y1,text)
{
	var _x1=x1;
	var _y1=y1;
	var _text=text;
	var _fill="transparent";
	var _stroke="black";
	var _stroke_width="0.5";
	var id;

	//private render method
	var render=function()
	{
		var text='<text id="'+id+'" x="'+_x1+'" y="'+_y1+'" fill="'+_fill+'" >'+_text+'</text>';
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
	this.setId=function(val)
	{
		id=val;
	}
	this.output=function()
	{
		return render();
	}

}
G.Text.prototype.action = function(action,func){
    var _ael = this.getId();
    var _action = action;
    document.getElementById(_ael).addEventListener(_action,func);
}