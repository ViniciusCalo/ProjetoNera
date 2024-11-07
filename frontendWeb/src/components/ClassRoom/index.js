import React, { useState, useEffect } from 'react';
import * as C from './styles';
import ClassroomCard from '../ClassroomCard';
import ModalInfoClass from '../ModalInfoClass/index';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/classroomSlice';
import axios from 'axios';


const TelaClasses = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [classroom, setClassroom] = useState('')
 
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
              <div className="empty-message">
                Nenhuma sala disponível. <a href="/createClass">Clique aqui</a> para criar uma nova sala.
              </div>
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

export default TelaClasses;
