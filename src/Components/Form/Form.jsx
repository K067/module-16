import './Form.css';
import { useForm } from "react-hook-form"

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <form onSubmit={handleSubmit(data => {
            console.log(data);
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
                <input {...register('email', { required: 'Es foraasd' })} type="email" placeholder="Email" />
                <input {...register('address', { required: 'Es foraasd' })} type="text" placeholder="Address" />
            </div>
            <input type="submit" />
        </form>
    )
}