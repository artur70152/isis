import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';
import { signout } from '../../funcionalidades/actions';
export default function Tela2() {
  const dispatch = useDispatch();
const handleout=()=>{
dispatch(signout())
}
  const [sig,setsig]=useState('')
  console.log(api.defaults.headers.Authorization)
  const token = localStorage.getItem('token');
  api.defaults.headers.Authorization=`Bearer ${token}`
  const aa = useSelector((state) => state.auth.user);
  const ab = useSelector((state) => state.user.name);
  const ac = useSelector((state) => state);
  useEffect(() => {
    async function fetchData() {
        const response = await api.get('signs');
        console.log(response.data);
        const datasFormatadas = response.data.map(({ id, datai, dataf, signo }) => {
  const obj = datai;
  const obj2 = dataf;
  console.log(obj);
  console.log(aa);
  console.log(obj2);
  if (aa >= obj && aa <= obj2) {
    console.log('formattedDate está entre obj e obj2.');
    setsig(signo)
  } else {
    console.log('formattedDate não está entre obj e obj2.');
  }
          return {
            id,
            datai,
            dataf,
            signo,
          };
        });
    }

    fetchData();
  }, [ab]);



  return (
  <div>
    <h1>{ab}, voçe é de </h1>
  <h1>{sig}</h1>
  <button onClick={handleout}>logout</button>
  </div>
  )
  ;
}