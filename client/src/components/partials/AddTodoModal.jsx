import React, { useState } from 'react'
import { createTodoApi } from '../../services/api';

const AddTodoModal = () => {
    const [tododesc,settododesc]=useState('');
    const handletodosubmit=async()=>{
       console.log(tododesc,'tododesc')
       const result=await createTodoApi({desc:tododesc})
    }
  return (
    <div className='modal mt-5' id='exampleModal'>
        <div className='modal-dialog' role='document'>
           <div className='modal-content'>
              <div className='modal-header'>
                 <div className='modal-title'> Add new ToDo</div>
                 <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='close'>
                  <span arial-hidden="true"></span>
                 </button>
              </div>
              <div className='modal-body'>
                <div className='form-group'>
                  <textarea name='' className='form-control' rows={3} onChange={(e)=>{settododesc(e.target.value)}} placeholder='enter todos..'></textarea>
                </div>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-seconday' onClick={handletodosubmit}>save Todo</button>
                <button className='btn btn-seconday' onClick={()=>{settododesc('')}} data-bs-dismiss="modal">close</button>
              </div>
           </div>
        </div>
      </div>
  )
}

export default AddTodoModal
