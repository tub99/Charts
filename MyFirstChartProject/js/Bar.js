
function Bar(_x,_y,_ht,_wd,color,y_axis,label)
{
	//BarChart.call(this,wd);//super();
	var rectangle=new G.Rectangle(_x,_y,_ht,_wd);
	//rectangle.setUserData(this);
	var eventDelegate;
	

	this.draw=function()
	{
		
		//Rectangular Bar
		var rectString='<g id="bars" transform="translate(10,0)">',labelString="",x_axisLabels="";//5,6,7
		
		rectangle.setId("rect"+(++count));
		rectangle.fillColor(color);
	
		var move=y_axis-(_y+_ht)-5;
		rectangle.translate(0,move);
		rectString+=rectangle.output();//1-->lost

		
		//Calculating Height Value
		var _text=new G.Text(_x+5,_y-5,_ht);
		_text.translate(0,move);
		labelString+=_text.output();//2

		//X_axis label
		var _xLabel=new G.Text(_x+5,_y+30+move+_ht,label);
		_xLabel.fill("blue");
		x_axisLabels+=_xLabel.output();//3

		rectString=rectString+labelString+x_axisLabels;//4



		return rectString;
			
	}
	/*
	this.addHoverEventHandler=function(val)
	{
		eventDelegate=val;
		rectangle.addHoverEventHandler();
	}
	this.handleHoverEvent=function(mouseX,mouseY)//This one should be private.. Change Later!
	{
		 //document.getElementById("toolkit").style.display = "block";
        //document.getElementById("toolkit").innerHTML= "67% Occupany...,";
        eventDelegate.handleHoverEvent(mouseX,mouseY);
	}
	this.setX()
	*/
};
count=0;