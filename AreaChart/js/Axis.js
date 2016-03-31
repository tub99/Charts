function Axis(originX,originY,infoArray)
{

	var oX=originX+50;
	var oY=originY+60;
	var axisString="";
	this.draw=function()
	{
		
		
		for(var i=0;i<infoArray.length;i++)
		{
			var xAxis=new G.Text(oX,oY,infoArray[i].label);
			xAxis.setId(infoArray[i].label);
			xAxis.fill("black");
			axisString+=xAxis.output();
			
			oX+=50;

		}
		var orX=originX;
		var orY=500;
		var num=120;

		for(var i=0;i<5;i++)
		{
			
			var txt=num+"K";
			var yAxis=new G.Text(orX,orY,txt);
			yAxis.setId(infoArray[i].value);
			yAxis.fill("black");
			axisString+=yAxis.output();
			orY-=60;
			num=num+120;
		}
		
		return axisString;
	}
	this.getAxisSvg=function()
	{
		return axisString;
	}
}