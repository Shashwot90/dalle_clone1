import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { gentRandomPrompt } from '../utlis'
import { FormField, Loader } from '../components'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', prompt: '',  photo: ''
  })
  const [generatingImages, setGeneratingImages] = useState(false)
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost