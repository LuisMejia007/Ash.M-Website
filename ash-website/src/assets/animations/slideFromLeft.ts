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
            visibility: 'hidden'

        })),
        state('open', style({
            width: '50%',
            visibility: 'visible'
        })),
        transition('close => open', [group([
            animate('1000ms ease-in', style({
                width: '0%',
                visibility: 'hidden',
                opacity: '0.0'
            })),
            animate('1100ms ease-in', style({
                width: '10%',
                visibility: 'visible',
                opacity: '0.1'
            })),
            animate('1200ms ease-in', style({
                width: '20%',
                visibility: 'visible',
                opacity: '0.5'
            })),
            animate('1400ms ease-in', style({
                width: '30%',
                visibility: 'visible',
                opacity: '0.7'
            })),
            animate('1600ms ease-in', style({
                width: '40%',
                visibility: 'visible',
                opacity: '0.9'
            })),
            animate('1800ms ease-in', style({
                width: '50%',
                visibility: 'visible',
                opacity: '1.0'
            }))
        ])]),
        transition('open => close', [group([
            animate('1000ms ease-out', style({
                width: '50%',
                visibility: 'visible',
                opacity: '1.0'
            })),
            animate('1100ms ease-out', style({
                width: '40%',
                visibility: 'visible',
                opacity: '0.9'
            })),
            animate('1200ms ease-out', style({
                width: '30%',
                visibility: 'visible',
                opacity: '0.5'
            })),
            animate('1400ms ease-out', style({
                width: '20%',
                visibility: 'visible',
                opacity: '0.1'
            })),
            animate('1600ms ease-out', style({
                width: '10%',
                visibility: 'visible',
                opacity: '0.0'
            })),
            animate('1800ms ease-out', style({
                width: '0%',
                visibility: 'hidden',
                opacity: '0.0'
            }))
        ])])
    ])
];
