
function ChartManager()
{
	//create your collectionData
	var infoArray=[];
	var originX=25,originY=500;
	var ultimate_svg="";
	var svg="";
	
	//PopulateInfo Array
	this.populateInfoArray=function()
	{
		var myjson=getInfoFromJsonData();
		infoArray=myjson.data;
		

	}
	this.getInfoArray=function()
	{
		return infoArray;
	}
	//drawAxis
	this.drawAxis=function()	
	{

		this.populateInfoArray();	
		var info=this.getInfoArray();	
		//Pass relevant 
		var axis=new Axis(originX,originY,info);
		ultimate_svg+=axis.draw();

	}
	this.drawArea=function()
	{
		this.populateInfoArray();	
		var info=this.getInfoArray();	
		var area=new Area(originX,originY,info);
		ultimate_svg+=area.drawArea();
	}
	this.drawValueDisplay=function()
	{
		var valDisplay=new ValDisplay();
	}
	this.AnchorDisp=function()
	{
		var vd=new ValDisplay(originX,originY,infoArray);
		vd.trackAnchor();
		ultimate_svg+=vd.getAnchorSVG();
	}
	//drawChart
	this.getSVG=function()
	{
		return svg;
	}
	this.createChart=function()
	{
		var _elementId=document.getElementById("#myDiv");
		var graphics = new G.Scene(_elementId,700,700);
		this.drawAxis();
		this.drawArea();
		this.AnchorDisp();
		svg+=graphics.render(ultimate_svg);
	}

}