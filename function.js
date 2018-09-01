
/**
* @author TPK - Projet Pozos
*/

var Module = function () {

    var initModule = function (nbre) {

    var html ='';  
    var numberModule = 6; // number module for gravitation
    
    // paramater module central
        var moduleCentralPositionLeft=500;
        var moduleCentralPositiontop=400;
        var modulePositionLeft='600px';
        var modulePositiontop='600px';
        var width=150;
        var height=150;

    // paramaters gravitated modules
        var widthModule= 50;
        var heightModule = 50;
        
    // general varable
        var radiusOfGravition=300;
        var initPosLeft=0;
        var initPostop=0;
    
        // Create central module
        html +='<div id ="moduleCentral" class="dropper" title="Info central">ModuleCentral</div>';

        // create the gravitation module
        for(var i=1;i<=nbre;i++)
        {

            html +='<div class="draggable" id ="myAnimation'+i+'" title=" The attribute of title of all balise can display lot of information">Test Div'+i+'</div>';
            /*$("#myAnimation").offset({
                            left : 250+initPosLeft*Math.sin((3.14*2/numberModule)*i),
                            top  : 250+initPostop*Math.cos((3.14*2/numberModule)*i)
                        });*/
        }

        // Create central module
        html +='<div id ="details" title="Info central">display details</div>';

        // set all of them in the main div
        $('#myContainer').html(html);

        

        // apply css to the gravatation module
        
        $('div div').css({
            width: widthModule,
            height: heightModule,
            border: '1px solid LightGray',
            'border-radius': '5px',		
            background: '#F5A9A9'
            
        });

        // apply css to the gravatation module
        
        $('#details').css({
            width: '300px',
            height: '200px',
            display: 'none',	
            background: '#81DAF5'
            
    });
    
    for(var i=1;i<=nbre;i++)
        {
            
            $("#myAnimation"+i).css({
                    position: 'absolute',
                    left : moduleCentralPositionLeft - widthModule/2 + radiusOfGravition*Math.sin(3.14*2*i/numberModule),
                    top  : moduleCentralPositiontop - heightModule/2 + radiusOfGravition*Math.cos(3.14*2*i/numberModule)
                });
        
        }

        $('div div').css('box-shadow','0px 0px 3px black');

        // apply css to the central module
        $('#moduleCentral').css({
            width: width,
            height: height,
            position: 'absolute',
            top : moduleCentralPositiontop - width/2,
            left: moduleCentralPositionLeft - height/2,
            background: 'green'
        });

    };
};