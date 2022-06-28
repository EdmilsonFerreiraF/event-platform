import { gql, useQuery } from "@apollo/client"

import { Lesson } from "./Lesson"

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
        isMobileMenuOpen: boolean
    }[]
}

interface SidebarProps {
    isMobileMenuOpen: boolean
}

export const Sidebar = (props: SidebarProps) => {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className={`w-full ${props.isMobileMenuOpen ? 'fixed z-50 h-full' : 'hidden w-[348px]'} xl:block bg-gray-700 p-6 border-l border-gray-600`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}