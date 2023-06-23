import { useEffect, useRef, useState } from 'react';

import { useWindowWidth } from '@react-hook/window-size';
import useKey from '@rooks/use-key';

export const useProgrammingLanguagesList = () => {
  const tab = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const navigation = useRef<HTMLDivElement>(null);

  const navigationInnerWidth = navigation.current?.offsetWidth ?? 0;
  const wrapperInnerWidth = wrapper.current?.offsetWidth ?? 0;
  const containerInnerWidth = container.current?.scrollWidth ?? 0;

  const distance = containerInnerWidth - wrapperInnerWidth;

  const [left, setMotionDistance] = useState(0);
  const paginate = (distance: number) => setMotionDistance((prev) => prev + distance);

  const countPageSize = containerInnerWidth / wrapperInnerWidth;
  const diff = Math.floor(distance / countPageSize);

  const prevBtnCondition = left >= 0;
  const nextBtnCondition = left * -1 > distance;

  const isArrowButtos = containerInnerWidth > navigationInnerWidth;

  const innerWidth = useWindowWidth();
  useKey('ArrowLeft', () => paginate(diff), { eventTypes: ['keyup'], target: container, when: !prevBtnCondition });
  useKey('ArrowRight', () => paginate(-diff), { eventTypes: ['keyup'], target: container, when: !nextBtnCondition });

  useEffect(() => setMotionDistance(0), [innerWidth]);

  return {
    calculations: { left, distance },
    refs: { tab, wrapper, container, navigation },
    handlers: { handlePrevButton: () => (left >= 0 ? setMotionDistance(0) : paginate(diff)), handleNextButton: () => paginate(-diff) },
    condition: { isArrowButtos, isDisabledNextButton: left * -1 > distance || left * -1 === distance, isDisabledPrevButton: left === 0 },
  };
};
