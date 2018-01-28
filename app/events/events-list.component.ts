import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './app/events/events-list.component.html'
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2012',
        time: '10:00 am',
        price: 829.99,
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log('Recieved data : '+data);
    }
}