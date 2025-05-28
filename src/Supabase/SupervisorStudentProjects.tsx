import { supabase } from "./Supabase"


const SupervisorStudentProjects = async (supervisorname: string, setLoading: any) => {
  setLoading(true);
  try {
    const { data, error } = await supabase
      .from('student_form')
      .select("*")
      .eq('supervisor_name', supervisorname)

    if (data) {
      setLoading(false);
      return data
    }

    if (error) {
      setLoading(false);
      console.log("Error fetching data:", error.message);
      return null;
    }

  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
  finally {
    setLoading(false);
  }

}

export default SupervisorStudentProjects




export const ProjectApprovalBySupervisor = async (projectId: string, status: string, seBtntLoading:any) => {
  seBtntLoading(true);
  try {
    const { data, error } = await supabase
      .from('student_form')
      .update({ status: status })
      .eq('project_id', projectId)

    if (data) {
      seBtntLoading(false);
      return data
    }

    if (error) {
      seBtntLoading(false)
      console.log("Error updating data:", error.message);
      return null;
    }
    
  } catch (error: any) {
    console.error("Error updating data:", error.message);
  }finally{
    seBtntLoading(false)
  }
}