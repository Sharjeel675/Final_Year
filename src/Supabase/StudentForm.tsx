import React from 'react'
import { supabase } from './Supabase'

const SubmitStudentForm = async (team: any, supervisor: string, project_title: string) => {
    try {
        const { data, error, } = await supabase
            .from('student_form')
            .insert({
                team: team,
                supervisor_name: supervisor,
                project_title: project_title
            })

        if (error) {
            console.error('Error inserting data:', error.message)
        } else {
            alert('form successfully submitted:')

        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching data:', error.message);
        }
    }


}

export default SubmitStudentForm