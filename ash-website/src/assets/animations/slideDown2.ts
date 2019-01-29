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
        opacity: '0.0',
        display: 'none'
    })),
    state('down', style({
        maxHeight: '600px',
        opacity: '1.0',
        backgroundColor: 'black',
        display: 'block'
    })),

    transition('up=>down', [group([
        animate('1000ms ease-in', style({
            maxHeight: '600px',
            opacity: '1.0',
            display: 'block'
        }))
    ])]),
    transition('down=>up', [group([
        animate('1000ms ease-out', style({
            height: '0px',
            maxHeight: '0px',
            opacity: '0.5',
            display: 'none'
        }))
    ])])
]);
