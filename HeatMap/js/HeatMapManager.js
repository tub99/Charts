function HeatMapManager()
{
	this.create=function(oX,oY,xAxis,yAxis,divel,tool)
	{
		var data=getHeatMapData();
		var heatObj=new HeatMap();
		heatObj.setMapData(data);
		heatObj.draw(oX,oY,xAxis,yAxis,divel,tool);

	}
}