//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

BCHTIX = window.BCHTIX || {};
BCHTIX.Index = window.BCHTIX.Index || {};

BCHTIX.Index = function StaffPlan$BCHTix$Index()
{
    this._seatsTemplate = $("#btix-seating-chart").template();
    this._spinner = new Spinner();
    this._Initialize();
}

BCHTIX.Index.prototype = 
{
	_grid: [],
	_spinner: {},
	_seatsTemplate: {},
	_seatsData: {},
	_spinner: {},
	
    _Initialize: function BCHTix$Initialize()
    {
        this._AppendSpinner();
        BCHTix.AjaxWrapper("https://bchflip.com:5000/seating_chart",
            null,
            $.proxy(this._LoadResponse, this));
    },

    _AppendSpinner: function BCHTix$Append$Spinner(appendTo)
    {
        appendTo = appendTo || document.body;
        this._spinner.spin();
        $(appendTo).append(this._spinner.el);
    },

    _StopSpinner: function BCHTix$Stop$Spinner()
    {
        if (this._spinner.el)
        {
            this._spinner.stop();
        }
    },

    _LoadResponse: function LoadResponse(response)
    {
        this._seatsData = response.seating_chart;
        $.tmpl(this._seatsTemplate, { Sections: this._seatsData }).appendTo("body");
        this._BindFunctions()
        this._StopSpinner();
    },
	
	_BindFunctions: function BCHTix$Bind$Functions()
	{
	    $(".seat-selection").click($.proxy(this._SeatSelectButtonClick, this));
	},

	_SeatSelectButtonClick: function BCHTix$Seat$Select$Button$Click(target)
	{
	    var div = $(target.currentTarget).closest("div");
	    this._AppendSpinner(div);
	    BCHTix.AjaxWrapper("https://bchflip.com:5000/address",
            null,
            $.proxy(this._BCHAddressReceived, this),
            $.proxy(this._ErrorHandler, this),
            {type: "POST"});
	},

	_BCHAddressReceived: function BCHTix$BCH$Address$Recevied(result)
	{
	    this._StopSpinner();

	    if (!result.created)
	    {
	        this._ErrorHandler();
	        return;
	    }

	    $("#modalAddress").empty();
	    $("#modalAddress").append('<img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=%20bitcoincash:' + result.address +
            '?amount=" /><p>' + result.address + '</p>');
	    $("#seatSelection").modal("show");
	},

    _ErrorHandler: function BCHTix$Error$Handler()
    {
        alert("O no, something went wrong");
    }
}
