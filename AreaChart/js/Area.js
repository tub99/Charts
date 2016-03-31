function Area(originX,originY,infoArray)
{
	var initialX=originX+50;
	var initialY=originY+60;
	var oX=originX+50;
	var oY=originY+60;
	var areaString="";
	var polyCoord=[];
	var j=0;
	this.drawArea=function()
	{
		for(var i=0;i<infoArray.length*2;i++)
		{
			
			
			if(i%2!=0)
			{
				polyCoord[i]=oY-(new Number(infoArray[j].value))/2000;
				j++;
			}
			else
			{
				polyCoord[i]=oX;
				oX+=50;
			}
			if(i==(infoArray.length*2)-1)
			{
				polyCoord[i+1]=oX-50;
				polyCoord[i+2]=oY-15;
				polyCoord[i+3]=initialX;
				polyCoord[i+4]=initialY-15;
				polyCoord[i+5]=initialX
				polyCoord[i+6]=oY-(new Number(infoArray[0].value))/2000
				

			}
		}
			var polyarea=new G.Polyline(polyCoord);
			polyarea.stroke("#F7C214");
			polyarea.fill("#F7C214")
			areaString+=polyarea.output();
			return areaString;

		

	}
}