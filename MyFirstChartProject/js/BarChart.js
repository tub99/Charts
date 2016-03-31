

function BarChart(width)
{
	barObjectArray=[];
	var _width=width;
	var eventDelegate;
	Chart.call(this,"MyBarChart");
	this.getWidth=function()
	{
		return _width;
	}
	this.addHoverEventHandler=function(param)
	{
		eventDelegate=param;
		//rectangle.addHoverEventHandler();
	}

	this.handleHoverEvent=function(mouseX,mouseY)//This one should be private.. Change Later!
	{
		
		if(eventDelegate==null)
		{
		 	////document.getElementById("toolkit").style.display = "block";
        	//document.getElementById("toolkit").innerHTML= "67% Occupany...,";
        }
        else
        	eventDelegate.handleHoverEvent(mouseX,mouseY);
	}

};
BarChart.prototype=Object.create(Chart.prototype);
//BarChart{x-axis division,y-axis division,width of bar} extends Chart
//[craete()//no of bars+set values to all bars,addBar(value,tooltip,color),removeBar(id),update(id,value,tooltip,color),draw()-->calls Bar draw()]
BarChart.prototype.create=function()
{


   // 

/*

	for(var i=0;i<barObjectArray.length;i++)
	{
		// set x,y,w,h. Do all calculation here.. set all rectangle dimensions
		var bar=barObjectArray[i];
		bar.setX();
		bar.setY();

		bar.addHoverEventHandler(this);//all bar objects has hover effect 
		barch
	}
*/





	//parse Json and get the number of data elemnts=#bars
	
	var _jsonData=getInfoFromJsonData();
	var _noOfbars=_jsonData.data.length;
	//set values to the bars
	var _id=[];
	var _label=[];
	var _value=[];
	var _tooltext=[];
	var _colorArray=["#00008B","#800000","#228B22","#FF4500","#9400D3","#FFD700","#808080","#00FF00","#D8BFD8","#CD5C5C"];
	console.log("The no of bars is"+_noOfbars);
	this.setBar=function()
	{
		for(var i=0;i<_noOfbars;i++)
		{
			_id[i]="#bar"+i;
			_label[i]=_jsonData.data[i].label;
			_value[i]=_jsonData.data[i].value;
			_tooltext[i]=_jsonData.data[i].tooltext;
			this.addBar(_id[i],_label[i],_value[i],_tooltext[i],_colorArray[i]);
		}
		console.log("In the set bar method the value of #bars="+barObjectArray.length)
	}
	
	this.getBar=function()
	{
		return barObjectArray;
	}
	
	return this.setBar();
	return this.getBar();
	
};

// Adding individual barObject to the barObjectArray Collection
BarChart.prototype.addBar=function(_id,_label,_value,_tooltip,_color)
{
	//console.log("Value is"+value+" ToolTip is"+tooltip+" Color is"+color);
	
	var barObject={id:_id,label:_label,value:_value,tooltext: _tooltip,color:_color};
	barObjectArray.push(barObject);
};
BarChart.prototype.removeBar=function(id)
{
	console.log();
};
BarChart.prototype.update=function(id,value,tooltip,color)
{
	console.log();
};
BarChart.prototype.update=function(id,value,tooltip,color)
{
	console.log();
};

// Calls the draw() method of Bar class
BarChart.prototype.draw=function()

{
     //Call create method
   //  create();

	var _elementId=document.getElementById("#myDiv")
	var graphics = new G.Scene(_elementId,1000,1000);
	var rectString="";
	var originx=40,originy=150,lengthx=500,lengthy=260;
	//drawing the axis
	var axis=new Axis();
	rectString+=axis.drawAxis(originx,originy,lengthx,lengthy);






	var tempx=50;
	var tempy=220;
	var barCollection=this.getBar();
	//function Bar(id,x,y,ht,wd,tooltext,color)
	console.log("tempX-value is"+tempx);
	
	var width=Number(this.getWidth());
	console.log("THE no of bars is "+this.getBar().length);
	
	for(var i=0;i<barCollection.length;i++)
	{
		
		var val=barCollection[i].value/1000;
		console.log("value of height is :"+val);
		console.log("My label is "+barCollection[i].label+"  "+barCollection[i].tooltext);
		
		//this.draw=function(_x,_y_ht,_wd,color)
		var myBar=new Bar(tempx,tempy,val,this.getWidth(),barCollection[i].color,lengthy,barCollection[i].label);
		
		rectString+=myBar.draw();
		//Generating labels of bars
		tempx=50+tempx+10;
		console.log(tempx);
	}

	rectString+="</g>";
	console.log(rectString);
	


	console.log(graphics.render(rectString));

	//myBar.draw();
	
};
