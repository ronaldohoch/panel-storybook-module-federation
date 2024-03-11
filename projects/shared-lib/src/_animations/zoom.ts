import { animate, animation, AnimationTriggerMetadata, group, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from './common/interfaces';
import { useAnimationIncludingChildren } from './common/use-animation-including-children';

const zoomIn = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 0, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 0.5 }),
          style({ opacity: 1, easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
        ])
      )
    ])
  );

const DEFAULT_DURATION = 1000;

export function zoomInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomIn', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(zoomIn(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function zoomInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomInOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(zoomIn(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

const zoomOut = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
          style({ opacity: 0, easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 })
        ])
      )
    ])
  );

export function zoomOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOut', [
    transition('0 => 1', [...useAnimationIncludingChildren(zoomOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function zoomOutOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(zoomOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
