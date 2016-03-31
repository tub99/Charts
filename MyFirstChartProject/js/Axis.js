function Axis()
{

	this.drawAxis=function(originx,originy,lengthx,lengthy)
	{
		
		var lineString="";
		//drawing xAxis
		var lineX=new G.Line(originx,lengthy,lengthx,lengthy);
		lineX.setId("lineX");
		lineX.stroke_width(3);
		lineString+=lineX.output();

		//drawing x-axis text : G.Text = function(x1,y1,text)
		var xText=new G.Text(lengthx/2,lengthy+10,"x-axis");
		xText.stroke_width(2);
		lineString+=xText.output();

		//drawing x-axis text : G.Text = function(x1,y1,text)
		var yText=new G.Text(originx-41,50,"y-axis");
		yText.stroke_width(2);
		lineString+=yText.output();

		//drawing y axis
		var lineY=new G.Line(originx,lengthy,originx,-lengthy);
		lineY.setId("lineY");
		lineY.stroke_width(3);
		lineString+=lineY.output();

		//Creating y-axis divisions
		/*
		var y_div="";
		var x1=originx-5;
		var y1=lengthy-5;
		var x2=originx+5;
		y2=lengthy-5;
		for(var i=0;i<20;i++){
			console.log(y1+" THE Y_AXIS  "+y2);
			var yDivision=new G.Line(x1,x2,y1,y2);
			yDivision.stroke_width(2);
			y_div+=yDivision.output();
			y1=y1-20;
			y2=y2-20;

		}

		lineString+=y_div;
*/
		return lineString;
	}
}