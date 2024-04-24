import './Form.css';
import { useForm } from "react-hook-form"

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    return (
        <form onSubmit={handleSubmit(data => {
            console.log(data);
            reset();
        })}>
            <div className='input-group'>
                <div>
                    <input {...register('firstName', { required: 'Es foraasd' })} type="text" placeholder="Fjost Nav" />
                    <p>{errors.firstName?.message}</p>
                </div>
                <div>
                    <input  {...register('lastName',
                        {
                            required: 'Es foraasd',
                            minLength: {
                                value: 4,
                                message: 'Neit laas 4'
                            }
                        })} type="text" placeholder="After Nav" />
                    <p>{errors.lastName?.message}</p>
                </div>
            </div>
            <div className='input-group'>
                <div>
                    <input {...register('email', {
                        required: 'Es foraasd',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Unkorrekt verd'
                        }
                    })} type="email" placeholder="Email" />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <input {...register('address', { required: 'Es foraasd' })} type="text" placeholder="Address" />
                    <p>{errors.address?.message}</p>
                </div>
            </div>
            <input type="submit" />
        </form>
    )
}