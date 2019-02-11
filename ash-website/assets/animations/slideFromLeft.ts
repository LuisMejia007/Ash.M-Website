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
            width: '0%',
            visibility: 'hidden',
            opacity: '0.0'

        })),
        state('open', style({
            width: '50%',
            visibility: 'visible',
            opacity: '1.0'
        })),
        transition('close=>open', [group([
            animate('1000ms ease-in', style({
                width: '50%',
                visibility: 'visible',
                opacity: '1.0'
            }))
        ])]),
        transition('open=>close', [group([
            animate('1000ms ease-out', style({
                width: '0%',
                visibility: 'hidden',
                opacity: '0.0'
            }))
        ])])
    ])
];
