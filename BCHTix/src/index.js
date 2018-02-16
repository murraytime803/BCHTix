//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

window.BCHTIX = window.BCHTIX || {};
window.BCHTIX.Index = window.BCHTIX.Index || {};

BCHTIX.Index = function StaffPlan$BCHTix$Index()
{
    this._seatsTemplate = $("#btix-seating-chart").template();
    this._Initialize();
}

BCHTIX.Index.prototype = 
{
	_grid: [],
	_spinner: {},
	_seatsTemplate: {},
	_seatsData: {},
	
    _Initialize: function BCHTix$Initialize()
    {
        window.BCHTix.AjaxWrapper("https://bchflip.com:5000/seating_chart", null, $.proxy(this._LoadResponse, this))
    },
    _LoadResponse: function LoadResponse(response)
    {
        this._seatsData = response.seating_chart
        console.log(this._seatsData)
        console.log(this._testSeatData())
        $.tmpl(this._seatsTemplate, { Sections: this._seatsData }).appendTo("body");
        this._BindFunctions()
    },

	_testSeatData: function BCHTIX$Test$Seat$Data()
	{
		
	    var data = [{
	        SectionID: 1,
	        Rows: [
            {
                RowID: 1,
                Seats:
                    [
                        {
                            ID: 1,
                            Occupied: true
                        },
                        {
                            ID: 2,
                            Occupied: false
                        },
                        {
                            ID: 3,
                            Occupied: false
                        }
                    ]
            },
            {
                RowID: 2,
                Seats:
                    [
                        {
                            ID: 4,
                            Occupied: false
                        },
                        {
                            ID: 5,
                            Occupied: false
                        },
                        {
                            ID: 6,
                            Occupied: true
                        }
                    ]

            },
            {
                RowID: 3,
                Seats:
                    [
                        {
                            ID: 7,
                            Occupied: false
                        },
                        {
                            ID: 8,
                            Occupied: false
                        },
                        {
                            ID: 9,
                            Occupied: true
                        }
                    ]
            }
	        ]
	    },
        {
            SectionID: 2,
            Rows:
            [{
                RowID: 1,
                Seats:
                    [
                        {
                            ID: 10,
                            Occupied: false
                        },
                        {
                            ID: 11,
                            Occupied: true
                        },
                        {
                            ID: 12,
                            Occupied: false
                        }
                    ]
            },
            {
                RowID: 2,
                Seats:
                    [
                        {
                            ID: 13,
                            Occupied: true
                        },
                        {
                            ID: 14,
                            Occupied: false
                        },
                        {
                            ID: 15,
                            Occupied: true
                        }
                    ]
            },
            {
                RowID: 3,
                Seats:
                    [
                        {
                            ID: 16,
                            Occupied: true
                        },
                        {
                            ID: 17,
                            Occupied: false
                        },
                        {
                            ID: 18,
                            Occupied: false
                        }
                    ]
            },
            {
                RowID: 4,
                Seats:
                    [
                        {
                            ID: 19,
                            Occupied: true
                        },
                        {
                            ID: 20,
                            Occupied: true
                        },
                        {
                            ID: 21,
                            Occupied: false
                        }
                    ]
            }]

        }]

		return data;
		
	},
	
	_BindFunctions: function BCHTix$Bind$Functions()
	{
	    $(".seat-selection").click($.proxy(this._SeatSelectButtonClick, this));
	},
	_SeatSelectButtonClick: function BCHTix$Seat$Select$Button$Click(target)
	{
	    $("#seatSelection").modal("show");
	}
}
