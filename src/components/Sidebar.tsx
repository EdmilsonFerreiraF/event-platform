import { gql, useQuery } from "@apollo/client"

import {
    useGetLessonsQuery,
} from '../generated/graphql'
import { Lesson } from "./Lesson"

interface SidebarProps {
    isMobileMenuOpen: boolean
}

export const Sidebar = (props: SidebarProps) => {
    const { data } = useGetLessonsQuery()

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
                            slug={lesson.slug as string}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}