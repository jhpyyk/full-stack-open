import Content from "./Content";
import Header from "./Header";

export interface CourseInterface {
    name: string
    id: number
    parts: {
        name: string
        exercises: number
        id: number
    }[]
}

export interface CourseProps {
    course: CourseInterface
}

const Course = ({ course }: CourseProps): React.JSX.Element => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course