import React, { useEffect, useState } from "react";
import Slide from "../../Components/Main/Slide";
import List from "../../Components/Main/List";
//import { slide, list, highrate, eatdealing } from "../../Components/Main/data";

export default function MainList(props) {
  const [slide, setSlide] = useState([]);
  const [list, setList] = useState([]);
  const [eatdealing, setEatdealing] = useState([]);
  const [highrate, setHighrate] = useState([]);

  const fetchSlide = async () => {
    const res = await fetch("http://13.125.34.234:8000/restaurant/topic/1");
    const data = await res.json();
    setSlide(data.top_list);
  };
  const fetchList = async () => {
    const res = await fetch("http://13.125.34.234:8000/restaurant/topic/4");
    const data = await res.json();
    setList(data.top_list);
  };
  const fetchEatdealing = async () => {
    const res = await fetch("http://13.125.34.234:8000/restaurant/2");
    const data = await res.json();
    setEatdealing(data.restaurant_list);
  };
  const fetchHighrate = async () => {
    const res = await fetch("http://13.125.34.234:8000/restaurant/3");
    const data = await res.json();
    setHighrate(data.restaurant_list);
  };

  useEffect(() => {
    fetchSlide();
    fetchList();
    fetchEatdealing();
    fetchHighrate();
  }, []);

  return (
    <main>
      <Slide title={"믿고보는 맛집 리스트"} datas={slide} {...props} />
      <List title={"EAT딜을 판매중인 식당"} datas={eatdealing} {...props} />
      <List title={"평점이 높은 인기 식당"} datas={highrate} {...props} />
      <Slide title={"메뉴별 인기 맛집"} datas={list} {...props} />
    </main>
  );
}
