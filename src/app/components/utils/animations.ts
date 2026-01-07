import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const fadeSlideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    // 1. Beállítjuk a konténert
    style({ position: 'relative', minHeight: '100vh' }),
    
    // 2. Mindkét oldalt egymásra helyezzük absolute pozícióval
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        zIndex: 1
      })
    ], { optional: true }),

    // 3. Az érkező oldal kezdőállapota
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' })
    ], { optional: true }),

    // 4. Párhuzamosan futtatjuk a két animációt
    group([
      // Távozó oldal halványul
      query(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ], { optional: true }),
      
      // Érkező oldal beúszik
      query(':enter', [
        animate('600ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);