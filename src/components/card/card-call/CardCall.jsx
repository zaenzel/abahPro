import React from 'react'
import Button from '../../button/Button'

const CardCall = () => {
  return (
    <div className="p-5 text-center space-y-3 border shadow-sm rounded-lg">
          <h2 className="text-xl lg:text-2xl font-bold">Ingin tanya-tanya?</h2>
          <h5 className="text-color-ADADAD text-sm">
            Butuh penjelasan lebih lanjut?
          </h5>
          <Button word={"Hubungi Kami"} />
        </div>
  )
}

export default CardCall