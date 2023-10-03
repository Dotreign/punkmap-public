import { useState, useEffect } from 'react'
import React from 'react'
import D12F1 from './D12F1'
import D12F2 from './D12F2'
import D12F3 from './D12F3'
import D12F4 from './D12F4'
import D12F5 from './D12F5'
import D12F6 from './D12F6'
import D12F7 from './D12F7'
import D12F8 from './D12F8'
import D12F9 from './D12F9'
import D12F10 from './D12F10'
import D12F11 from './D12F11'
import D12F12 from './D12F12'
import D12F13 from './D12F13'
import D12F14 from './D12F14'
import axios from "../../API/axios";

export let selectedBlock;

export const D12Select = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const API_URL = "http://localhost:8079/";
  const [floor, setFloor] = useState("d12f1")

  const [d12f1Map, setD12f1Map] = useState(false)
  const [d12f2Map, setD12f2Map] = useState(false)
  const [d12f3Map, setD12f3Map] = useState(false)
  const [d12f4Map, setD12f4Map] = useState(false)
  const [d12f5Map, setD12f5Map] = useState(false)
  const [d12f6Map, setD12f6Map] = useState(false)
  const [d12f7Map, setD12f7Map] = useState(false)
  const [d12f8Map, setD12f8Map] = useState(false)
  const [d12f9Map, setD12f9Map] = useState(false)
  const [d12f10Map, setD12f10Map] = useState(false)
  const [d12f11Map, setD12f11Map] = useState(false)
  const [d12f12Map, setD12f12Map] = useState(false)
  const [d12f13Map, setD12f13Map] = useState(false)
  const [d12f14Map, setD12f14Map] = useState(false)

  useEffect (() => {
    floor === "d12f1"
    ? setD12f1Map(true)
    : setD12f1Map(false)
    floor === "d12f2"
    ? setD12f2Map(true)
    : setD12f2Map(false)
    floor === "d12f3"
    ? setD12f3Map(true)
    : setD12f3Map(false)
    floor === "d12f4"
    ? setD12f4Map(true)
    : setD12f4Map(false)
    floor === "d12f5"
    ? setD12f5Map(true)
    : setD12f5Map(false)
    floor === "d12f6"
    ? setD12f6Map(true)
    : setD12f6Map(false)
    floor === "d12f7"
    ? setD12f7Map(true)
    : setD12f7Map(false)
    floor === "d12f8"
    ? setD12f8Map(true)
    : setD12f8Map(false)
    floor === "d12f9"
    ? setD12f9Map(true)
    : setD12f9Map(false)
    floor === "d12f10"
    ? setD12f10Map(true)
    : setD12f10Map(false)
    floor === "d12f11"
    ? setD12f11Map(true)
    : setD12f11Map(false)
    floor === "d12f12"
    ? setD12f12Map(true)
    : setD12f12Map(false)
    floor === "d12f13"
    ? setD12f13Map(true)
    : setD12f13Map(false)
    floor === "d12f14"
    ? setD12f14Map(true)
    : setD12f14Map(false)
  }, [floor])

  const handleOnChange = (e) => {
    setFloor(e.target.value)
  }

  const handleBlockClick = (block) => {
    let data = {
      "dormNumber": "12",
      "blockNumber": block
    };

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: API_URL + 'block-info-service/block',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"),
        'Access-Control-Allow-Origin': '*'
      },
      data : data
    };

    axios.request(config).then(response => {
      selectedBlock.blockInfo = response.data.content
      selectedBlock.blockNumber = response.data.blockNumber
      selectedBlock.blockName = response.data.blockName
      sessionStorage.setItem("selectedBlock", selectedBlock);
      console.log(selectedBlock)
    })
  };

  return (
    <div>
      <span className="floor-text">Этаж:</span>
      <select className="floor-number" value={floor} onChange={handleOnChange}
      name="floor" id="floor-number" data-dorm_number="12"
      >
        <option id="selected-floor" value="d12f1" selected>1</option>
        <option value="d12f2">2</option>
        <option value="d12f3">3</option>
        <option value="d12f4">4</option>
        <option value="d12f5">5</option>
        <option value="d12f6">6</option>
        <option value="d12f7">7</option>
        <option value="d12f8">8</option>
        <option value="d12f9">9</option>
        <option value="d12f10">10</option>
        <option value="d12f11">11</option>
        <option value="d12f12">12</option>
        <option value="d12f13">13</option>
        <option value="d12f14">14</option>
      </select>
      {d12f1Map && <D12F1 handleBlockClick={handleBlockClick} />}
      {d12f2Map && <D12F2 />}
      {d12f3Map && <D12F3 />}
      {d12f4Map && <D12F4 />}
      {d12f5Map && <D12F5 />}
      {d12f6Map && <D12F6 />}
      {d12f7Map && <D12F7 />}
      {d12f8Map && <D12F8 />}
      {d12f9Map && <D12F9 />}
      {d12f10Map && <D12F10 />}
      {d12f11Map && <D12F11 />}
      {d12f12Map && <D12F12 />}
      {d12f13Map && <D12F13 />}
      {d12f14Map && <D12F14 />}
    </div>
  )
}

