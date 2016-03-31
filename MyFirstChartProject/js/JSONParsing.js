var jsonData={
    "chart": {
        "caption": "Half Yearly Revenue Analysis",
        "yaxisname": "Revenue",
        "numberprefix": "$",
        "yaxismaxvalue": "250000",
        "showborder": "0",
        "theme": "fint"
    },
    "data": [
        {
            "label": "Jul",
            "value": "150000",
            "tooltext": "Occupancy: 67%{br}Revenue:$150k{br}3 conferences hosted!"
        },
        {
            "label": "Aug",
            "value": "130000",
            "tooltext": "Occupancy: 64%{br}Revenue:$130k{br}Lean summer period!"
        },
        {
            "label": "Sep",
            "tooltext": "Occupancy: 44%{br}Revenue: $80k{br}Reason: Renovating the Lobby",
            "value": "95000"
        },
        {
            "label": "Oct",
            "value": "170000",
            "tooltext": "Occupancy: 73%{br}Revenue:$170k{br}Anniversary Discount: 25%"
        },
        {
            "label": "Nov",
            "value": "155000",
            "tooltext": "Occupancy: 70%{br}Revenue:$155k{br}2 conferences cancelled!"
        },
        {
            "label": "Dec",
            "value": "230000",
            "tooltext": "Occupancy: 95%{br}Revenue:$230k{br}Crossed last year record!"
        }
    ]
};
function getInfoFromJsonData()
{
	return jsonData;
}