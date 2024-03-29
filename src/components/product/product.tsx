import React, { ForwardedRef, forwardRef, useRef, useState } from 'react'
import styles from './product.module.css'
import { ProductProps } from './product.props'
import Card from '../card/card'
import Image from 'next/image'
import Tag from '../tag/tag'
import cn from 'classnames'
import { convertToUSD, dedectedReview } from '../../helpers/helpers'
import Rating from '../rating/rating'
import { Button, Divider,  Review, ReviewForm,} from '..'
import {motion} from 'framer-motion'


const Product = motion( forwardRef(({ product, className, ...props }: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [reviewOpen, setReviewOpen] = useState<boolean>(false);

  const reivewRef = useRef<HTMLDivElement>(null)
	const scrollToReview = () =>{
		setReviewOpen(true)
		reivewRef.current?.scrollIntoView({behavior:'smooth' ,block:"start"})
	}
	const variants = {
		hidden:{
			height:0,
			opacity:0 
		},
		visible:{
			height:'auto',
			opacity:1 
		}
	}
	return (
		<div className={className} {...props} ref={ref}>
			<Card color='primary' className={styles.product}>
				<div className={styles.logo}>
					<Image src={product.images} alt={product.title} width={70} height={70} />
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{convertToUSD(product.price)}
					{product.oldPrice && (
						<Tag color='green' className={styles.oldPrice}>
							{convertToUSD(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{convertToUSD(product.credit)}/<span className={styles.month}>month</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.tags.length &&
						product.tags.map(t => (
							<Tag key={t} className={styles.category} color={'primary'}>
								{t}
							</Tag>
						))}
				</div>
				<div className={styles.priceTitle}>Price</div>
				<div className={styles.creditTitle}>Credit</div>
				<div className={styles.rateTitle}>
					 {product.reviewCount} <a href='#review' onClick={()=> scrollToReview()}>{dedectedReview(product.reviewCount)}</a></div>

				<Divider className={styles.hr} />

				<div className={styles.description}>{product.description}</div>

				<div className={styles.features}>
					{product.characteristics.length &&
						product.characteristics.map(ch => (
							<div className={styles.characteristic} key={ch.name}>
								<span className={styles.characteristicName}>{ch.name}</span>
								<span className={styles.characteristicDots}></span>
								<span className={styles.characteristicValue}>{ch.value}</span>
							</div>
						))}
				</div>

				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advantageTitle}>Advantages</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.disadvantageTitle}>Disadvantages</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>

				<Divider className={styles.hr2} />

				<div className={styles.actions}>
					<Button appearance='primary'>More Details</Button>
					<Button
						appearance='ghost'
						arrow={reviewOpen ? 'down' : 'right'}
						className={styles.reviewBtn}
						onClick={() => setReviewOpen(prev => !prev)}
					>
						Review
					</Button>
				</div>
			</Card>
			<motion.div  variants={variants} animate={reviewOpen ? 'visible': 'hidden'}>
			<Card
				color='white'
				ref={reivewRef}
				className={cn(styles.review,)}
			>
				{product.reviews.map(r => (
					<div key={r._id}>
						<Review review={r} />
						<Divider />
					</div>
				))}
				<ReviewForm productid={product._id} />
			</Card>			
			</motion.div>
		</div>
	);
}))

export default Product;