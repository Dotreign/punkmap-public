import { useState, useEffect } from 'react'
import React from 'react'
import D13F1 from './D13F1'
import D13F2 from './D13F2'
import D13F3 from './D13F3'
import D13F4 from './D13F4'
import D13F5 from './D13F5'
import D13F6 from './D13F6'
import D13F7 from './D13F7'
import D13F8 from './D13F8'
import D13F9 from './D13F9'
import D13F10 from './D13F10'
import D13F11 from './D13F11'
import D13F12 from './D13F12'
import D13F13 from './D13F13'
import D13F14 from './D13F14'

export const D13Select = () => {
  const [floor, setFloor] = useState("d13f1")

  const [d13f1Map, setD13f1Map] = useState(false)
  const [d13f2Map, setD13f2Map] = useState(false)
  const [d13f3Map, setD13f3Map] = useState(false)
  const [d13f4Map, setD13f4Map] = useState(false)
  const [d13f5Map, setD13f5Map] = useState(false)
  const [d13f6Map, setD13f6Map] = useState(false)
  const [d13f7Map, setD13f7Map] = useState(false)
  const [d13f8Map, setD13f8Map] = useState(false)
  const [d13f9Map, setD13f9Map] = useState(false)
  const [d13f10Map, setD13f10Map] = useState(false)
  const [d13f11Map, setD13f11Map] = useState(false)
  const [d13f12Map, setD13f12Map] = useState(false)
  const [d13f13Map, setD13f13Map] = useState(false)
  const [d13f14Map, setD13f14Map] = useState(false)

  useEffect (() => {
    floor === "d13f1" 
    ? setD13f1Map(true)
    : setD13f1Map(false)
    floor === "d13f2" 
    ? setD13f2Map(true)
    : setD13f2Map(false)
    floor === "d13f3" 
    ? setD13f3Map(true)
    : setD13f3Map(false)
    floor === "d13f4" 
    ? setD13f4Map(true)
    : setD13f4Map(false)
    floor === "d13f5" 
    ? setD13f5Map(true)
    : setD13f5Map(false)
    floor === "d13f6" 
    ? setD13f6Map(true)
    : setD13f6Map(false)
    floor === "d13f7" 
    ? setD13f7Map(true)
    : setD13f7Map(false)
    floor === "d13f8" 
    ? setD13f8Map(true)
    : setD13f8Map(false)
    floor === "d13f9" 
    ? setD13f9Map(true)
    : setD13f9Map(false)
    floor === "d13f10" 
    ? setD13f10Map(true)
    : setD13f10Map(false)
    floor === "d13f11" 
    ? setD13f11Map(true)
    : setD13f11Map(false)
    floor === "d13f12" 
    ? setD13f12Map(true)
    : setD13f12Map(false)
    floor === "d13f13" 
    ? setD13f13Map(true)
    : setD13f13Map(false)
    floor === "d13f14" 
    ? setD13f14Map(true)
    : setD13f14Map(false)
  }, [floor])

  const handleOnChange = (e) => {
    setFloor(e.target.value)
  }

  return (
    <div>
      <span className="floor-text">Этаж:</span>
      <select className="floor-number" value={floor} onChange={handleOnChange}
      name="floor" id="floor-number"  data-dorm_number="13"
      >
        <option id="selected-floor" value="d13f1" selected>1</option>
        <option value="d13f2">2</option>
        <option value="d13f3">3</option>
        <option value="d13f4">4</option>
        <option value="d13f5">5</option>
        <option value="d13f6">6</option>
        <option value="d13f7">7</option>
        <option value="d13f8">8</option>
        <option value="d13f9">9</option>
        <option value="d13f10">10</option>
        <option value="d13f11">11</option>
        <option value="d13f12">12</option>
        <option value="d13f13">13</option>
        <option value="d13f14">14</option>
      </select>
      {d13f1Map && <D13F1 />}
      {d13f2Map && <D13F2 />}
      {d13f3Map && <D13F3 />}
      {d13f4Map && <D13F4 />}
      {d13f5Map && <D13F5 />}
      {d13f6Map && <D13F6 />}
      {d13f7Map && <D13F7 />}
      {d13f8Map && <D13F8 />}
      {d13f9Map && <D13F9 />}
      {d13f10Map && <D13F10 />}
      {d13f11Map && <D13F11 />}
      {d13f12Map && <D13F12 />}
      {d13f13Map && <D13F13 />}
      {d13f14Map && <D13F14 />}
    </div>
  )
}
