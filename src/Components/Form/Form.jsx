import './Form.css';
import { useForm } from "react-hook-form"

export const Form = () => {
    const {
        register,
        handleSubmit
    } = useForm();

    return (
        <form onSubmit={handleSubmit(data => {
            console.log(data);
        })}>
            <div>
                <input {...register('firstName', { required: true })} type="text" placeholder="Fjost Nav"  {...register("example")} />
                <input  {...register('lastName', { required: true })} type="text" placeholder="After Nav" />
            </div>
            <div>
                <input {...register('email', { required: true })} type="email" placeholder="Email" />
                <input {...register('address', { required: true })} type="text" placeholder="Address" />
            </div>
            <input type="submit" />
        </form>
    )
}