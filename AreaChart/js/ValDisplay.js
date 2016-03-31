function ValDisplay(originX,originY,infoArray)
{
	var initialX=originX+50;
	var initialY=originY+60;
	var oX=originX+50;
	var oY=originY+60;
	var dispString="";
	var ob={};
	var anchorString="";
	var month=[{myLabel:"Jan",val:0},
				{myLabel:"Feb",val:50},
				{myLabel:"Mar",val:100},
				{myLabel:"Apr",val:150},
				{myLabel:"May",val:200}


];
	this.trackAnchor=function()
	{
		for(var i=0;i<infoArray.length;i++)
		{
			if(infoArray[i].displayvalue!==undefined)
				this.drawAnchor(infoArray[i]);
		}
	}
	this.drawAnchor=function(el)
	{
		
		var xPos,myText;
		var radius=new Number(el.anchorradius);
		var y=initialY-(new Number(el.value)/2000);
		for(var k=0;k<month.length;k++)
		{
			if(month[k].myLabel==el.label)
			{
				xPos=month[k].val;
				myText=el.displayvalue;
				break;
			}
		}
		var circle=new G.Circle(initialX+xPos,y,radius);
		circle.strokeColor("#F7C214");
		circle.fillColor("white");
		var text=new G.Text(initialX+xPos,y-20,myText);

		text.fill("black");
		anchorString+=circle.output();
		anchorString+=text.output();
	}
	this.getAnchorSVG=function()
	{
		return anchorString;
	}
}