import { supabase } from "./Supabase"


const SupervisorStudentProjects = async (supervisorname:string) => {
  try {
    const { data, error } = await supabase
      .from('student_form')
      .select("*")
      .eq('supervisor_name', supervisorname)

    if (data) {
      return data
    }

    if (error) {
      console.log("Error fetching data:", error.message);
      return null;
    }

  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }

}

export default SupervisorStudentProjects