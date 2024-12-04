import React, { useState, useEffect } from 'react';
import * as C from './styles';
import ClassroomCard from '../ClassroomCard';
import ModalInfoClass from '../ClassInfoModal/index';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/classroomSlice';
import RoomActionBanner from '../RoomActionBanner';
import axios from 'axios';


const Classroom = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [ token ] = useState(localStorage.getItem('token'));
  const classroom = useState('')
 
  useEffect(() => {
    const getItems = async () => {
      if (token) { // Verifica se o token está definido
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/classrooms/teacher`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log(res.data);
          dispatch(setItems(res.data));
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Token não encontrado");
      }
    };

    getItems();
  }, [dispatch, token]);

  const items = useSelector((state) => state.classrooms.items || []);


  return (
      <C.Container>
        <C.ContainerC>
          <C.TitleContainer>
            <C.Title>Minhas Salas de Aula</C.Title>
            <C.Line />
          </C.TitleContainer>
          <C.GridContainer>
            {items.length > 0 ? (
              items.map(item => (
                <ClassroomCard key={item.classroomid} titulo={item.classroomname} trailId={item.trackid} />
              ))
            ) : (
              <RoomActionBanner
                role="teacher"
                openModal={null} // Função passada para abrir o modal
              />
            )}
          </C.GridContainer>
        </C.ContainerC>
        <ModalInfoClass
          isOpen={modalVisible}
          setModalVisible={setModalVisible}
          classroom={classroom}
        />
      </C.Container>
  );
};

export default Classroom;
