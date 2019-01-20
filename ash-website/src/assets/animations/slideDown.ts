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
            maxHeight: '500px'
        })),
        state('close', style({
            visibility: 'hidden',
            opacity: '0',
            maxHeight: '0px'
        })),
        transition('close => open', [group([
            animate('1ms ease-in-out', style({
                visibility : 'visible'
            })),
            animate('400ms ease-in-out', style({
                opacity: '1'
            })),
            animate('800ms ease-in-out', style({
                maxHeight: '500px'
            }))
        ])]),
        transition('open => close', [group([
            animate('1ms ease-in-out', style({
                visibility: 'hidden'
            })),
            animate('400ms ease-in-out', style({
                opacity: '0'
            })),
            animate('800ms ease-in-out', style({
                maxHeight: '0px'
            }))
        ])])
    ])
];
