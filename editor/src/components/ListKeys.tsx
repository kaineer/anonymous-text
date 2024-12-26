//
import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clipsSlice } from "../store/slices/clips/clips";

import { LazyMap } from "../shared/ui/conditionals";
import { NavLink } from "react-router";
import { bem } from "../shared/utils/bem";
import clsx from "clsx";

const element = (name?: string) => {
  return bem("list-keys", name).toString();
}

export const ListKeys: FC = () => {
  const {
    actions: { removeKey },
    selectors: { getCurrentKeys, getKeys, getCurrentKey },
  } = clipsSlice;

  const currentKey = useSelector(getCurrentKey);
  const currentKeys = useSelector(getCurrentKeys);
  const allKeys = useSelector(getKeys);

  const dispatch = useDispatch();

  const handleRemove = (key: string) => {
    return () => dispatch(removeKey(key));
  }

  const renderItem = (key: string, i: number) => (
    <li className={ element("item") } key={i}>
      <NavLink className={ clsx(element("anchor"), { [bem("list-keys", "anchor")("active", "true")]: currentKey === key }) } to={ '/key/' + key }>
        { key }
      </NavLink>
      &nbsp;<a href="#" onClick={handleRemove(key)}>x</a>
    </li>
  );

  return (
    <>
      <h2 className={ element("header") }>All keys with added template</h2>
      <ul className={ element("list") }>
        <LazyMap<string> items={allKeys} renderItem={renderItem} />
      </ul>
      <h2 className={ element("header") }>Current template keys</h2>
      <ul className={ element("list") }>
        <LazyMap<string> items={currentKeys} renderItem={renderItem} />
      </ul>
    </>
  );
}
