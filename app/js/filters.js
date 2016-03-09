/**
 * Created by hagag on 09/03/16.
 */
eventsApp.filter('durations',function(){
    return function (duration){
        switch(duration){
            case 1 :
                return 'One hour'
            break;
            case 2 :
                return 'Two hour'
            break;
            case 3 :
                return 'Three hour'
            break;
        }
    }
})