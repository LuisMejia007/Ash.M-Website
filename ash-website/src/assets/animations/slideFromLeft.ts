import {
    transition,
    state,
    trigger,
    style,
    animate,
    group } from '@angular/animations';

export const SlideFromLeftAnimation = [
    trigger('slideFromLeft', [
        state('close', style({
            width: '0px',

        })),
        state('open', style({
            width: '50%'
        })),
        transition('close => open', [group([
            animate('1ms ease-in-out', style({
                width: '10%'
            })),
            animate('1000ms ease-in-out', style({
                width: '30%'
            })),
            animate('1200ms ease-in-out', style({
                width: '50%'
            }))
        ])]),
        transition('open => close', [group([
            animate('1ms ease-in-out', style({
                width: '50%'
            })),
            animate('1000ms ease-in-out', style({
                width: '30%'
            })),
            animate('1200ms ease-in-out', style({
                width: '0%'
            }))
        ])])
    ])
];
