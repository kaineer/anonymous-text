//
import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { LazyMap } from "../shared/ui/conditionals";

import { classes } from "./ListKeys.json";
import { clipsSlice } from "../store/slices/clips/clips";

export const ListKeys: FC = () => {
  const { getCurrentKeys, getKeys } = clipsSlice.selectors;
  const { setCurrentKey } = clipsSlice.actions;

  const dispatch = useDispatch();

  const currentKeys = useSelector(getCurrentKeys);
  const allKeys = useSelector(getKeys);

  const handleClick = (key: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(setCurrentKey(key));
  }

  const renderItem = (key: string, i: number) => (
    <li className={ classes.item } key={i}>
      <a className={ classes.link } href="#" onClick={handleClick(key)}>{key}</a>
    </li>
  );

  return (
    <>
      <h2 className={ classes.header }>Current template keys</h2>
      <ul>
        <LazyMap<string> items={currentKeys} renderItem={renderItem} />
      </ul>
      <h2 className={ classes.header }>All keys with added template</h2>
      <ul>
        <LazyMap<string> items={allKeys} renderItem={renderItem} />
      </ul>
    </>
  );
}
