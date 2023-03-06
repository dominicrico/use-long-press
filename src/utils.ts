import { Coordinates, LongPressEvent } from './types';
import { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, PointerEvent as ReactPointerEvent } from 'react';

export function isTouchEvent<Target>(event: LongPressEvent<Target>): event is ReactTouchEvent<Target> {
  const { nativeEvent } = event;
  return window.TouchEvent ? nativeEvent instanceof TouchEvent : 'touches' in nativeEvent;
}

export function isMouseEvent<Target>(event: LongPressEvent<Target>): event is ReactMouseEvent<Target> {
  return event.nativeEvent instanceof MouseEvent;
}

export function isPointerEvent<Target>(event: LongPressEvent<Target>): event is ReactPointerEvent<Target> {
  return event.nativeEvent instanceof PointerEvent;
}

export function getCurrentPosition<Target>(event: LongPressEvent<Target>): Coordinates {
  if (isTouchEvent(event)) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  }

  /* istanbul ignore else */
  if (isMouseEvent(event) || isPointerEvent(event)) {
    return {
      x: event.pageX,
      y: event.pageY,
    };
  }

  /* istanbul ignore next */
  return null;
}
