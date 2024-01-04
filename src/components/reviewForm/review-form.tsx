import styles from './review-form.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Rating from '../rating/rating';
import { useState } from 'react';
import { Button, TextArea } from '..';
import { ReviewFormProps } from './review-form.props';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewResponse } from './review-form.interface';
import axios from 'axios';
import CloseIcon from './close.svg'
import Error from './error';
import Success from './succes';
const ReivewForm = ({ productid, className, ...props }: ReviewFormProps): JSX.Element => {

	 const [error, setError] =  useState<boolean>(false)
	 const [isSuccess , setIsSuccess] = useState<boolean>(false)
   
      const {register, control,handleSubmit,formState:{errors},reset}= useForm<IReviewForm>()

  const onSubmit = async (formData: IReviewForm) => {
    setError(false);
    setIsSuccess(false);
    try {
      const { status } = await axios.post<IReviewResponse>(`${process.env.NEXT_PUBLIC_API}/posts`, {
        ...formData,
        productId: productid,
      });
      if (status === 201) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      setError(true);
    }
  };
	return (
		<form  onSubmit={handleSubmit(onSubmit)} >
			<div className={cn(className, styles.reviewForm)} {...props} >
			<Input placeholder='Name' className={styles.name}{...register('name',{required:{value:true ,message:'Name is required'}})}  error={errors.name}/>
			<Input placeholder='Title' className={styles.title} {...register('title',{required:{value:true,message:'Title is required'}})}  error={errors.name} />
			<div className={styles.rating}>
				<span>Rating: </span>
				<Controller
				
				control={control} rules={{required:{value:true, message:'Rating is required'}}} name='rating'
				 render={({field:{ref ,value ,onChange}})=> <Rating isEditabled rating={value} ref={ref} error={errors.name}  setRating={onChange} />}
				/>
				
			</div>
			<TextArea placeholder='Description' className={styles.description} 
			error={errors.name} 
			{...register('description',{required:{value:true,message:'disctiption is required'}})} />
			<div className={styles.submit}>
				<Button appearance='primary'>Submit</Button>
				<span className={styles.info}>* Your review will be moderated and reviewed before being published.</span>
			</div>
		</div>
	{isSuccess && <Success setIsSuccess={setIsSuccess} />}

			{error && <Error setError={setError} />}
		</form>
		
	);
};

export default ReivewForm;
