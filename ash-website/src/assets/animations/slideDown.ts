import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
} from '@angular/animations';


export const SlideDownAnimation = [
    trigger('slideDown', [

        state('open', style({
            visibility: 'visible',
            opacity: '1',
            maxHeight: '500px',
            display: 'block'
        })),
        state('close', style({
            visibility: 'hidden',
            opacity: '0',
            maxHeight: '0px',
            display: 'none'
        })),
        transition('close => open', [group([
            animate('1ms ease-in-out', style({
                visibility : 'visible',
                display: 'block'
            })),
            animate('1000ms ease-in-out', style({
                opacity: '1'
            })),
            animate('1010ms ease-in-out', style({
                maxHeight: '500px'
            }))
        ])]),
        transition('open => close', [group([
            animate('1000ms ease-in-out', style({
                visibility: 'hidden',
                display: 'none'
            })),
            animate('1005ms ease-in-out', style({
                opacity: '0'
            })),
            animate('1010ms ease-in-out', style({
                maxHeight: '0px'
            }))
        ])])
    ])
];
