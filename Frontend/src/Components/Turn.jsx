import React from 'react'

const Turn = () => {
  return (
    <div class="turn">
      <p class="turn__text">
        Пожалуйста, поверните устройство в горизонтальное положение. В противном случае сайт может работать некорректно.
      </p>
      <svg width="407" height="190" viewBox="0 0 407 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="3.5" width="111.198" height="183" rx="14.5" stroke="#D1D1D1" stroke-width="7" />
        <circle cx="60.2035" cy="164.041" r="10.4942" fill="#D9D9D9" />
        <rect x="220.012" y="159.988" width="111.198" height="183" rx="14.5" transform="rotate(-90 220.012 159.988)" stroke="#D1D1D1" stroke-width="7" />
        <circle cx="378.494" cy="105.494" r="10.4942" transform="rotate(-90 378.494 105.494)" fill="#D9D9D9" />
        <path d="M202.512 105L167.512 84.7927V125.207L202.512 105ZM133.512 108.5H171.012V101.5H133.512V108.5Z" fill="#D1D1D1" />
      </svg>
    </div>
  )
}

export default Turn