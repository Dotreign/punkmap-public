import React from 'react';

const BlockDescr = () => {

  return (
    <div className="block__descr descr">
      <div className="descr__text-block">
        <p className="descr__text">
          {sessionStorage.getItem("selectedBlock") ? (
            // Если выбран блок, отображаем его содержимое
            <>
              <span>Номер блока: {sessionStorage.getItem("selectedBlock").blockNumber}</span>
              <br />
              <span>Название блока: {sessionStorage.getItem("selectedBlock").blockName}</span>
              <br />
              <span>Содержимое: {sessionStorage.getItem("selectedBlock").blockInfo}</span>
            </>
          ) : (
            // Если блок не выбран, отображаем пустой текст
            'Выберите блок для отображения информации'
          )}
        </p>
      </div>
    </div>
  );
};

export default BlockDescr;