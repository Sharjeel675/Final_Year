import React from 'react'
import { supabase } from './Supabase'

const CordinatorAccess = async () => {
    try {
        const { data, error } = await supabase
            .from('student_form')
            .select("*")

        if (data) {
            return data
        }

        if (error) {
            console.log('Error fetching data:', error)
        }
    } catch (error) {

    }
}

export default CordinatorAccess

export const ProjectDetails = async (project_id:any) => {
    try {
        const { data, error } = await supabase
            .from('student_form')
            .select("*")
            .eq('project_id', project_id)
        if (data) {
            return data
        }

        if (error) {
            console.log('Error fetching data:', error)
        }
    } catch (error) {

    }
}

