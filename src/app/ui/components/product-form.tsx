'use client'
import { forwardRef, type FieldsetHTMLAttributes, type FormHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'

import { Button, type ButtonProps } from '../atoms'
import { Field, type FieldProps } from '.'

import { cn } from '@/helpers/cn'

type DefaultFieldProps = Omit<FieldProps, 'id'>

const Root = forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>((props, ref) => {
	const { className, ...rest } = props
	return (
		<form ref={ref} className={cn(className, 'flex flex-col gap-8' )} {...rest} />
	)
})

Root.displayName = 'Root'

const Fieldset = (props: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {
	const { className, ...rest } = props
	return (
		<fieldset className={cn(className, 'flex flex-col gap-6')} {...rest} />
	)
}

const ID = (props: Pick<DefaultFieldProps, 'defaultValue' | 'value'>) => (
	<input type='hidden' name='id' id='id' {...props} />
)

const Name = (props: DefaultFieldProps) => (
	<Field type='text' id='name' labelText='Name' placeholder='Ex: Keychron K3' {...props} />
)

const ImageUrl = (props: DefaultFieldProps) => (
	<Field type='url' id='imageUrl' labelText='Image Url' placeholder='Ex: https://images.domain...' {...props} />
)

const Price = (props: DefaultFieldProps) => (
	<Field type='text' id='price' labelText='Price' placeholder='Ex: 580,00' {...props}/>
)

const Category = (props: DefaultFieldProps) => (
	<Field type='text' id='category' labelText='Category' placeholder='Ex: Keyboard' {...props} />
)

const Stock = (props: DefaultFieldProps) => (
	<Field type='number' id='stock' labelText='Stock Amount' placeholder='Ex: 2' {...props} />
)

const SubmitButton = (props: ButtonProps) => {
	const { className, ...rest } = props
	const { pending } = useFormStatus()
	return (
		<Button type="submit" className={cn(className, 'flex-1')} size='sm' {...rest} isLoading={pending} />
	)
}

export const ProductForm = {
	Root,
	Fieldset,
	Fields: {
		ID,
		Name,
		ImageUrl,
		Price,
		Category,
		Stock,
	},
	SubmitButton
}
