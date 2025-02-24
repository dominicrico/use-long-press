import { Coordinates, LongPressEvent } from './types';
import { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, PointerEvent as ReactPointerEvent } from 'react';
export declare function isTouchEvent<Target>(event: LongPressEvent<Target>): event is ReactTouchEvent<Target>;
export declare function isMouseEvent<Target>(event: LongPressEvent<Target>): event is ReactMouseEvent<Target>;
export declare function isPointerEvent<Target>(event: LongPressEvent<Target>): event is ReactPointerEvent<Target>;
export declare function getCurrentPosition<Target>(event: LongPressEvent<Target>): Coordinates;
