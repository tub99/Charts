//Chart{name//say "World Population"}
function Chart(name)
{
	var _chartName=name;

		this.display=function()
		{
			console.log("Chart name is"+_chartName);
		}
		this.setChartName=function(nm)
		{
			_chartName=nm;
		}
		this.getChartName=function()
		{
			return _chartName;
		}
		this.display();
		//Private methods-->should not be returned.
		return this.getChartName();//these are the public methods hence we are returning them
		return this.setChartName();
}