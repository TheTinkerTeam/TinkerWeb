import React, { useState,} from "react";
import "../../../css/Classrooms.css";
import { withRouter, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import WorkspaceSection from "./classroomDetails/WorkspaceSection";
import StudentsSection from "./classroomDetails/StudentsSection";

const GET_CLASSROOM = gql`
  query getClassroom($id: ID!) {
    classroom(id: $id) {
      id
      className
      grade
      students {
        id
        uid
        email
        firstName
        lastName
      }
      assignments {
        date
        task
      }
      currentProject {
        id
        title
        description
        imageURL
        learning_objectives
        subjects
        tags
        grades
        bigIdea
        keyConcepts
        keyQuestion
      }
    }
  }
`;

const ADD_STUDENT = gql`
  mutation addStudent($classroomID: ID!, $email: String!) {
    addStudent(classroomID: $classroomID, email: $email) {
      id
    }
  }
`;

const DELETE_STUDENT = gql`
  mutation deleteStudent($classroomID: ID!, $uid: String!, $studentID: ID!) {
    deleteStudent(classroomID: $classroomID, uid: $uid, studentID: $studentID)
  }
`;

const ClassroomDetailsPage = (props) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const initialState = {
    isStudentsActive: true,
    isWorkspaceActive: true,
    currentStudentEmail: "",
    tasksList: [],
    currentTask: "",
    isMakeTeamsActive: true,
  };

  const [state, setState] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e, { name, value }) =>
    setState((prevState) => ({ ...prevState, [name]: value }));

  const studentAlreadyIn = (studentsList, email) => {
    return studentsList.map((student) => student.email).includes(email);
  };

  const handleNewStudentSubmit = async (id) => {
    setLoading(true);
    if (studentAlreadyIn(classroom.students, state.currentStudentEmail)) {
      // setMessage("Student has already joined your class.");
      console.log("Student has already joined your class.");
      setLoading(false);
      return;
    }
    if (state.currentStudentEmail.length !== 0) {
      await addStudent({
        variables: {
          classroomID: id,
          email: state.currentStudentEmail,
        },
        refetchQueries: [
          {
            query: GET_CLASSROOM,
            variables: {
              id: id,
            },
          },
        ],
      });
      setState((prevState) => ({
        ...prevState,
        currentStudentEmail: "",
      }));
    }
    setLoading(false);
  };

  const handleDeleteStudent = (uid, id) => {
    deleteStudent({
      variables: {
        classroomID: classroomID,
        uid: uid,
        studentID: id,
      },
      refetchQueries: [
        {
          query: GET_CLASSROOM,
          variables: {
            id: classroomID,
          },
        },
      ],
    });
  };

  const handleSubmitTask = () => {
    if (state.currentTask.length !== 0) {
      setState((prevState) => ({
        ...prevState,
        tasksList: [...prevState.tasksList, prevState.currentTask],
        currentTask: "",
      }));
    }
  };

  const toggleButton = () => {
    setState((prevState) => ({
      ...prevState,
      isStudentsActive: !prevState.isStudentsActive,
    }));
  };

  const toggleWorkspaceButton = () => {
    setState((prevState) => ({
      ...prevState,
      isWorkspaceActive: !prevState.isWorkspaceActive,
    }));
  };

  const {
    isStudentsActive,
    isWorkspaceActive,
    currentStudentEmail,
    tasksList,
    currentTask,
  } = state;

  const classroomID = props.match.params.id;

  const [addStudent] = useMutation(ADD_STUDENT);

  const [deleteStudent] = useMutation(DELETE_STUDENT);

  const { loading, error, data } = useQuery(GET_CLASSROOM, {
    variables: { id: classroomID },
  });

  let classroom = [];
  if (data && data.classroom) {
    classroom = data.classroom;
  }
  const currentProject = classroom.currentProject;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ classroomStudents: classroom.students });

  if (!classroom) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
          state: { alert: "No Such Classroom" },
        }}
      />
    );
  }

  // if (!state.classList.length) {
  //   setState({
  //     ...state,
  //     classList: classroom.students_name,
  //   });
  // }

  return (
    <div>
      <div className='classroom-title-style'>{classroom.className}</div>

      <StudentsSection
        handleNewStudentSubmit={handleNewStudentSubmit}
        currentStudentEmail={currentStudentEmail}
        handleChange={handleChange}
        studentAlreadyIn={studentAlreadyIn}
        classroom={classroom}
        isLoading={isLoading}
        classroomID={classroomID}
        capitalize={capitalize}
        handleDeleteStudent={handleDeleteStudent}
        isStudentsActive={isStudentsActive}
        toggleButton={toggleButton}
        Î
      />

      <WorkspaceSection
        isWorkspaceActive={isWorkspaceActive}
        props={props}
        currentProject={currentProject}
        tasksList={tasksList}
        handleChange={handleChange}
        currentTask={currentTask}
        capitalize={capitalize}
        toggleWorkspaceButton={toggleWorkspaceButton}
        handleSubmitTask={handleSubmitTask}
      />
    </div>
  );
};

export default withRouter(ClassroomDetailsPage);
