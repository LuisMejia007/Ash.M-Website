import {
    transition,
    state,
    animate,
    trigger,
    style,
    group
} from '@angular/animations';

export const SlideDown2Animation =
trigger('slideDown2', [
    state('up', style({
        maxHeight: '0px',
        opacity: '0.0'
    })),
    state('down', style({
        maxHeight: '600px',
        opacity: '1.0',
        backgroundColor: 'black'
    })),

    transition('up=>down', [group([
        animate('1000ms ease-in', style({
            maxHeight: '600px',
            opacity: '1.0',
            backgroundColor: 'black'
        }))
    ])]),
    transition('down=>up', [group([
        animate('1000ms ease-out', style({
            maxHeight: '0px',
            opacity: '0.5',
            backgroundColor: 'black'
        }))
    ])])
]);
