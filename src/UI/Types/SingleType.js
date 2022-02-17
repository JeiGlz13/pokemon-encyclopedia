import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startSearchingType } from '../../redux/actions/searchActions';
import { LabelType } from '../Search/LabelType';

export const SingleType = ({type, tipo}) => {
    const dispatch = useDispatch();

    const {type: typeRedux} = useSelector(state=>state.search);
    
    const setSelectType = (e) =>{
        e.preventDefault();

        Swal.fire({
          title: 'Espere...',
          text: 'Buscando pokemon',
          allowOutsideClick: false,
          didOpen: ()=>{
              Swal.showLoading();
          }
      });

        dispatch(startSearchingType(tipo, type));

        setTimeout(() => {
          Swal.close();
      }, 800);
    }
  return (
    <div className= {`my-2 mx-4 cursor-pointer transition-all duration-200 hover:scale-110
                    ${(tipo === typeRedux)?('opacity-100'):('opacity-70')} `}
    onClick={setSelectType} >
        <LabelType typePokemon={type} />
    </div>
  )
}
