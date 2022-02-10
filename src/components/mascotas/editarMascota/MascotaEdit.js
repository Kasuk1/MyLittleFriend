import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Upload, } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

import { getPetById, resetPetMethodsMessage, selectPet, selectUpdatePetState, updatePetById } from '../../../store/petSlice/pet.slice';
import { ButtonRegresar } from '../../globales/buttons/ButtonRegresar/ButtonRegresar';
import { SpinLoading } from '../../loading/SpinLoading/SpinLoading';

export const MascotaEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { petId } = useParams();
    const pet = useSelector(selectPet);
    const { loading, status, message } = useSelector(selectUpdatePetState);

    useEffect(() => {
        dispatch(getPetById(petId))
    }, [dispatch, petId]);

    useEffect(() => {
        if (status === 'OK') {
            setTimeout(() => {
                dispatch(resetPetMethodsMessage('updatePetState'));
                navigate(`/pet/${petId}`);
            }, 2500);
        }
    }, [dispatch, status, navigate, petId])

    const onFinish = async (values) => {
        let avatar_url;
        if (values.avatar_url) {
            if (values.avatar_url.status !== 'removed') {
                avatar_url = values.avatar_url;
            }
        }
        const data = {
            petId,
            newData: {
                ...values,
                birthdate: values.birthdate && values.birthdate.toString(),
                avatar_url
            }
        };
        dispatch(updatePetById(data));
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.file;
    };

    return (
        <div className='pet-register'>
            <div className='pet-register__headers text-align-center mb-5'>
                <h1 className="heading--1 color-tertiary">Editar mascota!</h1>
                <div className="horizonal-line mb-2">
                    <i className="fas fa-bone horizontal-line--icon"></i>
                </div>
                <p className='paragraph color-paragraph'>
                    Asegurate de llenar los campos requeridos en el formulario.
                </p>
            </div>

            {pet && (
                <Form
                    className='pet-register__form display-flex flex-column gap-1 position-relative'
                    name="pet-edit"
                    initialValues={{
                        birthdate: pet?.birthdate && moment(pet?.birthdate, 'YYYY/MM/DD'),
                        detail: pet?.detail,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <p className='paragraph color-paragraph'>
                        <span className='color-tertiary'>Tipo de mascota: </span>
                        {pet?.type}
                    </p>

                    <p className='paragraph color-paragraph'>
                        <span className='color-tertiary'>Nombre de mascota: </span>
                        {pet?.name}
                    </p>

                    <Form.Item
                        name="birthdate"
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder="Fecha de nacimiento"
                        />
                    </Form.Item>

                    <Form.Item
                        name="detail"
                    >
                        <Input.TextArea
                            placeholder="Descripción de la mascota"
                        />
                    </Form.Item>

                    <Form.Item
                        name="avatar_url"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            listType="picture"
                            maxCount={1}
                            accept=".png,.jpeg,.jpg"
                            beforeUpload={(file) => {
                                return false;
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Subir imagen de mascota</Button>
                        </Upload>
                    </Form.Item>

                    {
                        loading ? <SpinLoading text='Editando mascota 🐾' />
                            :
                            message && <p className='error-message mb-2'>{message}</p>
                    }

                    <div className='display-flex gap-2 flex-wrap justify-content-center mt-2'>
                        <button className='btn btn--secondary' type='submit'>Editar</button>
                        <ButtonRegresar to={`/pet/${petId}`} />
                    </div>

                </Form>
            )}
        </div>
    );
};
