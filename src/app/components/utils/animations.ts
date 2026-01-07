import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const fadeSlideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    // 1. A konténer fixálása az átmenet idejére
    style({ position: 'relative', minHeight: '100vh', overflow: 'hidden' }),
    
    // 2. Az oldalak egymásra rétegezése
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1
      })
    ], { optional: true }),

    // 3. Az érkező oldal kezdeti állapota: mélyen lent és teljesen átlátszó
    query(':enter', [
      style({ 
        opacity: 0, 
        transform: 'translateY(100px)', // Alulról indul
        zIndex: 2 // Ez legyen felül, hogy rácsússzon a régire
      })
    ], { optional: true }),

    // 4. Az animációs csoport indítása
    group([
      // TÁVOZÓ OLDAL: Felfelé úszik és elhalványul
      query(':leave', [
        animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', 
          style({ 
            opacity: 0, 
            transform: 'translateY(-100px)' // Felfelé távozik
          })
        )
      ], { optional: true }),
      
      // ÉRKEZŐ OLDAL: Alulról beúszik a helyére
      query(':enter', [
        animate('700ms 100ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ 
            opacity: 1, 
            transform: 'translateY(0)' // Beáll a központba
          })
        )
      ], { optional: true })
    ])
  ])
]);