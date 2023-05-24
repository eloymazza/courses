type Point = {
  x: number;
  y: number;
  z: number;
};

type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};

const center: ReadOnly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// center.x = 100; // Error: Cannot assign to 'x' because it is a read-only property.

// Modifiers

type Opt3DPoint = {
  x: number;
  y: number;
  z?: number;
};

type RemoveOpt<T> = {
  readonly [k in keyof T]-?: T[k];
};

const point3D: RemoveOpt<Opt3DPoint> = {
  x: 0,
  y: 0,
  //z?: 0, // An object member cannot be declared optional.
  z: 0,
};
