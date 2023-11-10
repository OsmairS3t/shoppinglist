import React, { useState } from 'react';
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Container, Title, GroupInput, LabelInput, InputForm, ButtonSubmit, Error, ButtonIngredient } from './styles';

// zod => https://www.youtube.com/watch?v=XSbMSSdGSdg&t=1415s
// type FormData = {
//     firstName: string
//     lastName: string
//     product: string
//     ingredients: string
// }

const schema = z.object({
    firstName: z.string().min(1, { message: 'Required' }).transform(firstName => {
        return firstName.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
    }),
    lastName: z.string().min(1, { message: 'Required' }),
    product: z.string().min(1, { message: 'Product Required' }),
    ingredients: z.array(z.object({
        description: z.string().min(1, { message: 'Ingrediente deve ter nome.' }),
        price: z.number().min(1).max(100)
    }))
});

type FormDataSchema = z.infer<typeof schema>

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormDataSchema>({
        resolver: zodResolver(schema)
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    })

    function SaveFormData(data: FormDataSchema) {
        console.log(data)
    }

    function AddNewIngredient() {
        append({ description: '', price: 0 })
    }

    return (
        <Container>
            <Title>Cadastrar Produto</Title>
            <form onSubmit={handleSubmit(SaveFormData)}>
                <GroupInput>
                    <LabelInput htmlFor='firstName'>First Name</LabelInput>
                    <InputForm id='firstName' {...register("firstName")} />
                    {errors.firstName && <Error>{errors.firstName?.message}</Error>}
                </GroupInput>
                <GroupInput>
                    <LabelInput htmlFor='lastName'>Last Name</LabelInput>
                    <InputForm id='lastName' {...register("lastName")} />
                    {errors.lastName && <Error>{errors.lastName?.message}</Error>}
                </GroupInput>
                <GroupInput>
                    <LabelInput htmlFor='product'>Product</LabelInput>
                    <InputForm id='product' {...register("product")} />
                    {errors.product && <Error>{errors.product?.message}</Error>}
                </GroupInput>
                <GroupInput>
                    <LabelInput htmlFor=''>Ingreditents:</LabelInput>
                    <ButtonIngredient type='button' onClick={AddNewIngredient}>+ Ing</ButtonIngredient>
                    {fields.map((field, index) => {
                        return (
                            <GroupInput key={field.id}>
                                <InputForm type="text" id='description' {...register(`ingredients.${index}.description`)} />
                                <InputForm type="number" id='price' {...register(`ingredients.${index}.price`)} />
                            </GroupInput>
                        )
                    })}
                </GroupInput>

                <ButtonSubmit type="button">
                    Cadastrar
                </ButtonSubmit>
            </form>

        </Container>
    )

}

