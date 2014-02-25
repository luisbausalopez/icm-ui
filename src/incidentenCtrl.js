



/*
 * Deze angular control gaat over de lijst met incidenten in /incidenten
 */
icm.controller('IncidentenCtrl' ,['$scope', 'Core', 'Beelden', function($scope, Core, Beelden){
    console.log('creating IncidentenCtrl');
    
    $scope.project = Core.project(); //Get current project
    var store = Core.projectStore(); //Get projectstore
    $scope.projecten = Core.projects(); //Get list of projects
    //Bind storechange to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
            $scope.projecten = Core.projects();
        })
    })
    //Set the current project
    $scope.setProject = function(project) {
        //$scope.incident = project.data('name')||project.id();
        Beelden.beelden = [
        { beeld: 'situatie', title: 'Situatie', timestamp: 0, beeldonderdeel: 
            [   {id:'situatie', title: 'Situatie'}
            ]}    
        ,{ beeld: 'meldingen', title: 'Meldingen', timestamp: 0, beeldonderdeel: 
            [   {title:'Tijdlijn',id:'Tijdlijn'},
                {title:'Meldingen beeld',id:'meldingen' },
                {title: 'Acute meldingen', id:'acuut'},
                {title: 'Situatie Plaats Incident',id: 'spi'} ,
                {title: 'Genomen acties',id:'acties' }
            ]}
        ,{ beeld: 'wat', title: 'Operationeel (WAT)', timestamp: 0, beeldonderdeel: 
            [   {title:'Tijdlijn',id:'tijdlijn'},
                {title:'Beeldvorming',id:'beeldvorming'},
                {title:'Oordeelsvorming',id:'oordeelsvorming'},
                {title:'Besluitsvorming',id:'besluitsvorming'},
                {title:'Knelpunten',id:'knelpunten'},
                {title:'Acties/maatregelen',id:'maatregelen'},
                {title:'Veiligheid medewerkers',id:'veiligheid'},
                {title:'Prognose (verwachting)',id:'prognose'}
            ]}
        ,{ beeld: 'wot', title: 'Tactisch (WOT)', timestamp: 0, beeldonderdeel:
            [   {title:'Tijdlijn',id:'tijdlijn'},
                {title:'Beeldvorming',id:'beeldvorming'},
                {title:'Oordeelsvorming',id:'oordeelsvorming'},
                {title:'Besluitsvorming',id:'besluitsvorming'},
                {title:'Knelpunten',id:'knelpunten'},
                {title:'Acties/maatregelen',id:'maatregelen'},              
                {title:'Prognose (verwachting)',id:'prognose'}
            ]}              
        ,{ beeld: 'wbt', title: 'Strategisch (WBT)', timestamp: 0, beeldonderdeel: 
            [   {title:'Tijdlijn',id:'tijdlijn'},
                {title:'Beeldvorming',id:'beeldvorming'},
                {title:'Oordeelsvorming',id:'oordeelsvorming'},
                {title:'Besluitsvorming',id:'besluitsvorming'},
                {title:'Knelpunten',id:'knelpunten'},
                {title:'Acties/maatregelen',id:'maatregelen'},              
                {title:'Prognose (verwachting)',id:'prognose'}
            ]}
        ,{ beeld: 'scenarios', title: 'Scenario\'s', timestamp: 0, beeldonderdeel: 
            [   {title:'Meest waarschijnlijk',id:'meest'},
                {title:'Minder waarschijnlijk',id:'minder'},
                {title:'Minst waarschijnlijk',id:'minst'}
            ]}
        ,{ beeld: 'communicatie', title: 'Communicatie', timestamp: 0, beeldonderdeel: 
            [   {title:'Kernboodschap',id:'kernboodschap'},
                {title:'Omgevingsbeeld',id:'omgevingsbeeld'},
                {title:'Communicatie vanuit het waterschap',id:'extern'},
                {title:'Communicatie intern het waterschap',id:'intern'}
            ]}
    ];
        Core.project(project.id());   
        
    };

}]);

