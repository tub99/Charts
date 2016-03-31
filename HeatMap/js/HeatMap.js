function HeatMap()
{
	
	//Canvas parameters
	var svgNS="http://www.w3.org/2000/svg",svgElement,canvas,table;
	//Axis parameters
	var originX,originY,xDiff,yDiff,xAxisLength,yAxisLength,scaleFactor,yAxisLabel=[],xAxisLabel=[];
	//Data parameters
	var mapData,rowData=[],colData=[],mapDataArray=[];

	//Map parameters

	//Chart Attribues
	var chartAttributes={};
	
	

	this.setMapData=function(obj)
	{
		mapData=obj;
	}
	var createCanvas=function()
	{
		svgElement=document.createElementNS(svgNS,"svg");
		svgElement.setAttributeNS(null,"width",700);
		svgElement.setAttributeNS(null,"height",450);
		svgElement.setAttributeNS(null,"id","mySvg");
		svgElement.setAttributeNS(null,"transform","translate(0,50)");
		
		//svgElement.appendChild(table);
	}
	var generateAxisParameters=function()
	{
		var yAxisData=mapData.rows.row;
		var xAxisData=mapData.columns.column;
		originY=yAxisLength-originY;
		xDiff=xAxisLength/xAxisData.length,yDiff=yAxisLength/yAxisData.length;
		var x1,y1,j=0,k=yAxisData.length-1;
		for(var i=0;i<yAxisData.length;i++)
		{
			if(i==0)
			{
				 x1=originX;
				 y1=yAxisLength;
				 var txtData=yAxisData[i].id;
				 var obj={X1:x1,Y1:y1,Lablel:txtData};
				 yAxisLabel.push(obj);
				 rowData[j]=yAxisData[i].id;
				 j++
				 rowData[j]=k;
				 j++;k--;
			}	
			else
			{
				y1=y1-yDiff;
				 var txtData=yAxisData[i].id;
				 var obj={X1:x1,Y1:y1,Lablel:txtData};
				 yAxisLabel.push(obj);
				 rowData[j]=yAxisData[i].id;
				 j++;
				 rowData[j]=k;
				 j++;k--;
			}
		}
		var l=0;
		for(var i=0;i<xAxisData.length;i++)
		{
			if(i==0)
			{
				 x1=originX;
				 y1=yAxisLength;
				 var txtData=xAxisData[i].id;
				 var obj={X1:x1,Y1:y1,Lablel:txtData};
				 xAxisLabel.push(obj);
				 colData[l]=xAxisData[i].id;
				 l++;
				 colData[l]=i;
				 l++;
			}	
			else
			{
				x1=x1+xDiff;
				 var txtData=xAxisData[i].id;
				 var obj={X1:x1,Y1:y1,Lablel:txtData};
				 xAxisLabel.push(obj);
				 colData[l]=xAxisData[i].id;
				 l++
				 colData[l]=i;
				 l++;
			}
		}



		console.log(yAxisLabel,xAxisLabel,colData,rowData);
	}

	var generateMapParameters=function()
	{
		var map=mapData.dataset[0].data;
		var k=0,x1,_y1,label;
		for(var i=0;i<yAxisLabel.length;i++)
		{
			for(var j=0;j<xAxisLabel.length;j++)
			{
				x1=xAxisLabel[j].X1;
				_y1=(yAxisLabel[i].Y1-yDiff);
				height=yDiff;
				width=xDiff;
				value=mapData.dataset[0].data[k].value;
				obj={X1:x1,Y1:_y1,HT:height,WD:width,VALUE:value};
				mapDataArray.push(obj);
				console.log(_y1+"MapParameters "+mapDataArray[k].VALUE+" x1:"+mapDataArray[k].WIDTH+" y1:"+mapDataArray[k].Y1);
				k++;
			}
			
		}
		


	}
	var generateChartAttributes=function()
	{
		var chartData=mapData.chart;
		chartAttributes={cap:chartData.caption,sub:chartData.subcaption};
	}
	var drawAxis=function()
	{
		var xAxisGroup=document.createElementNS(svgNS,"g");
		xAxisGroup.setAttributeNS(null,"id","xAxisGroup");
		xAxisGroup.setAttributeNS(null,"class","elements");
		for(var i=0;i<xAxisLabel.length;i++)
		{
			
			
			var mytext=document.createElementNS(svgNS,"text");
			mytext.setAttributeNS(null,"x",xAxisLabel[i].X1+10);
			mytext.setAttributeNS(null,"y",xAxisLabel[i].Y1+15);
			mytext.setAttributeNS(null,"stroke","black");
			var txt=document.createTextNode(xAxisLabel[i].Lablel);
			mytext.appendChild(txt);
			xAxisGroup.appendChild(mytext);
			
		}
		svgElement.appendChild(xAxisGroup);

		var yAxisGroup=document.createElementNS(svgNS,"g");
		yAxisGroup.setAttributeNS(null,"id","yAxisGroup");
		yAxisGroup.setAttributeNS(null,"class","elements");
		for(var i=0;i<yAxisLabel.length;i++)
		{
			
			
			var mytext=document.createElementNS(svgNS,"text");
			mytext.setAttributeNS(null,"x",yAxisLabel[i].X1-115);
			mytext.setAttributeNS(null,"y",yAxisLabel[i].Y1-20);
			mytext.setAttributeNS(null,"stroke","black");
			var txt=document.createTextNode(yAxisLabel[i].Lablel);
			mytext.appendChild(txt);
			yAxisGroup.appendChild(mytext);
		}

		svgElement.appendChild(yAxisGroup);

	}
	var drawMap=function()
	{
		var rectGroup=document.createElementNS(svgNS,"g");
		rectGroup.setAttributeNS(null,"id","rectGroup");
		rectGroup.setAttributeNS(null,"class","elements");
		for(var i=0;i<mapDataArray.length;i++)
		{
			
			rectGroup.setAttributeNS(null,"id","rectGroup");
			var myRect=document.createElementNS(svgNS,"rect");
			myRect.setAttributeNS(null,"x",mapDataArray[i].X1);
			myRect.setAttributeNS(null,"y",mapDataArray[i].Y1);
			myRect.setAttributeNS(null,"id",mapDataArray[i].VALUE);
			myRect.setAttributeNS(null,"height",mapDataArray[i].HT);
			myRect.setAttributeNS(null,"width",mapDataArray[i].WD);
			var color=selectColor(mapDataArray[i].VALUE);
			myRect.setAttributeNS(null,"fill",color.col);
			myRect.setAttributeNS(null,"fill-opacity",color.opac);
			myRect.setAttributeNS(null,"stroke","black");
			myRect.setAttributeNS(null,"onmouseover","myOver(this)");
			myRect.setAttributeNS(null,"onmouseout","myOut(this)");


			var mytext=document.createElementNS(svgNS,"text");
			mytext.setAttributeNS(null,"x",mapDataArray[i].X1+15);
			mytext.setAttributeNS(null,"y",mapDataArray[i].Y1+30);
			mytext.setAttributeNS(null,"stroke","black");
			var txt=document.createTextNode(mapDataArray[i].VALUE);
			mytext.appendChild(txt);
			rectGroup.appendChild(myRect);
			rectGroup.appendChild(mytext);
			
		}
		
		svgElement.appendChild(rectGroup);
	}

	var selectColor=function(value)
	{
		console.log(val);
		var val=Number(value);
		var color="black",opacity=1;
		if(val>=0 && val<=20)
		{
			color="orange";
			if(val>=0 && val<=5)
				opacity=1;
			else if(val>5 && val<=10)
				opacity=0.7;
			else if(val >10 && val<=20)
				opacity=0.4;
		}
		else if(val>20 && val<=35)
		{
			color="yellow";
			if(val>20 && val<=25)
				opacity=1;
			else if(val>25 && val<=30)
				opacity=0.7;
			else if(val >30 && val<=35)
				opacity=0.4;
		}
		else if(val>35 && val<=100)
		{
			color="green";
			if(val>35 && val<=50)
				opacity=0.4;
			else if(val>50 && val<=80)
				opacity=0.7;
			else if(val >80 && val<=100)
				opacity=1;
		}
		var object={col:color,opac:opacity};
		console.log(object);
		return object;
	}
	var drawChartAttributes=function()
	{
			var mytext=document.createElementNS(svgNS,"text");
			mytext.setAttributeNS(null,"x",250);
			mytext.setAttributeNS(null,"y",40);
			mytext.setAttributeNS(null,"stroke","black");
			mytext.setAttributeNS(null,"stroke-width","0.5");
			var txt=document.createTextNode(chartAttributes.cap);
			mytext.appendChild(txt);
			svgElement.appendChild(mytext);

			///////////////////////////SUB-CAPTION///////////
			var mytext=document.createElementNS(svgNS,"text");
			mytext.setAttributeNS(null,"x",350);
			mytext.setAttributeNS(null,"y",60);
			mytext.setAttributeNS(null,"stroke","black");
			var txt=document.createTextNode(chartAttributes.sub);
			mytext.appendChild(txt);
			svgElement.appendChild(mytext);
	}
	var eventHandler=function(tool)
	{
		var toolKit=document.getElementById(tool);
		var col;
		window.myOver=function(item)
		{
			toolkit.style.display="block";
			toolkit.innerHTML=item.id;
			var prevCol=item.style.fill;
			col=prevCol;
			item.style.fill="white";
		}
		window.myOut=function(item)
		{
			toolKit.style.display="none";
			item.style.fill=col;

		}
		document.onmousemove = function(evt){text(evt)};
		var text=function(evt)
		{
			var mx=evt.clientX;
			var my=evt.clientY;
			toolKit.style.left=mx+15;
			toolKit.style.top=my+20;
		}

	}
	this.draw=function(oX,oY,xAxis,yAxis,divEl,tooltip)
	{
		originX=oX;
		originY=oY;
		xAxisLength=xAxis;
		yAxisLength=yAxis;
		canvas=document.getElementById(divEl);
		createCanvas();
		canvas.appendChild(svgElement);

		console.log(canvas,originY,originY,svgElement,xAxisLength,yAxisLength);
		generateAxisParameters();
		generateMapParameters();
		drawAxis();
		drawMap();
		generateChartAttributes();
		drawChartAttributes();
		eventHandler(tooltip);
	}

}