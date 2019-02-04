import {
    trigger,
    transition,
    state,
    style,
    query,
    stagger,
    animate,
    group
} from '@angular/animations';

export const HomeAnimation = [
    trigger('home', [
        transition( '*<=>*', [
            query(':enter', [
                style({ opacity: '0', backgroundColor: 'red' }),
                animate('0.5ms ease-in-out', style({ opacity: '1'}))
            ])
        ])
    ])
];
