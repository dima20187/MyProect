import { FC, PropsWithChildren } from 'react';

export type Nullish<T> = T | null;

export type Nullable<T> = T | null | undefined;

export type FCC = FC<PropsWithChildren>;