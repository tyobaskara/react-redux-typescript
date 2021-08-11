import { RootState } from './../redux/root-reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const _useSelector: TypedUseSelectorHook<RootState> = useSelector;