import { MouseEvent as ReactMouseEvent, MouseEventHandler, TouchEvent as ReactTouchEvent, TouchEventHandler, PointerEventHandler } from 'react';
export declare type Coordinates = {
    x: number;
    y: number;
} | null;
export declare enum LongPressEventReason {
    CANCELED_BY_MOVEMENT = "canceled-by-movement",
    CANCELED_BY_TIMEOUT = "canceled-by-timeout"
}
export declare type LongPressEvent<Target = Element> = ReactMouseEvent<Target> | ReactTouchEvent<Target>;
export declare type LongPressCallbackMeta<Context = unknown> = {
    context?: Context;
    reason?: LongPressEventReason;
};
export declare type LongPressCallback<Target = Element, Context = unknown> = (event: LongPressEvent<Target>, meta: LongPressCallbackMeta<Context>) => void;
export declare enum LongPressDetectEvents {
    ALL = "all",
    POINTER = "pointer",
    MOUSE = "mouse",
    TOUCH = "touch"
}
export declare type LongPressResult<Target, DetectType extends LongPressDetectEvents = LongPressDetectEvents.ALL> = DetectType extends LongPressDetectEvents.ALL ? {
    onMouseDown: MouseEventHandler<Target>;
    onMouseUp: MouseEventHandler<Target>;
    onMouseMove: MouseEventHandler<Target>;
    onMouseLeave: MouseEventHandler<Target>;
    onTouchStart: TouchEventHandler<Target>;
    onTouchMove: TouchEventHandler<Target>;
    onTouchEnd: TouchEventHandler<Target>;
    onPointerDown: PointerEventHandler<Target>;
    onPointerUp: PointerEventHandler<Target>;
    onPointerMove: PointerEventHandler<Target>;
    onPointerLeave: PointerEventHandler<Target>;
} : DetectType extends LongPressDetectEvents.MOUSE ? {
    onMouseDown: MouseEventHandler<Target>;
    onMouseUp: MouseEventHandler<Target>;
    onMouseMove: MouseEventHandler<Target>;
    onMouseLeave: MouseEventHandler<Target>;
} : DetectType extends LongPressDetectEvents.TOUCH ? {
    onTouchStart: TouchEventHandler<Target>;
    onTouchMove: TouchEventHandler<Target>;
    onTouchEnd: TouchEventHandler<Target>;
} : DetectType extends LongPressDetectEvents.POINTER ? {
    onPointerDown: PointerEventHandler<Target>;
    onPointerUp: PointerEventHandler<Target>;
    onPointerMove: PointerEventHandler<Target>;
    onPointerLeave: PointerEventHandler<Target>;
} : never;
export declare type EmptyObject = Record<string, never>;
export declare type CallableContextResult<T, Context> = (context?: Context) => T;
export interface LongPressOptions<Target = Element, Context = unknown> {
    threshold?: number;
    captureEvent?: boolean;
    detect?: LongPressDetectEvents;
    filterEvents?: (event: LongPressEvent<Target>) => boolean;
    cancelOnMovement?: boolean | number;
    onStart?: LongPressCallback<Target, Context>;
    onMove?: LongPressCallback<Target, Context>;
    onFinish?: LongPressCallback<Target, Context>;
    onCancel?: LongPressCallback<Target, Context>;
}
