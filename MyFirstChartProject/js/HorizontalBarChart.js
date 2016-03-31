var horizontalBarObjectArray=[];
function HorizontalBarChart(height)
{
	var _height=height;
	Chart.call(this,"MyBarChart");
	this.getHeight=function()
	{
		return _height;
	}
};
HorizontalBarChart.prototype=Object.create(Chart.prototype);
//BarChart{x-axis division,y-axis division,width of bar} extends Chart
//[craete()//no of bars+set values to all bars,addBar(value,tooltip,color),removeBar(id),update(id,value,tooltip,color),draw()-->calls Bar draw()]
HorizontalBarChart.prototype.create=function()
{
	//parse Json and get the number of data elemnts=#bars
	var _jsonData=getInfoFromJsonData();
	var _noOfbars=_jsonData.data.length;
	console.log(_noOfbars);
	//set values to the bars
	var _id=[];
	var _label=[];
	var _value=[];
	var _tooltext=[];
	var _colorArray=["#00008B","#800000","#228B22","#FF4500","#9400D3","#FFD700","#808080","#00FF00","#D8BFD8","#CD5C5C"];
	
	this.setHorizontalBar=function()
	{
		for(var i=0;i<_noOfbars;i++)
		{
			_id[i]="#bar"+i;
			_label[i]=_jsonData.data[i].label;
			_value[i]=_jsonData.data[i].value;
			_tooltext[i]=_jsonData.data[i].tooltext;
			this.addHorizontalBar(_id[i],_label[i],_value[i],_tooltext[i],_colorArray[i]);
		}
	}
	
	this.getHorizontalBar=function()
	{
		return horizontalBarObjectArray;
	}
	
	return this.setHorizontalBar();
	return this.getHorizontalBar();
};

HorizontalBarChart.prototype.addHorizontalBar=function(_id,_label,_value,_tooltip,_color)
{
	//console.log("Value is"+value+" ToolTip is"+tooltip+" Color is"+color);
	
	var horizontalbarObject={id:_id,label:_label,value:_value,tooltext: _tooltip,color:_color};
	console.log(horizontalbarObject);
	horizontalBarObjectArray.push(horizontalbarObject);
};
HorizontalBarChart.prototype.removeHorizontalBar=function(id)
{
	console.log();
};
HorizontalBarChart.prototype.update=function(id,value,tooltip,color)
{
	console.log();
};

HorizontalBarChart.prototype.draw=function(id,value,tooltip,color)
{
	//Bar myBar=new Bar();
	//myBar.draw();
	console.log();
};