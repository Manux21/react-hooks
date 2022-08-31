import React from 'react';

export const About = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Заголовок карточки</h5>
          <p className="card-text">Небольшой пример текста, который должен основываться на названии карточки и
            составлять основную часть содержимого карты.</p>
          <a href={''} className="btn btn-primary">Перейти куда-нибудь</a>
        </div>
    </div>
  )
}