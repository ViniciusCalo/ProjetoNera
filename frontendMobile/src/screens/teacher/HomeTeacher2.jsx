import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeTeacher2 = () => {
    const [classrooms, setClassrooms] = useState([]);

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const response = await axios.get('http://localhost:3333/teacher/classroom');
                setClassrooms(response.data);
            } catch (error) {
                console.error('Error fetching classrooms:', error);
            }
        };

        fetchClassrooms();
    }, []);

    return (
        <div>
            <h1>Classrooms</h1>
            <ul>
                {classrooms.map((classroom) => (
                    <li key={classroom.id}>{classroom.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomeTeacher2;