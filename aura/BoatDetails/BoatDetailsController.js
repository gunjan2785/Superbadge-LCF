({
    onBoatSelected : function (component, event, helper) {
        //Retrieve the boat fired from the event onClick
        var boat = event.getParam('boat');
        //Get the Id and set it in v.id
        var boatId = boat.Id;
        component.set('v.id', boatId);
        //Reload the record
        component.find('service').reloadRecord();
    },
    onRecordUpdated : function (component, event, helper) {

    },
})